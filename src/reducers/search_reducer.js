import { SEARCH_RENDER, SEARCH_RESET } from '../actions/types';

export default function(state = { query: '' }, action) {
	switch (action.type) {
		case SEARCH_RENDER:
			return {
				...state,
				query: action.payload
			};
		case SEARCH_RESET:
			return {
				...state,
				query: ''
			}
		default:
			return state;
	}
}
