import {combineReducers} from 'redux';
import authRed from './Redux/Auth/authRed';
import todoRed from './Redux/Todo/todoRed';

export default combineReducers({
    auth : authRed,
    todo : todoRed
});