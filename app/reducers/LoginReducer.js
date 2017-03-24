import * as types from '../actions/ActionTypes'

const state = {
	state:'pre_login'
}

export function login(state=[],action) {
	switch (action.type)
	{
		case types.ACTION_FETCH_LOGIN:
			return Object.assign({},state);
		default:
			return state;
	}
}