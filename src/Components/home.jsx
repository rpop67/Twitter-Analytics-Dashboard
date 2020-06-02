import React, { Component } from 'react';
import '../home.css';
import Carousel from 'react-bootstrap/Carousel';
import {Doughnut,Line} from 'react-chartjs-2';

const state = {
	labels: ['Positive Tweets', 'Negative Tweets', 'Neutral Tweets'],
	datasets: [
		{
			label: ['Positive','Negative','Neutral'],
			backgroundColor: ['#414f4f', '#587a7a', '#67a3a3'],
			hoverBackgroundColor: ['#3a9e6c', '#d43c3c', '#272928'],
			data: [14466, 6267, 11431],
			
		}
	]
};


// #LineChart----- polarity trend

var covidPosList=[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,6,0,1,0,1,0,2,3,10,1,4,7,15,8,4,15,15,6,9,5,15,11,11,6,5,4,0,8,4,3,3,4,2,3,2,1,2,2,0,1,2,1,2,3,0,0,3,1,2,2,2,0,0,4,2,1,0,2,1,0,5,2,1,3,1,2,0,3,4,3,2,3,1,0,1,1,1,1,5,3,4,1,2,3,0,1,0,0];
var covidNegList=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,1,5,2,1,1,2,4,7,8,6,0,8,5,7,5,8,0,4,3,0,2,5,2,1,1,4,1,3,1,1,0,0,0,1,0,1,3,0,1,2,0,1,2,1,0,1,1,0,0,0,0,0,1,0,2,2,2,0,1,0,0,1,1,0,1,0,0,3,1,1,0,2,1,0,0,0,0,1,0,0,0];
var covidNeuList=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,0,1,0,0,2,1,0,1,2,2,5,4,10,10,10,14,7,10,10,11,9,4,1,1,1,0,6,10,3,3,2,3,4,3,2,0,0,0,0,2,2,1,2,1,0,2,3,1,1,1,0,1,1,2,3,0,0,1,2,5,8,2,8,0,2,0,0,0,3,0,1,1,0,2,4,4,0,0,3,2,1,3,3,1,1,1,0];
var bankPosList=[60,22,80,48,46,65,28,43,13,30,46,44,35,48,35,20,39,88,57,51,50,35,27,53,55,42,51,57,0,25,75,67,58,68,48,35,25,47,59,58,43,46,66,34,88,133,147,213,217,163,76,244,259,192,260,126,99,82,120,0,142,128,119,55,37,88,94,85,109,52,49,15,42,65,68,68,66,47,37,69,57,75,109,62,36,44,77,61,35,0,86,45,48,115,87,117,161,64,79,35,108,94,104,81,74,40,36,62,79,52,60,81,64,97,71,88,105,80,62,28,25];
var bankNegList=[19,16,21,25,27,33,26,22,9,13,22,18,13,20,19,10,24,32,38,18,11,11,13,12,22,21,26,29,0,13,28,32,24,28,20,16,9,13,23,17,16,17,25,12,32,67,51,60,67,82,32,87,110,88,87,64,43,40,59,0,51,42,39,25,18,43,39,48,46,19,16,9,8,24,30,20,32,21,15,36,29,36,39,27,16,14,37,24,22,0,50,24,21,50,45,62,77,23,42,14,44,52,61,38,43,16,23,45,42,34,39,37,22,48,41,40,50,42,36,10,9];
var bankNeuList=[55,24,57,50,53,67,24,29,15,40,51,39,31,47,40,20,34,66,48,42,43,30,27,38,42,29,33,36,0,32,45,54,47,45,21,25,12,36,34,36,27,32,34,28,70,87,92,125,137,113,49,174,161,150,219,142,54,54,95,0,113,80,84,20,20,73,71,57,50,31,23,15,28,40,58,52,56,35,16,42,49,62,85,71,34,32,88,53,101,0,76,49,37,147,130,110,121,46,48,25,97,85,91,91,63,36,43,87,64,55,68,46,39,72,70,79,77,63,60,29,27];

var posList=[]
var negList=[]
var neuList=[]
for (var i=0;i<covidPosList.length;i++)
{
	posList[i]=covidPosList[i]+bankPosList[i];
	negList[i]=covidNegList[i]+bankNegList[i];
	neuList[i]=covidNeuList[i]+bankNeuList[i];
}
console.log(posList,negList,neuList);

