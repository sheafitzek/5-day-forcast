import React, {PureComponent} from 'react';

export class GoogleMap extends PureComponent {
	componentDidMount() {
		new window.google.maps.Map(this.refs.map, {
			zoom   : 12,
			center : {
				lat : this.props.lat,
				lng : this.props.lon,
			},
		});
	}

	render() {
		return <div className="map" ref="map" />;
	}
}

export default GoogleMap;
