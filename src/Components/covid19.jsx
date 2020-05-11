import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import { Bar as BarChart } from 'react-chartjs-2';
import '../covid19.css';

defaults.global.maintainAspectRatio = false;
const data_LineGraph = {
	labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
	datasets: [
		{
			label: 'All tweets',
			data: [ 227, 195 ,591, 724, 463, 408],
			fill: true,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: 'rgba(75,192,192,1)'
		},
		{
			label: 'Covid-19 tweets',
			data: [ 0, 5, 18, 21, 14, 4],
			fill: false,
			borderColor: '#742774'
		}
	]
};

const data_StackedBar = {
	labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
	datasets: [
		{
			label: 'Positive',
			data: [67.8,55,45,80,20,50],
			// backgroundColor: '#742774' // green
			backgroundColor:'#414f4f'
		},
		{
			label: 'Negative',
			data: [20.7,11,44,20,55,30],
			backgroundColor: '#587a7a' // yellow
		},
		{
			label: 'Neutral',
			data: [11.4,33,10,10,46,60],
			backgroundColor: '#67a3a3' // red
		}
	]
};

const legend_LineGraph = {
	display: true,
	position: 'bottom',
	labels: {
		fontColor: '#323130',
		fontSize: 14
	}
};

const legend_StackedBar = {
	display: true,
	cursor: 'pointer'
};

const options_LineGraph = {
	title: {
		display: true,
		text: 'Covid Tweets Trend'
	},
	scales: {
		yAxes: [
			{
				ticks: {
					suggestedMin: 0,
					suggestedMax: 100
				}
			}
		]
	},
	maintainAspectRatio: false
};

const options_StackedBar = {
	scales: {
		xAxes: [{ stacked: true }],
		yAxes: [{ stacked: true }]
	}
};

const mystyle = {
	color: 'black'
};

class Covid19 extends Component {
	state = {};

	render() {
		return (
			<div className="belowNav">
				<div className="App-Header">
					<div className="quater" id="div1">
						<div class="container text-center ">
							<p style={mystyle}> Trend of Covid 19 tweets</p>
						</div>
						<div className="chart-container">
							<Line data={data_LineGraph} legend={legend_LineGraph} options={options_LineGraph} />
						</div>
					</div>

					<div className="quater" id="div2">
						<div class="container text-center ">
							<p style={mystyle}> Polarity of Covid-19 Tweets</p>
						</div>
						<div className="chart-container">
							<BarChart options={options_StackedBar} data={data_StackedBar} legend={legend_StackedBar} />
						</div>
					</div>

					<div className="quater" id="div3">
						<div class="container text-center ">
							<p style={mystyle}> Polarity of Covid-19 Tweets</p>
						</div>
						<div className="image-container">
							<img src={ require('../images/covidWF.png') }/>
						</div>
					</div>
					<div className="quater" id="div4">
						<div class="container text-center ">
							<p style={mystyle}> Polarity of Covid-19 Tweets</p>
						</div>
						<div className="image-container">
							<img src={ require('../images/covidWC.png') }/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Covid19;
