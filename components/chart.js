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
const ChartComp = ({unData})=>{

    const data = {
        labels : unData.map((year)=> year.date),
        datasets: [
            {
                label : unData[0].country,
                data: unData.map((year)=>year.value),
            }
        ],
    }
    return (
        <>
            <div className='w-1/2'>
                <Line data = {data}  options = {options} />
            </div>
        </>
    )
}

export default ChartComp