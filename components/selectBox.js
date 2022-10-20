import React from 'react';
import Select from "react-select";


const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: 500,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 20,
      
    }),
    container :(provided, state) => ({
      ...provided,
      width: 500,
      padding: 20,
    })
}

const SelectBox = ({options,changeHandler,placeHolder,id,name})=>{

    
    return (
        <>
            <Select
                styles={customStyles}
                width = '500px'
                placeHolder = {placeHolder}
                value = {placeHolder}
                id ={id}
                instanceId={id}
                name ={name}
                
                options = {options}
                onChange = {changeHandler}
                
            />
        </>
    );
}

export default SelectBox