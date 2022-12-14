import Chart from 'chart.js/auto';

import { useEffect, useState } from "react";

import {Bar, Line, Scatter, Bubble } from "react-chartjs-2"




const options = {
    plugin : {
        legend : {
            display : true,
        },
    },
    elements : {
        line : {
            tension : 0, 
            borderWith : 2,
            borderColor : "red",
            fill : "start",
            
        },
        point : {
            radius : 0,
            hitRadius : 0,
        },
    },
    scales :  {
        xAxis : {
            display: true,
        },
        yAxis : {
            display: true,
        },
    },
};
const ChartComp = ({years, values,graphLabel})=>{

    const data = {
        labels : years,
        datasets: [
            {
                label : graphLabel,
                data: values,
                backgroundColor : "grey"
            }
        ],
    }
    return (
        <>
            <div className='lg:w-3/5 md:w-5/6 sm:w-3/4'>
                <Bar data = {data}  options = {options} />
            </div>
        </>
    )
}

export default ChartComp