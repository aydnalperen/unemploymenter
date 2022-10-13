import Chart from 'chart.js/auto';

import { useEffect } from "react";

import {Bar, Line, Scatter, Bubble } from "react-chartjs-2"


const data = {
    labels : ["1", "2", "3"],
    datasets: [
        {
            data: [1, 2, 3 ]
        }
    ],
}

const options = {
    plugin : {
        legend : {
            display : false,
        },
    },
    elements : {
        line : {
            tension : 0, 
            borderWith : 2,
            borderColor : "red",
            fill : "start",
            backgroundColor : "green"
        },
        point : {
            radius : 0,
            hitRadius : 0,
        },
    },
    scales :  {
        xAxis : {
            display: false,
        },
        yAxis : {
            display: false,
        },
    },
};
const ChartComp = ()=>{

    return (
        <>
            <Line data = {data}  options = {options} />
        </>
    )
}

export default ChartComp