const data_LineGraph = {
	labels:  ['01-02-2020','02-02-2020','03-02-2020','04-02-2020','05-02-2020','06-02-2020','07-02-2020','08-02-2020','09-02-2020','10-02-2020','11-02-2020','12-02-2020','13-02-2020','14-02-2020','15-02-2020','16-02-2020','17-02-2020','18-02-2020','19-02-2020','20-02-2020','21-02-2020','22-02-2020','23-02-2020','24-02-2020','25-02-2020','26-02-2020','27-02-2020','28-02-2020','29-02-2020','01-03-2020','02-03-2020','03-03-2020','04-03-2020','05-03-2020','06-03-2020','07-03-2020','08-03-2020','09-03-2020','10-03-2020','11-03-2020','12-03-2020','13-03-2020','14-03-2020','15-03-2020','16-03-2020','17-03-2020','18-03-2020','19-03-2020','20-03-2020','21-03-2020','22-03-2020','23-03-2020','24-03-2020','25-03-2020','26-03-2020','27-03-2020','28-03-2020','29-03-2020','30-03-2020','31-03-2020','01-04-2020','02-04-2020','03-04-2020','04-04-2020','05-04-2020','06-04-2020','07-04-2020','08-04-2020','09-04-2020','10-04-2020','11-04-2020','12-04-2020','13-04-2020','14-04-2020','15-04-2020','16-04-2020','17-04-2020','18-04-2020','19-04-2020','20-04-2020','21-04-2020','22-04-2020','23-04-2020','24-04-2020','25-04-2020','26-04-2020','27-04-2020','28-04-2020','29-04-2020','30-04-2020','01-05-2020','02-05-2020','03-05-2020','04-05-2020','05-05-2020','06-05-2020','07-05-2020','08-05-2020','09-05-2020','10-05-2020','11-05-2020','12-05-2020','13-05-2020','14-05-2020','15-05-2020','16-05-2020','17-05-2020','18-05-2020','19-05-2020','20-05-2020','21-05-2020','22-05-2020','23-05-2020','24-05-2020','25-05-2020','26-05-2020','27-05-2020','28-05-2020','29-05-2020','30-05-2020','31-05-2020'],
	datasets: [
        {
			label: 'Positive tweets',
			data: posList,
			pointRadius: 0.1,
			fill: false,            
            backgroundColor: 'rgba(88, 122, 122,1)',
            borderColor: '#414f4f',
            borderWidth: 4
		},
		{
			label: 'Negative Tweets',
            data: negList,
			fill: false,
			pointRadius: 0.1,
			borderColor: '#587a7a',
            backgroundColor:'#587a7a',
            borderWidth: 4
		},
		{
			label: 'Neutral Tweets',
            data: neuList,
			fill: false,
			pointRadius: 0.1,
			borderColor: 'rgba(103, 163,163, 0.7)',
            backgroundColor:'rgba(103, 163,163, 0.7)',
            borderWidth: 4
		}
		
	]
};

const options_LineGraph = {
    responsive:true,
    maintainAspectRatio: true,
	title: {
		display: true,
		text: 'Polarity trend  comparison of tweets',
		fontSize: 23,
		fontColor: '#414f4f',
		fontFamily: 'Helvetica'
	}
};

const legend_LineGraph = {
	display: true,
	position: 'bottom',
	labels: {
		fontColor: '#323130',
		fontSize: 14
	}
};

// #Monthly- polarity comparison of tweets

var covidPos=[1,166,60,56];
var covidNeg=[0,80,35,20];
var covidNeu=[0,120,59,58];
var bankPos=[1268,3173,1991,2328];
var bankNeg=[570,1262,825,1180];
var bankNeu=[1110,2230,1539,2131];
var posMonthly=[];
var negMonthly=[];
var neuMonthly=[];

for (var i =0;i<covidPos.length;i++)
{
	posMonthly[i]=covidPos[i]+bankPos[i];
	negMonthly[i]=covidNeg[i]+bankNeg[i];
	neuMonthly[i]=covidNeu[i]+bankNeu[i];
}

const data_LineGraphMonthly = {
	labels:  ["Febraury'20","March'20","April'20","May'20"],
	datasets: [
        {
			label: 'Positive tweets',
			data: posMonthly,
			pointRadius: 0.7,
			fill: false,            
            backgroundColor: '#414f4f',
            borderColor: '#414f4f',
            borderWidth: 5
		},
		{
			label: 'Negative Tweets',
            data: negMonthly,
			fill: false,
			pointRadius: 0.7,
			borderColor: '#587a7a',
            backgroundColor:'#587a7a;',
            borderWidth: 5
		},
		{
			label: 'Neutral Tweets',
            data: neuMonthly,
			fill: false,
			pointRadius: 0.7,
			borderColor: 'rgba(103, 163,163, 1)',
            backgroundColor:'rgba(103, 163,163, 0.7)',
            borderWidth: 5
		}
		
	]
};

const options_LineGraphMonthly = {
    responsive:true,
    maintainAspectRatio: true,
	title: {
		display: true,
		text: 'Monthly polarity trend comparison of tweets',
		fontSize: 23,
		fontColor: '#414f4f',
		fontFamily: 'Helvetica'
	}
};

const legend_LineGraphMonthly = {
	display: true,
	position: 'bottom',
	labels: {
		fontColor: '#323130',
		fontSize: 14
	}
};






class Home extends Component {
	state = {};
	render() {
		return (
			<div className="carouselBody">
				<Carousel className="carousel bg-light">
					<Carousel.Item>
						<div className="carouselItemBody">
							<div className="chartBodyDoughnut ">
								<Doughnut
									className="chartDoughnut"
									data={state}
									options={{
										segmentShowStroke: false,
										maintainAspectRatio: true,
										title: {
											display: true,
											text: 'Polarity of tweets related to HSBC_UK',
											padding: 40,
											align:'center',
											fontSize: 30,
											fontColor: '#414f4f',
											fontFamily: 'Helvetica'
										},
										legend: {
											display: true,
											position: 'right',
											fontSize: 30,
											labels: {
												fontSize: 15
											}
										},
										tooltips: {
											callbacks: {
												label: function (tooltipItem, data) {
													var label = data.datasets[tooltipItem.datasetIndex].label[tooltipItem.index] || '';

													if (label) {
														label += ': ';
													}
													var percentage =
														(data.datasets[tooltipItem.datasetIndex].data[
															tooltipItem.index
														] /
															32164) *
														100;
													var percentage = percentage.toFixed(2);
													label += percentage + ' %';
													return label;
												}
											}
										}
									}}
								/>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="carouselItemBody">
							<div className="chartBodyPolarity">
							<Line data={data_LineGraph} legend={legend_LineGraph} options={options_LineGraph} />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="carouselItemBody">
							<div className="chartBodyPolarity">
							<Line data={data_LineGraphMonthly} legend={legend_LineGraphMonthly} options={options_LineGraphMonthly} />
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Home;
