import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/index';

import styled from 'styled-components';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term : ``,
		};
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ``});
	};

	onInputChange = (e) => {
		this.setState({
			term : e.target.value,
		});
	};

	render() {
		return (
			<Form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Enter U.S. City for 5 Day Forecast"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</Form>
		);
	}
}

// bind action creator to container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

// map bound action creator to props...now usable in container as this.props.<action creator>
export default connect(null, mapDispatchToProps)(SearchBar);

const Form = styled.form`
	margin: 20px 40px;
`;
