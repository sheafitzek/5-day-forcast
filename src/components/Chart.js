import React from 'react';

import _ from 'lodash';
import {
	Sparklines,
	SparklinesLine,
	SparklinesBars,
	SparklinesReferenceLine,
	SparklinesSpots,
} from 'react-sparklines';
import styled from 'styled-components';

function average(data) {
	return _.round(_.sum(data) / data.length);
}

export function Chart({data, units, color}) {
	return (
		<Div>
			<Sparklines
				height={120}
				width={180}
				data={data}
				style={ {background: `rgba(0,0,0,0.1)`} }
			>
				<SparklinesLine color={color} />
				<SparklinesBars />
				<SparklinesReferenceLine type="avg" />
				<SparklinesSpots />
			</Sparklines>
			<div>
				Avg: {average(data)} {units}
			</div>
		</Div>
	);
}

export default Chart;

const Div = styled.div`
	svg {
		height: 10rem;
		width: 100%;
	}

	div {
		text-align: center;
	}
`;
