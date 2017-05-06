import * as c from '../constants/mealsTypes';

export default function mealsReducer(state = {
	otros: [],
	combinados: [],
	bocadillos: []
}, action) {
	switch (action.type) {
		case c.MEALS_FETCHED:
			return action.payload;
		default:
			return state;
	}
}
