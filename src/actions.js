import axios from 'axios';
 export function sayHello(dispatch) {

  return dispatch({type:'HOLA'});

}


export function fetchNews(dispatch){

  axios.get('https://api.recsys.opera.com/api/1.0/suggestions/sources',{
          params:{
            ids:"5545,4376,5183,4381,13072,4384,5187,13472,13503,13493",
            timeline:true,
            count:20,
            page:0
          }
        })
        .then(function(response){

          dispatch({type:'FETCH_NEWS',payload:response.data.articles});

        });
}
