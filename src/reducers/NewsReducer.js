export default function(state = {news_threads:[1,2,3]}, action) {
  switch(action.type) {
    case 'HOLA':
      alert("Hola!!");
      return state;
    case 'FETCH_NEWS':
      return {news_threads:action.payload}
      //Call api
    default:
      return state;

  }
}
