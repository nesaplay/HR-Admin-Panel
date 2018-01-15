import { SEARCH_RENDER } from '../actions/types';

export default function(state = { query: '' }, action) {
	switch (action.type) {
		case SEARCH_RENDER:
			return {
				...state,
				query: action.payload
			};
		default:
			return state;
	}
}
