import React, {Component} from 'react';

import {connect} from 'react-redux';

import Chart from '../components/Chart';

export class WeatherList extends Component {
	renderWeather = (cityData) => {
		const name = cityData.city.name;
		const id = cityData.city.id;
		const temps = cityData.list.map((weather) => weather.main.temp);
		const pressures = cityData.list.map((weather) => weather.main.pressure);
		const humidities = cityData.list.map(
			(weather) => weather.main.humidity
		);

		return (
			<tr key={id}>
				<td>{name}</td>
				<td>
					<Chart data={temps} units="&deg;F" color="red" />
				</td>
				<td>
					<Chart data={pressures} units="hPa" color="blue" />
				</td>
				<td>
					<Chart data={humidities} units="%" color="orange" />
				</td>
			</tr>
		);
	};

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
