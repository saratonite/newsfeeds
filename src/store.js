import {createStore , applyMiddleware} from 'redux';
import newsReducer from './reducers/NewsReducer';
import thunk  from 'redux-thunk'

const defaultState = {
  news_threads:[]
}

const store = createStore(newsReducer,{news_threads:[]},applyMiddleware(thunk));


console.info(store.getState());

export default store;
