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