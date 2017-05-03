import {combineReducers} from 'redux';

import {
	onLineNews,
	OCGNews,
	CardNews,
	StrategyNews,
	VideoNews
} from './OnLineNewsReducer'
import {
	loginReducer,
} from "./LoginReducer"

const rootReducer = combineReducers({
	onLineNews,
	OCGNews,
	CardNews,
	StrategyNews,
	VideoNews,
	loginReducer
});
export default rootReducer;