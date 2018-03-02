import React, {Component} from 'react';

import {connect} from 'react-redux';

import styled from 'styled-components';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

export class WeatherList extends Component {
	renderWeather = (cityData) => {
		const id = cityData.city.id;
		const temps = cityData.list.map((weather) => weather.main.temp);
		const pressures = cityData.list.map((weather) => weather.main.pressure);
		const humidities = cityData.list.map(
			(weather) => weather.main.humidity
		);
		const {lat, lon} = cityData.city.coord;

		return (
			<div className="charts" key={id}>
				<GoogleMap lat={lat} lon={lon} />
				<Chart
					className="chart"
					data={temps}
					units="&deg;F"
					color="red"
				/>
				<Chart
					className="chart"
					data={pressures}
					units="hPa"
					color="blue"
				/>
				<Chart
					className="chart"
					data={humidities}
					units="%"
					color="orange"
				/>
			</div>
		);
	};

	render() {
		return (
			<Div>
				<div className="categories">
					<div className="category city">City</div>
					<div className="category temperature">Temperature</div>
					<div className="category pressure">Pressure</div>
					<div className="category humidity">Humidity</div>
				</div>
				<div>{this.props.weather.map(this.renderWeather)}</div>
			</Div>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);

const Div = styled.div`
	display: grid;
	grid-template-rows: 3rem 4fr;
	grid-area: 2 / 1 / 3 / -1;

	.categories,
	.charts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;

		vertical-align: middle;
		text-align: center;
		border-bottom: 1px solid silver;

		& > div {
			vertical-align: middle;
			text-align: center;

			&.map {
				margin: 0.5rem;
			}
		}
	}

	.categories {
		background: rgba(255, 255, 255, 0.25);
		border-top: 1px solid silver;
		border-bottom: 1px solid silver;

		.category {
			height: 3rem;
			line-height: 3rem;
			text-align: center;
		}
	}

	.city {
		grid-area: 1 / 1 / -1 / 2;
	}

	.temperature {
		grid-area: 1 / 2 / -1 / 3;
	}

	.pressure {
		grid-area: 1 / 3 / -1 / 4;
	}

	.humidity {
		grid-area: 1 / 4 / -1 / 5;
	}
`;
