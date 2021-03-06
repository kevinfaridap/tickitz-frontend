import axios from 'axios'
import axiosApiInstance from '../../helpers/axios'

//  Test Pagination

export const getNowShowingMovies = (page = 1, by = 'tittleMovie', order = "ASC", title) => {
  return(dispatch)=>{
    axios.get(`${process.env.REACT_APP_API}/showmovies?page=${page}&limit=4&by=${by}&order=${order}&movietittle=${title}`)
     .then((res)=>{
       const resData = res.data
      //  const dataMovie = resData.data
       dispatch ({ type: 'GET_NOWSHOWING_MOVIES', payload: resData})
     })   
  }
} 

// http://localhost:8000/v1/showmovies?page=1&limit=5&by=id&order=DESC&movietittle=made