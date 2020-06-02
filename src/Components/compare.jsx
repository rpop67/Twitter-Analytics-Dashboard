import React, { Component } from 'react';
import '../compare.css';
import Carousel from 'react-bootstrap/Carousel';
import { Line, defaults } from 'react-chartjs-2';
import { Bar as BarChart } from 'react-chartjs-2';


const data_LineGraph = {
	labels:  ['01-02-2020','02-02-2020','03-02-2020','04-02-2020','05-02-2020','06-02-2020','07-02-2020','08-02-2020','09-02-2020','10-02-2020','11-02-2020','12-02-2020','13-02-2020','14-02-2020','15-02-2020','16-02-2020','17-02-2020','18-02-2020','19-02-2020','20-02-2020','21-02-2020','22-02-2020','23-02-2020','24-02-2020','25-02-2020','26-02-2020','27-02-2020','28-02-2020','29-02-2020','01-03-2020','02-03-2020','03-03-2020','04-03-2020','05-03-2020','06-03-2020','07-03-2020','08-03-2020','09-03-2020','10-03-2020','11-03-2020','12-03-2020','13-03-2020','14-03-2020','15-03-2020','16-03-2020','17-03-2020','18-03-2020','19-03-2020','20-03-2020','21-03-2020','22-03-2020','23-03-2020','24-03-2020','25-03-2020','26-03-2020','27-03-2020','28-03-2020','29-03-2020','30-03-2020','31-03-2020','01-04-2020','02-04-2020','03-04-2020','04-04-2020','05-04-2020','06-04-2020','07-04-2020','08-04-2020','09-04-2020','10-04-2020','11-04-2020','12-04-2020','13-04-2020','14-04-2020','15-04-2020','16-04-2020','17-04-2020','18-04-2020','19-04-2020','20-04-2020','21-04-2020','22-04-2020','23-04-2020','24-04-2020','25-04-2020','26-04-2020','27-04-2020','28-04-2020','29-04-2020','30-04-2020','01-05-2020','02-05-2020','03-05-2020','04-05-2020','05-05-2020','06-05-2020','07-05-2020','08-05-2020','09-05-2020','10-05-2020','11-05-2020','12-05-2020','13-05-2020','14-05-2020','15-05-2020','16-05-2020','17-05-2020','18-05-2020','19-05-2020','20-05-2020','21-05-2020','22-05-2020','23-05-2020','24-05-2020','25-05-2020','26-05-2020','27-05-2020','28-05-2020','29-05-2020','30-05-2020','31-05-2020'],
	datasets: [
        {
			label: 'Bank tweets',
            data: [134,62,158,123,126,165,78,94,37,83,119,101,79,115,94,50,97,186,143,111,104,76,67,103,119,92,110,122,0,70,148,153,129,141,89,76,46,96,116,111,86,95,125,74,190,287,290,398,421,358,157,505,530,430,566,332,196,176,274,0,306,250,242,100,75,204,204,190,205,102,88,39,78,129,156,140,154,103,68,147,135,173,233,160,86,90,202,138,158,0,212,118,106,312,262,289,359,133,169,74,
                249,231,256,210,180,92,102,194,185,141,167,164,125,217,182,207,232,185,158,67,61],
			fill: true,            
            backgroundColor: 'rgba(88, 122, 122,0.6)',
            borderColor: 'rgba(88, 122, 122,1)',
            borderWidth: 2,
            pointRadius: 0.3,
		},
		{
			label: 'Covid-19 Tweets',
            data: [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,9,0,2,0,1,2,4,4,16,5,7,13,21,22,21,33,35,13,27,20,33,25,23,7,10,8,0,16,19,8,7,7,9,8,8,4,3,2,0,1,5,3,4,8,1,1,
                7,4,4,5,4,0,2,6,4,4,0,2,2,3,10,12,5,13,1,5,0,3,5,7,2,5,2,0,6,6,6,1,7,7,6,2,5,6,2,2,1,0],
			fill: true,
			borderColor: 'rgba(49, 59, 59, 10);',
            backgroundColor:'rgba(49, 59, 59, 10);',
            borderWidth: 3,
            pointRadius: 0.3,
		}
		
	]
};

const options_LineGraph = {
    responsive:true,
    maintainAspectRatio: true,
	title: {
		display: true,
		text: 'Trend Comparison of Covid-19 and banking related tweets'
	},
	// scales: {
	// 	yAxes: [
	// 		{
	// 			ticks: {
	// 				suggestedMin: 0,
	// 				suggestedMax: 100
	// 			}
	// 		}
	// 	]
	// },
};

