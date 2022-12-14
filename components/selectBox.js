import React from 'react';
import Select from "react-select";


const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: 400,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 20,
      
    }),
    container :(provided, state) => ({
      ...provided,
      width: 400,
      padding: 20 ,
    })
}

const SelectBox = ({options,changeHandler,placeHolder,id,name})=>{

    
    return (
        <>
            <Select
                styles={customStyles}
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