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
const ChartComp = ({years, values})=>{

    const data = {
        labels : years,
        datasets: [
            {
                label : "% of Unemployment",
                data: values,
            }
        ],
    }
    return (
        <>
            <div className='w-1/2'>
                <Bar data = {data}  options = {options} />
            </div>
        </>
    )
}

export default ChartComp