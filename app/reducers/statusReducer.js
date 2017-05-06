import * as c from '../constants/statusTypes';

export default function statusReducer(state = {
	loading: false,
	user: {
		isLogged: false,
		role: 'anonymous'
	},
	updated: 0,
	error: false
}, action) {
	switch (action.type) {
		case c.ERROR_FETCHING:
			return {
				...state,
				loading: false,
				error: true
			};
		case c.LOGIN_FINISHED:
			return {
				...state,
				user: action.payload
			};
		case c.START_LOADING:
			return {
				...state,
				loading: true
			};
		case c.END_LOADING:
			return {
				...state,
				loading: false
			};
		case c.ERROR_RESET:
			return {
				...state,
				error: false
			};
		case c.USER_CREATED:
			return {
				...state,
				user: {
					isLogged: true,
					role: action.payload
				}
			};
		case c.USER_LOGOUT:
			return {
				...state,
				user: {
					isLogged: false,
					role: 'anonymous'
				}
			}
		default:
			return state;
	}
}
