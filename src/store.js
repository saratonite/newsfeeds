import {createStore} from 'redux';
import newsReducer from './reducers/NewsReducer';

const defaultState = {
  news_threads:[]
}

var store = createStore(newsReducer,defaultState);

export default store;
