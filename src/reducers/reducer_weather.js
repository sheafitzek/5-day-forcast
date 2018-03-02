import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (action.payload.data && action.payload.data.cod === `200`) {
				return [action.payload.data, ...state];
			}

			break;

		default:
			return state;
	}
}
