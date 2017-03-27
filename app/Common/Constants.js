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
export const APP_KEY_ONLINE_NEWS = 'd1198f006ce1df5c45d6a0dade8d9b3a';
export const URL_ONLINE_NEWS = 'http://v.juhe.cn/toutiao/index';