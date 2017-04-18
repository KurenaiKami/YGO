import {combineReducers} from 'redux';

import {
	onLineNews,
	OCGNews,
	CardNews,
	StrategyNews
} from './OnLineNewsReducer'


const rootReducer = combineReducers({
	onLineNews,
	OCGNews,
	CardNews,
	StrategyNews
});
export default rootReducer;