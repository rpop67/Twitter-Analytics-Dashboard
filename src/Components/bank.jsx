import React, { Component } from 'react';
import '../bank.css';
import { Line, defaults } from 'react-chartjs-2';
import { Bar as BarChart } from 'react-chartjs-2';


defaults.global.maintainAspectRatio = false;
const wordFreq_LineGraph = {
	labels:  ['account','help','thanks','bank','call','customer','back','link','banking','online','payment','branch','card','number','money','sorry','phone','team','message','business','check','loan','send','email','code','credit','people','post','service','received'],
	datasets: [
		{
			label: 'Frequent Words',
			data: [2959,1975,1966,1842,1778,1366,1257,1222,1211,1198,1129,1074,1065,1042,1030,1010,979,909,782,779,765,734,713,709,709,682,682,665,634,632],
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
	tooltips: {
		callbacks: {
			label: function (tooltipItem, data) {		

		
				var toolTipText =
					(data.labels[
						tooltipItem.index
					] )+' : '+(data.datasets[tooltipItem.datasetIndex].data[
						tooltipItem.index
					] );
				
				return toolTipText;
			}
		}
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



// LineChart--bank vs all

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
			label: 'Bank tweets',
			data: [2948,6665, 4355 ,5639],
			fill: true,
            borderColor: 'rgba(88, 122, 122,1)',
            backgroundColor:'rgba(88, 122, 122,0.8)'
		}
	]
};

const data_StackedBar = {
	labels:  ['Febraury','March','April','May'],
	datasets: [
		{
			label: 'Positive Tweets',
			data: [ 1268,3173,1991 ,2328],
			// backgroundColor: '#742774' // green
			backgroundColor:'#414f4f'
		},
		{
			label: 'Negative Tweets',
			data: [570,1262,825,1180],
			backgroundColor: '#587a7a' // yellow
		},
		{
			label: 'Neutral Tweets',
			data: [1110,2230,1539,2131],
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
		text: 'Banking related Tweets Trend'
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

class Bank extends Component {
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
						{/* <div className="image-container">
							<img src={ require('../images/bankWF.png') }/>
						</div> */}
					</div>
					<div className="quater" id="div4">
						<div class="container text-center ">
							<p style={mystyle}> Word Cloud of frequently used terms</p>
						</div>
						<div className="image-container">
							<img src={ require('../images/bankWC.png') }/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Bank;
