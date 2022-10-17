import React from 'react';
import Select from "react-select";


const countryOptions = [
    {value : "us", label : "United States"},
    {value : "tur", label : "Turkiye"},
    {value : "uk", label : "United Kingdom"}
]
const SelectBox = ({countryOptions,countryChangeHandler,selectedCountry})=>{

    return (
        <>
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
        </>
    );
}

export default SelectBox