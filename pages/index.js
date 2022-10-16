import React, { useState } from 'react';
import Layout from '../components/layout'
import Select from 'react-select';
import Chart from '../components/chart'
import ChartComp from '../components/chart';

const countryOptions = [
    {value : "afg", label : "Afghanistan"},
    {value : "alb", label : "Albania"},
    {value : "dza", label : "Algeria"},
    {value : "asm", label : "American Samoa"},
    {value : "and", label : "Andorra"},
    {value : "ago", label : "Angola"},
    {value : "atg", label : "Antigua and Barbuda"},
    {value : "arg", label : "Argentina"},
    {value : "arm", label : "Armenia"},
    {value : "abw", label : "Aruba"},
    {value : "aus", label : "Australia"},
    {value : "aut", label : "Austria"},
    {value : "aze", label : "Azerbaijan"},
    {value : "bhs", label : "Bahamas, The"},
    
    {value : "us", label : "United States"},
    {value : "tur", label : "Turkiye"},
    {value : "gb", label : "United Kingdom"}
]
export const getServerSideProps = async () =>{

    const res = await fetch(
        'http://api.worldbank.org/v2/country/us/indicator/SL.UEM.TOTL.ZS?format=json'
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
    
    const [selectedCountry, setCountry] = useState({value : "us", label : "United States"})

    const [years, setYears] = useState(initYears)
    const [values, setValues] = useState(initValues)


    const countryChangeHandler = async(country)=>{
        let results = await fetchCountryData(country.value)

        results = results.filter(n => n.value).reverse()
        let newYears = results.map((year)=> year.date)
        let newValues = results.map((year)=> year.value)
        setCountry(country)
        setYears(newYears)
        setValues(newValues)
    }

    const fetchCountryData = async (country)=>{
        
        const res = await fetch(
            `http://api.worldbank.org/v2/country/${country}/indicator/SL.UEM.TOTL.ZS?format=json`
        )
    
        let result = await res.json()
    
        return result[1]
    }

    return (
        <>
            <Layout>
            <Select
                id = "selectCountry"
                instanceId="selectCountry"
                name ="countries"
                className = "multiselect"
                classNamePrefix="select"
                options = {countryOptions}
                onChange = {countryChangeHandler}
                placeHolder = {selectedCountry}
            />
            <h1>{selectedCountry.label}</h1> 

            <Chart years={years} values = {values}/>
            </Layout>
        </>
    )
}
export default Home