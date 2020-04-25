import {combineReducers} from 'redux';
import authReducer from './authReducer';

let rootReducer = combineReducers({
	authReducer: authReducer
});

export default rootReducer;
