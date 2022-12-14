import React, { useState } from 'react';
import Layout from '../components/layout'
import Chart from '../components/chart'
import SelectBox from '../components/selectBox';
import DataTable from '../components/table';

const CountryOptions = require('../data/country_codes').default
const IndicatorOptions = require('../data/indicator_codes').default

export const getServerSideProps = async () =>{

    const res = await fetch(
        'https://api.worldbank.org/v2/country/usa/indicator/SL.UEM.TOTL.ZS?format=json'
    )
    let result = await res.json()

    let years = result[1]

    years = years.filter(function(n){
        return n.value != null;
    }).reverse()
    
    return {
        props :{
            initTable : years,
            initYears : years.map((year) => year.date),
            initValues : years.map((year)=> year.value)
        }
    }
}  



const Home = ({initYears, initValues,initTable})=> {
    
    const [selectedCountry, setCountry] = useState({value : "usa", label : "United States of America"})

    const [selectedIndicator, setIndicator] = useState ({value:"SL.UEM.TOTL.ZS", label: "Unemployment, total (% of total labor force)"})

    const [years, setYears] = useState(initYears)
    const [values, setValues] = useState(initValues)

    const [tableData, setTableData]  = useState(initTable)


    const countryChangeHandler = async(country)=>{
        let results = await fetchCountryData(country.value, selectedIndicator.value)
        setCountry(country)
        if (results == null) {
            setValues(null)
            return
        }
        results = results.filter(n => n.value).reverse()
        setTableData(results)

        let newYears = results.map((year)=> year.date)
        let newValues = results.map((year)=> year.value)
        setYears(newYears)
        setValues(newValues)
    }

    const indicatorChangeHandler = async(indicator) => {
        let results = await fetchCountryData(selectedCountry.value, indicator.value)
        setIndicator(indicator)
        if (results == null) {
            setValues(null)
            return
        }
        results = results.filter(n=> n.value).reverse()

        setTableData(results)

        let newYears = results.map((year)=> year.date)
        let newValues = results.map((year)=> year.value)
        
        setYears(newYears)
        setValues(newValues)
        
    }

    const fetchCountryData = async (country,indicator)=>{
        
        const res = await fetch(
            `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json`
        )
            
        let result = await res.json()
    
        return result[1]

    }

    return (
        <>
            <Layout>
            <SelectBox options={CountryOptions} changeHandler = {countryChangeHandler} placeHolder = {selectedCountry} id = "countries" name = "countries"/>
            <SelectBox options={IndicatorOptions} changeHandler = {indicatorChangeHandler} placeHolder = {selectedIndicator} id = "indicators" name = "indicators"/>
            <h1>{selectedCountry.label}</h1> 

            <Chart years={years} values = {values} graphLabel = {selectedIndicator.label}/>

            {/* <DataTable list={tableData}/> */}
            </Layout>
        </>
    )
}
export default Home