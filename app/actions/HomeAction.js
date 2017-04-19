import * as types from './ActionTypes'
import NetUtils from  '../utils/NetUtils'

import {
    URL_ONLINE_DL_NEWS,
	URL_ONLINE_OCG_NEWS,
	URL_ONLINE_GONGLUE_NEWS,
	URL_ONLINE_CARD_NEWS,
	URL_ONLINE_GETVIDEOS
} from  '../Common/Constants';

//获取 DL信息
export function fetchNewsListByPage() {
	return dispatch => {
		dispatch({
			type: types.ACTION_ONLINE_NEWS_PRE_FETCH,
			state: 'pre_fetch',
		});
		NetUtils.get(URL_ONLINE_DL_NEWS)
			.then(function (result) {
				console.log(result);
				if (result.code == 200) {
					dispatch({
						type: types.ACTION_ONLINE_NEWS_FETCH_OK,
						newsList: result.newslist,
						state: 'fetch_ok',
					});
				} else {
					dispatch({
						type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
						state: 'fetch_error',
					});
				}
			}, function () {
				console.log("error**************************");
				dispatch({
					type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
					state: 'fetch_error',
				});
			})
	};
}

//获取 OCG信息
export function fetchOCGNews() {
	return dispatch =>{
		dispatch({
			type: types.ACTION_OCG_NEWS_PRE_FETCH,
			state: 'ocg_pre_fetch'
		});
		
		NetUtils.get(URL_ONLINE_OCG_NEWS)
			.then(function (result) {
				if (result.code == 200)
				{
					dispatch({
						type: types.ACTION_OCG_NEWS_FETCH_OK,
						state: 'ocg_fetch_ok',
						newsList: result.newslist
					})
				}
				else
				{
					dispatch({
						type: types.ACTION_OCG_NEWS_FETCH_ERROR,
						state: 'ocg_fetch_error'
					})
				}
			},function () {
				dispatch({
					type: types.ACTION_OCG_NEWS_FETCH_ERROR,
					state: 'ocg_fetch_error'
				})
			})
	}
}


//获取卡组信息
export function fetchCardNews() {
	return dispatch => {
		dispatch({
			type: types.ACTION_CARD_NEWS_PRE_FETCH,
			state: 'card_pre_fetch'
		});
		
		NetUtils.get(URL_ONLINE_CARD_NEWS)
			.then(function (result) {
				if (result.code == 200)
				{
					dispatch({
						type: types.ACTION_CARD_NEWS_FETCH_OK,
						state: 'card_fetch_ok',
						newsList: result.newslist
					})
				}
				else
				{
					dispatch({
						type: types.ACTION_CARD_NEWS_FETCH_ERROR,
						state: 'card_fetch_error'
					})
				}
			},function () {
				dispatch({
					type: types.ACTION_CARD_NEWS_FETCH_ERROR,
					state: 'card_fetch_error'
				})
			})
	}
}



//获取攻畋信息
export function fetchStrateNews() {
	return dispatch => {
		dispatch({
			type: types.ACTION_GONGLUE_NEWS_PRE_FETCH,
			state: 'card_pre_fetch'
		});

		NetUtils.get(URL_ONLINE_GONGLUE_NEWS)
			.then(function (result) {
				if (result.code == 200)
				{
					dispatch({
						type: types.ACTION_GONGLUE_NEWS_FETCH_OK,
						state: 'card_fetch_ok',
						newsList: result.newslist
					})
				}
				else
				{
					dispatch({
						type: types.ACTION_GONGLUE_NEWS_FETCH_ERROR,
						state: 'card_fetch_error'
					})
				}
			},function () {
				dispatch({
					type: types.ACTION_GONGLUE_NEWS_FETCH_ERROR,
					state: 'card_fetch_error'
				})
			})
	}
}



//获取 OCG信息
export function fetchVideos() {
	return dispatch =>{
		dispatch({
			type: types.ACTION_VIDEO_NEWS_PRE_FETCH,
			state: 'video_pre_fetch'
		});

		NetUtils.get(URL_ONLINE_GETVIDEOS)
			.then(function (result) {
				if (result.code == 200)
				{
					dispatch({
						type: types.ACTION_VIDEO_NEWS_FETCH_OK,
						state: 'video_fetch_ok',
						newsList: result.newslist
					})
				}
				else
				{
					dispatch({
						type: types.ACTION_VIDEO_NEWS_FETCH_ERROR,
						state: 'video_fetch_error'
					})
				}
			},function () {
				dispatch({
					type: types.ACTION_VIDEO_NEWS_FETCH_ERROR,
					state: 'video_fetch_error'
				})
			})
	}
}

