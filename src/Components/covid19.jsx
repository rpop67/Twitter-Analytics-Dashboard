import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import { Bar as BarChart } from 'react-chartjs-2';
import '../covid19.css';

defaults.global.maintainAspectRatio = false;
const wordFreq_LineGraph = {
	labels:  ['account','thanks','help','back','call','sorry','bank','customer','banking','card','link','message','phone','loan','branch','number','online','payment','team','application','email','code','service','send','check','detail','credit','working','reply','post'],
	datasets: [
		{
			label: 'Frequent Words',
			data: [119,62,59,59,58,52,47,44,44,44,41,34,34,34,34,33,31,31,31,30,29,29,27,26,26,26,25,25,23,23],
			fill: true,
			backgroundColor: 'rgba(103, 163,163, 0.7)',
			borderColor: 'rgba(88, 122, 122,1)'
		}
	]
};

const wordFreq_options_LineGraph = {
	title: {
		display: false,
		// text: 'Banking related Tweets Trend'
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

const wordFreq_legend_LineGraph = {
	display: true,
	position: 'bottom',
	labels: {
		fontColor: '#323130',
		fontSize: 14
	}
};


// line chart- covid vs all

defaults.global.maintainAspectRatio = false;
const data_LineGraph = {
	labels:  ['Febraury','March','April','May'],
	datasets: [
		{
			label: 'All tweets',
			data: [ 2949,7031,4509,5773],
			fill: true,
			backgroundColor: 'rgba(103, 163,163, 0.7)',
			borderColor: 'rgba(103, 163, 163,1)'
		},
		{
			label: 'Covid-19 tweets',
			data: [ 1,366,154,134],
			fill: true,
			// borderColor: '#742774'
			borderColor: 'rgba(88, 122, 122,1)',
            backgroundColor:'rgba(88, 122, 122,0.8)'
		}
	]
};

const data_StackedBar = {
	labels: ['Febraury','March','April','May'],
	datasets: [
		{
			label: 'Positive Tweets',
			data:  [1,166,60,56],
			// backgroundColor: '#742774' // green
			backgroundColor:'#414f4f'
		},
		{
			label: 'Negative Tweets',
			data: [0,80,25,20],
			backgroundColor: '#587a7a' // yellow
		},
		{
			label: 'Neutral Tweets',
			data:[0,120,59,58],
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
							<p style={mystyle}> Distribution of frequently used terms</p>
						</div>
						<div className="chart-container">
							<Line data={wordFreq_LineGraph} legend={wordFreq_legend_LineGraph} options={wordFreq_options_LineGraph} />
						</div>
					</div>
					<div className="quater" id="div4">
						<div class="container text-center ">
							<p style={mystyle}> Word Cloud of frequently used terms</p>
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
