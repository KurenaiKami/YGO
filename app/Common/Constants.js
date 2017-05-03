import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
// 屏幕布局相关
let window = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    news_listView_height: Dimensions.get('window').height - 64 - 40 - 49,
    margin: 10,
	navigation_height: 64,
	deviceId: DeviceInfo.getDeviceId()
}

export default Constants = {
    window: window
}


export const URL = 'http://118.184.49.232:3002';
//在线DL新闻
export const URL_ONLINE_DL_NEWS = URL + '/getDlNews?type=dl';
//在线OCG新闻
export const URL_ONLINE_OCG_NEWS = URL + '/getDlNews?type=ocg';
//攻略
export const URL_ONLINE_GONGLUE_NEWS = URL + '/getDlNews?type=gonglue';
//在线CARD新闻
export const URL_ONLINE_CARD_NEWS = URL + '/getDlNews?type=card';

export const URL_ONLINE_GETVIDEOS = URL + '/getvideos';

export const URL_NEWS_DETAIL= URL + '/news?key=';

export const STORAGE_KEY_LOGIN = "loginState";

export const STORAGE_WECAHT_AUTH = "wechatauth";

export const WECHAT_APPID = "wxe05e677dbcfe0d63";
export const WECHAT_SECRECT="fa86b6b518eabee2b3465e2292e5ec36";
export const WECHAT_FETCH_URL = "https://api.weixin.qq.com/sns/"

export const WEIBO_APPID = "404581112";
export const WEIBO_SECRECT = "aa44130ebf0dd00e2f554ad57d15b75f";

//在线新闻
//export const APP_KEY_ONLINE_NEWS = '56ea19cddad7e896b6e90d5d4cde3628';
//export const URL_ONLINE_NEWS = 'http://api.tianapi.com/wxnew/';