import * as types from './ActionTypes'
import NetUtils from  '../utils/NetUtils'

export function fetchWechatNewsListByPage(start,pageLimit) {
    return dispatch => {
        dispatch({
            type: types.ACTION_FETCH_WECHAT,
            isLoadingMore: true
        });

        NetUtils.get(types.URL_WEI_XIN_JINGXUAN+"?key="+types.APP_KEY_WEI_XIN_JINGXUAN+"&num="+pageLimit+"&page="+start+" ")
            .then(function (result) {
                if (result.code == 200) {
                    dispatch({
                        type: types.ACTION_FETCH_WECHAT_OK,
                        newsList: result.newslist,
                        start: start,
                        pageLimit: pageLimit,
                        isLoadingMore: false,
                    });
                } else {
                    dispatch({
                        type: types.ACTION_FETCH_WECHAT_ERROR,
                        isLoadingMore: false,
                    });
                }
            }, function () {
                dispatch({
                    type: types.ACTION_FETCH_WECHAT_ERROR,
                    isLoadingMore: false,
                });
            })

    }
}