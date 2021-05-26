import axios from 'axios'
import axiosApiInstance from '../../helpers/axios'


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
    axios.get(`${process.env.REACT_APP_API}/movies?page=1&limit=10`)
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


export const postMovies = (data) => dispatch=>{
  return new Promise((resolve, reject)=>{
    axios.post(`${process.env.REACT_APP_API}/movies`, data)
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