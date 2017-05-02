//for storage
import React,{Component} from 'react';
import {
	AsyncStorage,
	ToastAndroid,
} from 'react-native'
import Storage from 'react-native-storage';
import {
	STORAGE_KEY_LOGIN,
	STORAGE_WECAHT_AUTH
} from '../Common/Constants'

var storage;
export default class StorageUtils extends Component{
	//初始化
	static initStorage()
	{

		storage = new Storage({
			// maximum capacity, default 1000
			size: 1000,

			// Use AsyncStorage for RN, or window.localStorage for web.
			// If not set, data would be lost after reload.
			storageBackend: AsyncStorage,

			// expire time, default 1 day(1000 * 3600 * 24 milliseconds).
			// can be null, which means never expire.
			defaultExpires: null,

			// cache data in the memory. default is true.
			enableCache: true,

			// if data was not found in storage or expired,
			// the corresponding sync method will be invoked and return
			// the latest data.
			sync : {
				// we'll talk about the details later.
			}
		})
	}


	//保存登录信息
	static saveLoginState(info)
	{
		if (storage)
		{
			storage.save({
				key: STORAGE_KEY_LOGIN,
				rawData:{
					type: info.type,
					nickname: info.nickname,
					headimgurl: info.headimgurl,
				}
			})
		}
		else
		{
			ToastAndroid.show("没有初始化Storage",ToastAndroid.SHORT);
		}
	}


	//判断是否已在登录状态
	static isLogin()
	{
		return new Promise((resolve,reject) => {
			storage.load({
				key: STORAGE_KEY_LOGIN,
			})
				.then((data)=>{
					resolve(true);
				})
				.catch((err) => {
					reject(false);
				})
		})
	}

	//获取登录状态信息
	static getLoginState()
	{
		return new Promise((resolve,reject) => {
			storage.load({
				key: STORAGE_KEY_LOGIN
			})
				.then((data)=>{
					resolve(data);
				})
				.catch(err => {
					reject(err);
				})
		})
	}
}
