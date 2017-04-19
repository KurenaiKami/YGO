import {combineReducers} from 'redux';

import {
	onLineNews,
	OCGNews,
	CardNews,
	StrategyNews,
	VideoNews
} from './OnLineNewsReducer'


const rootReducer = combineReducers({
	onLineNews,
	OCGNews,
	CardNews,
	StrategyNews,
	VideoNews
});
export default rootReducer;