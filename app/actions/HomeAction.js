import * as types from './ActionTypes'
import NetUtils from  '../utils/NetUtils'

import {
    URL_ONLINE_DL_NEWS,
} from  '../Common/Constants';


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
				dispatch({
					type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
					state: 'fetch_error',
				});
			})
	};
}