import * as types from '../actions/ActionTypes'

const initialState = {
	state: 'pre_fetch',
	newsList: [],
}

export function onLineNews(state=[],action)
{
	switch (action.type) {
		case types.ACTION_ONLINE_NEWS_PRE_FETCH:
			return Object.assign({}, state, {
				state: action.state
			});
		case types.ACTION_ONLINE_NEWS_FETCH_OK:
			return Object.assign({}, state, {
				newsList: action.newsList,
				state: action.state,
			});
		case types.ACTION_ONLINE_NEWS_FETCH_ERROR:
			return Object.assign({}, state, {
				state:action.state
			});
		default:
			return state;
	}
}