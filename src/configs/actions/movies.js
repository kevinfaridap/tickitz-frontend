import axios from 'axios'


// export const getAllMovies = () => {
//   return(dispatch) => {
//    axios.get('http://localhost:8000/v1/movies?page=1&limit=10')
//     .then((res)=>{
//       const resData = res.data
//       const dataMovie = resData.data
//       dispatch({ type: 'GET_MOVIES', payload: dataMovie})
//     })   
//   }
// } 

export const getAllMovies = () => {
  return(dispatch)=>{
    axios.get('http://localhost:8000/v1/movies?page=1&limit=10')
     .then((res)=>{
       const resData = res.data
       const dataMovie = resData.data
       // return dispatch({ type: 'GET_MOVIES', payload: dataMovie})
       dispatch ({ type: 'GET_MOVIES', payload: dataMovie})
     })   
  }
} 

// export const getMoviesId = () => {
//   return(dispatch)=>{
//     axios.get(`http://localhost:8000/${idMovie}`)
//      .then((res)=>{
//        const resData = res.data
//        const dataMovie = resData.data
//        // return dispatch({ type: 'GET_MOVIES', payload: dataMovie})
//        dispatch ({ type: 'GET_MOVIES_ID', payload: dataMovie})
//      })   
//   }
// } 


// export const postMovies = (data) => {
//   return(dispatch)=>{
//     axios.put('http://localhost:8000/v1/movies', data)
//      .then((res)=>{
//        const result = res.data
//        dispatch ({ type: 'POST_MOVIES', payload: result})
//      })   
//   }
// } 

export const postMovies = (data) => dispatch=>{
  return new Promise((resolve, reject)=>{
    axios.post('http://localhost:8000/v1/movies', data)
    .then((res)=>{
      const result = res.data 
      dispatch({type: 'INSERT_MOVIE'})
      resolve(result)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}