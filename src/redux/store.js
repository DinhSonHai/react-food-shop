import { createStore, combineReducers } from 'redux';
import itemReducer from './item';

const reducer = combineReducers({
    item: itemReducer,
});

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());