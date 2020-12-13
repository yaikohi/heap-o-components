import React from 'react'
import { Bar } from 'react-chartjs-2'


export const Histogram = ({ histogramData, histogramOptions }) => {
    return (
        <div>
            <Bar data = {histogramData} options={histogramOptions}/>
        </div>
    )
}