const legend_LineGraph = {
	display: true,
	position: 'bottom',
	labels: {
		fontColor: '#323130',
		fontSize: 14
	}
};


// stackedGraph=-------------------

var varCovid=[ 1,366,154,134];
var varBank= [2948,6665, 4355 ,5639];
var total= [ 2949,7031,4509,5773];

const data_StackedBar = {
	labels:  ['Febraury','March','April','May'],
	datasets: [
		{
			label: 'Bank Tweets',
			data: [Math.round(varBank[0]/total[0]*100),Math.round(varBank[1]/total[1]*100), Math.round(varBank[2]/total[2]*100) ,Math.round(varBank[3]/total[3]*100)],
			// backgroundColor: '#742774' // green
			backgroundColor:'rgba(88, 122, 122,0.7)'
		},
		{
			label: 'Covid-19 Tweets',
			data: [Math.round(varCovid[0]/total[0]*100),Math.round(varCovid[1]/total[1]*100), Math.round(varCovid[2]/total[2]*100) ,Math.round(varCovid[3]/total[3]*100)],
			backgroundColor: '#414f4f'
		}
	]
};

const legend_StackedBar = {
	display: true,
    cursor: 'pointer'
};

const options_StackedBar = {
    maintainAspectRatio: true,
	scales: {
        xAxes: [{ stacked: true ,
            gridLines: {
                color: "rgba(0, 0, 0, 0.1)",
            }}],
        yAxes: [{ stacked: true ,
            gridLines: {
                color: "rgba(0, 0, 0, 0.1)",
            }}]
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';

                if (label) {
                    label += ': ';
                }

                label += data.datasets[tooltipItem.datasetIndex].data[
                    tooltipItem.index
                ] + ' %';
                return label;
            }
        }
    },
    borderWidth:3,
    title: {
		display: true,
		text: 'Percentage Distribution of Tweets'
	}
};


//Grouped Bar Chart---------------------
var varCovid=[ 1,366,154,134]
var varBank= [2948,6665, 4355 ,5639]
var total= [ 2949,7031,4509,5773]

const data_GroupedBar = {
	labels:  ['Febraury','March','April','May'],
	datasets: [
		{
			label: 'Bank Tweets',
			data: [2948,6665, 4355 ,5639],
			// backgroundColor: '#742774' // green
            backgroundColor:'rgba(88, 122, 122,0.7)',
            
		},
		{
			label: 'Covid-19 Tweets',
			data: [ 1,366,154,134],
			backgroundColor: '#414f4f'
		}
	]
};

const legend_GroupedBar = {
	display: true,
	cursor: 'pointer'
};

const options_GroupedBar = {
    maintainAspectRatio: true,
	scales: {
        xAxes: [{ stacked: false ,
            gridLines: {
                color: "rgba(0, 0, 0, 0.1)",
            }}],
        yAxes: [{ stacked: false ,
            gridLines: {
                color: "rgba(0, 0, 0, 0.1)",
            }}]
    },
    title: {
		display: true,
		text: 'Monthly Comparison of Covid-19 and Bank related tweets'
	}
};




// const state = {
// 	labels: ['Positive', 'Negative', 'Neutral'],
// 	datasets: [
// 		{
// 			label: 'Rainfall',
// 			backgroundColor: ['#50b482', '#dd5858', '#383b3a'],
// 			hoverBackgroundColor: ['#3a9e6c', '#d43c3c', '#272928'],
// 			data: [14466, 6267, 11431]
// 		}
// 	]
// };

class Compare extends Component {
	state = {};
	render() {
		return (
			<div className="carouselBody1">
				<Carousel className="carousel1 bg-light">
					<Carousel.Item>
						<div className="carouselItemBody1">
							<div className="chartBodyCompare1">
                            <Line className="lineChart1" data={data_LineGraph} legend={legend_LineGraph} options={options_LineGraph} />
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="carouselItemBody1">
							<div className="chartBar1">
                            <BarChart className="Barchart1"options={options_StackedBar} data={data_StackedBar} legend={legend_StackedBar} />
							</div>
						</div>
					</Carousel.Item>
                    <Carousel.Item>
						<div className="carouselItemBody1">
							<div className="chartBar2">
                            <BarChart className="Barchart1"options={options_GroupedBar} data={data_GroupedBar} legend={legend_GroupedBar} />
							</div>
						</div>
					</Carousel.Item>
					</Carousel>
			</div>
		);
	}
}

export default Compare;
