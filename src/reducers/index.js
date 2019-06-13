import {combineReducers} from 'redux';
import earthquakeReducer from './earthquakesReducer';


export default combineReducers({
    earthquakes: earthquakeReducer
});