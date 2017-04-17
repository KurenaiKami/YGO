import {combineReducers} from 'redux';

import {
	onLineNews,
	OCGNews,
	CardNews
} from './OnLineNewsReducer'


const rootReducer = combineReducers({
	onLineNews,
	OCGNews,
	CardNews
});
export default rootReducer;