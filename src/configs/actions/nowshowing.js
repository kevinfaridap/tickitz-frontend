import axios from 'axios'
import axiosApiInstance from '../../helpers/axios'

//  Test Pagination
export const getNowShowingMovies = (pages = 1) => {
  return(dispatch)=>{
    axios.get(`http://localhost:8000/v1/showmovies?page=${pages}&limit=4`)
     .then((res)=>{
       const resData = res.data
      //  const dataMovie = resData.data
       dispatch ({ type: 'GET_NOWSHOWING_MOVIES', payload: resData})
     })   
  }
} 

