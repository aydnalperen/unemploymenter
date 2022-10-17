import React from 'react';
import Select from "react-tailwindcss-select";


const countryOptions = [
    {value : "us", label : "United States"},
    {value : "tur", label : "Turkiye"},
    {value : "uk", label : "United Kingdom"}
]
const SelectBox = ({countryOptions,countryChangeHandler,selectedCountry})=>{

    
    return (
        <>
            <Select
                
                placeHolder = {selectedCountry}
                value = {selectedCountry}
                id = "selectCountry"
                instanceId="selectCountry"
                name ="countries"
                className = "multiselect"
                classNamePrefix="select"
                options = {countryOptions}
                onChange = {countryChangeHandler}
                
            />
        </>
    );
}

export default SelectBox