import { Component } from 'react';
import { Histogram} from "./Histogram";



export class HistogramContainer extends Component {
    state = {
        results: [],
        chartData: {},
        chartOptions: {},
    };

    async componentDidMount() {
        const urlPassed = 'https://hu-toetsregistratie.nl/api/cijfer/?toets_code=1&voldoende=true'
        const urlFailed = 'https://hu-toetsregistratie.nl/api/cijfer/?toets_code=1&voldoende=false'
        const responsePassed = await fetch(urlPassed);
        const responseFailed = await fetch(urlFailed);

        const dataPassed = await responsePassed.json();
        const dataFailed = await responseFailed.json();


        // all the fetched data
        // const data = [dataPassed, dataFailed]



        // counting the failed and passed results to nFailed and nPassed
        const nFailed = Object.keys(dataFailed).length
        const nPassed = Object.keys(dataPassed).length

        // n amount of failed and passed results
        const resultData = [nPassed, nFailed];


        // Developer data checks
        console.log("Het aantal voldoendes is: " + nPassed)
        console.log("Het aantal onvoldoendes is: " + nFailed)
        console.log(resultData)

        // saving the data to the components' state
        this.setState({
                    results: resultData,

                    chartData: {
                        labels: ['Toets 1', 'Toets 2', 'Toets 3', 'Toets 4'],
                        datasets: [
                            {
                                label: ['Voldoendes'],
                                data: [145, 133, 111, 100],
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(54, 162, 235, 0.2)'],
                                borderColor: [
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(54, 162, 235, 1)'],
                                borderWidth: 0.7,
                        },
                            {
                                label: ['Onvoldoendes'],
                                data: [15, 17, 9, 20],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 99, 132, 0.2)'],
                                borderColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 99, 132, 0.2)'],
                                borderWidth: 0.7,
                            }
                        ]},

                    chartOptions: {
                        barValueSpacing: 30,
                        scales: {yAxes: [{ticks: {
                                beginAtZero: true,
                                min: 0,}}]}
                        },
                }
        );
    }

    render() {
        return (
        <div>
            <Histogram histogramData={this.state.chartData} histogramOptions={this.state.chartOptions}/>
        </div>
        )
    }
}