import {combineReducers} from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  list: Reducer,
});

export default rootReducer;
