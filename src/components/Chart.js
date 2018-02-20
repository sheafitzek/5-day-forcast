import React from 'react';

import _ from 'lodash';
import {
	Sparklines,
	SparklinesLine,
	SparklinesBars,
	SparklinesReferenceLine,
	SparklinesSpots,
} from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data) / data.length);
}

export function Chart({data, units, color}) {
	return (
		<div>
			<Sparklines height={120} width={180} data={data}>
				<SparklinesLine color={color} />
				<SparklinesBars />
				<SparklinesReferenceLine type="avg" />
				<SparklinesSpots />
			</Sparklines>
			<div>{average(data)} {units}</div>
		</div>
	);
}

export default Chart;
