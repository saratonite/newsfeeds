var newsReducer = function(state, action) {
  switch(action.type) {
    case 'HOLA':
      alert("Hola!!");
      return state;
    case 'FETCH_NEWS':
      //Call api

  }
}

export default newsReducer;
