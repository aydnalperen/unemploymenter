import React from 'react';
import Layout from '../components/layout'
import SelectBox from '../components/selectBox';
import Select from 'react-select';


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
            allResults : result[1].map((year) => year.value)
        }
    }
}  



const Home = ({allResults})=> {
    
    const [results, setResults] = React.useState(allResults)
    const [selectedCountry, setCountry] = React.useState('us')
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
    
        return result[1]?.map((year)=> year.value)
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

            <h1>All Posts</h1>
            {results?.map((post, idx) => (
                <div key={idx}>{post}</div>))}
            </Layout>
        </>
    )
}
export default Home