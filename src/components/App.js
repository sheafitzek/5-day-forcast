import React, {Component} from 'react';

import styled from 'styled-components';

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export class App extends Component {
	render() {
		return (
			<Div>
				<SearchBar />
				<WeatherList />
			</Div>
		);
	}
}

export default App;

const Div = styled.div`
	display: grid;
	grid-template: 5rem 4fr / 100%;
`;
