import { Dimensions } from 'react-native';

// 屏幕布局相关
let window = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    news_listView_height: Dimensions.get('window').height - 64 - 40 - 49,
    margin: 10,
}

export default Constants = {
    window: window
}

//在线新闻
export const APP_KEY_ONLINE_NEWS = '56ea19cddad7e896b6e90d5d4cde3628';
export const URL_ONLINE_NEWS = 'http://api.tianapi.com/wxnew/';