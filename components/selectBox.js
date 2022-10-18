import React from 'react';
import Select from "react-select";


const SelectBox = ({options,changeHandler,placeHolder,id,name})=>{

    
    return (
        <>
            <Select
                
                placeHolder = {placeHolder}
                value = {placeHolder}
                id ={id}
                instanceId={id}
                name ={name}
                className = "multiselect"
                classNamePrefix="select"
                options = {options}
                onChange = {changeHandler}
                
            />
        </>
    );
}

export default SelectBox