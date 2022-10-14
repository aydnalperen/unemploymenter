import React, { useState } from 'react';
import Layout from '../components/layout'
import Select from 'react-select';
import Chart from '../components/chart'
import ChartComp from '../components/chart';

const countryOptions = [
    {value : "us", label : "United States"},
    {value : "tur", label : "Turkiye"},
    {value : "gb", label : "United Kingdom"}
]
export const getServerSideProps = async () =>{

    const res = await fetch(
        'http://api.worldbank.org/v2/country/us/indicator/SL.UEM.TOTL.ZS?format=json'
    )
    let result = await res.json()

    return {
        props :{
            allResults : result[1].map((year) => ({date:year.date, value:year.value, country: year.country.value}))
        }
    }
}  



const Home = ({allResults})=> {
    
    const [results, setResults] = React.useState(allResults)
    const [selectedCountry, setCountry] = React.useState({value : "us", label : "United States"})


    // const [labels, setLabels] = useState([])
    // const [values, setValues] = useState([])

    const countryChangeHandler = async(country)=>{
        let results = await fetchCountryData(country.value)
        setCountry(country)
        setResults(results)
    }

    const fetchCountryData = async (country)=>{
        
        const res = await fetch(
            `http://api.worldbank.org/v2/country/${country}/indicator/SL.UEM.TOTL.ZS?format=json`
        )
    
        let result = await res.json()
    
        return result[1]?.map((year)=> ({date:year.date, value:year.value, country: year.country.value}))
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

            <Chart unData={results}/>
            </Layout>
        </>
    )
}
export default Home