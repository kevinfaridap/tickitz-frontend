const initialState = {
    movies: [],
    loading: false,
    error: ''
}

const moviesReducer = (state = initialState, action) =>{
  // if(action.type === 'GET_MOVIES'){
  //   return {
  //     ...state,
  //     movies: action.payload
  //   }
  // } 
  // else{
  //   return state
  // }
  switch(action.type) {
    case 'GET_MOVIES' :
      return{
        ...state,
        movies: action.payload
    }
    case 'GET_MOVIES_ID' :
      return{
        ...state,
        movies: action.payload
    }
    case 'POST_MOVIES' :
      return{
        ...state,
        movies: action.payload
      }
    default:
      return state;
  }
}


export default moviesReducer