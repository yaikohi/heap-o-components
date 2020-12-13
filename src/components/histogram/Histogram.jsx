import React from 'react'
import { Bar } from 'react-chartjs-2'

// @WHAT
// In the future I want to be able to fill my placeholder data with data from an API.
// This component is the beginning for this.
// @ALTERNATIVES For now it's a bit unnecessary and I could have just imported the { Bar } component
// from react-chartjs-2 directly instead.
export const Histogram = ({ histogramData, histogramOptions }) => {
    return (
        <div>
            <Bar data = {histogramData} options={histogramOptions}/>
        </div>
    )
}
