import {createStore} from 'redux';
import newsReducer from './reducers/NewsReducer';

const defaultState = {
  news_threads:[]
}

const store = createStore(newsReducer,{news_threads:[]});


console.info(store.getState());

export default store;
