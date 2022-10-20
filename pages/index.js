import React, { useState } from 'react';
import Layout from '../components/layout'
import Select from 'react-select';
import Chart from '../components/chart'
import ChartComp from '../components/chart';
import SelectBox from '../components/selectBox';

const CountryOptions = require('../data/country_codes').default
const IndicatorOptions = require('../data/indicator_codes').default

export const getServerSideProps = async () =>{

    const res = await fetch(
        'http://api.worldbank.org/v2/country/usa/indicator/SL.UEM.TOTL.ZS?format=json'
    )
    let result = await res.json()

    let years = result[1]

    years = years.filter(function(n){
        return n.value != null;
    }).reverse()
    
    return {
        props :{
            initYears : years.map((year) => year.date),
            initValues : years.map((year)=> year.value)
        }
    }
}  



const Home = ({initYears, initValues})=> {
    
    const [selectedCountry, setCountry] = useState({value : "usa", label : "United States"})
    const [selectedIndicator, setIndicator] = useState ({value:"SL.UEM.TOTL.ZS", label: "Unemployment"})

    const [years, setYears] = useState(initYears)
    const [values, setValues] = useState(initValues)


    const countryChangeHandler = async(country)=>{
        let results = await fetchCountryData(country.value, selectedIndicator.value)
        setCountry(country)
        if (results == null) {
            setValues(null)
            return
        }
        results = results.filter(n => n.value).reverse()
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

        let newYears = results.map((year)=> year.date)
        let newValues = results.map((year)=> year.value)
        
        setYears(newYears)
        setValues(newValues)
        
    }

    const fetchCountryData = async (country,indicator)=>{
        
        const res = await fetch(
            `http://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json`
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
            </Layout>
        </>
    )
}
export default Home