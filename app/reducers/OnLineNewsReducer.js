import * as types from '../actions/ActionTypes'

const initialState = {
	state: 'pre_fetch',
	newsList: [],
}

export function onLineNews(state=[],action)
{
	switch (action.type) {
		case types.ACTION_ONLINE_NEWS_PRE_FETCH:
			return {
				state: action.state,
				loading: true,
			};
			break;
		case types.ACTION_ONLINE_NEWS_FETCH_OK:
			return {
				newsList: action.newsList,
				state: action.state,
				loading: false,
			};
			break;
		case types.ACTION_ONLINE_NEWS_FETCH_ERROR:
			{
				return{
					state:action.state,
					error: true,
					loading: false,
				}
			};
			break;
		default:
			return state;
	}
}

export function OCGNews(state=[],action) {
	switch (action.type)
	{
		case types.ACTION_OCG_NEWS_PRE_FETCH:
			return{
				state: action.state,
				loading: true
			}
			break;
		case types.ACTION_OCG_NEWS_FETCH_OK:
			return {
				newsList: action.newsList,
				state: action.state,
				loading: false,
			}
			break;
		case types.ACTION_OCG_NEWS_FETCH_ERROR:
			return {
				state: action.state,
				error: true,
				loading: false,
			}
			break;
		default:
			return state;
	}
}

export function CardNews(state = [],action) {
	switch(action.type)
	{
		case types.ACTION_CARD_NEWS_PRE_FETCH:
			return {
				state: action.state,
				loading: true
			}
			break;
		case types.ACTION_CARD_NEWS_FETCH_OK:
			return {
				state: action.state,
				loading: false,
				newsList: action.newsList
			}
			break;
		case types.ACTION_CARD_NEWS_FETCH_ERROR:
			return {
				state: action.state,
				error: true,
				loading: false,
			}
			break;
		default:
			return state;
	}
}



export function StrategyNews(state = [],action) {
	switch(action.type)
	{
		case types.ACTION_GONGLUE_NEWS_PRE_FETCH:
			return {
				state: action.state,
				loading: true
			}
			break;
		case types.ACTION_GONGLUE_NEWS_FETCH_OK:
			return {
				state: action.state,
				loading: false,
				newsList: action.newsList
			}
			break;
		case types.ACTION_GONGLUE_NEWS_FETCH_ERROR:
			return {
				state: action.state,
				error: true,
				loading: false,
			}
			break;
		default:
			return state;
	}
}


export function  VideoNews(state = [],action) {
	switch(action.type)
	{
		case types.ACTION_VIDEO_NEWS_PRE_FETCH:
			return {
				state: action.state,
				loading: true
			}
			break;
		case types.ACTION_VIDEO_NEWS_FETCH_OK:
			return {
				state: action.state,
				loading: false,
				newsList: action.newsList
			}
			break;
		case types.ACTION_VIDEO_NEWS_FETCH_ERROR:
			return {
				state: action.state,
				error: true,
				loading: false,
			}
			break;
		default:
			return state;
	}
}