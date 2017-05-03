import * as types from '../actions/ActionTypes'

export function loginReducer(state=[],action) {
	switch (action.type)
	{
		case types.ACTION_LOGIN_FETCH_OK:
			return {
				loginData: action.loginData
			};
			break
		case types.ACTION_LOGIN_FETCH_ERROR:
				return{
					loginData: null
				}
			break;
		default:
			return state;
	}
}