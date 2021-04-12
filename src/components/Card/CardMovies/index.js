import Axios from 'axios'
import React, {useEffect, useState}  from 'react'
import Style from './cardmovies.module.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllMovies} from '../../../configs/actions/movies'

function CardMovies() {
  const dispatch = useDispatch()
  const {movies} = useSelector(state => state.movies)

  // Pindahkan ke action
  // const getMovies = ()=>{
  //   Axios.get('http://localhost:8000/v1/movies?page=1&limit=10')
  //     .then((res)=>{
  //       const resData = res.data
  //       const dataMovie = resData.data
  //       dispatch({ type: 'GET_MOVIES', payload: dataMovie})
  //     })
  // }


  const getMovies = () => {
    dispatch(getAllMovies())
  }
  
  useEffect(()=>{
      getMovies()
    }, []);  
  
  const history = useHistory();
  const detailsHandling = (idMovie) => {
    history.push(`/details/${idMovie}`)
  }
  
    return ( 
      <div>
        <div className="container">
          <div className={Style['boxs']}>
            {movies.map((item)=> {
              return (
                <div className={Style['box']}>
                  <div className={Style['content-box']} >
                    
                    <img className={Style['img-movie']} src={item.image} alt=""/>
                    <h5 className="" >{item.movieTittle}</h5>
                    <p>{item.genre}</p>
                    
                    <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {detailsHandling(item.idMovie)}} >Details</button>
                    {/* <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {deleteHandling(item.id_Movie)}} >Delete</button> */}
                  </div>                  
                </div>  
              ) 
            })}
          </div>
        </div>
      </div>
    )
}

export default CardMovies



// const [movieList, setMovieList] = useState([]);

    // useEffect(()=>{
    //   getMovies()
    // }, []); 
    
    // const getMovies = ()=>{
    //   Axios.get('http://localhost:3001/api/get').then((res)=>{
    //         console.log(res);
    //         setMovieList(res.data)
    //     })
    // }

    // const deleteHandling = (id) =>{
    //   Axios.delete(`http://localhost:3001/api/delete/${id}`)
    //   .then((res)=>{
    //     getMovies()
    //   })
    // }

    // const history = useHistory();
    // const detailsHandling = (idmovie) => {
    //   history.push(`/details/${idmovie}`)
    // }


// File lama
      // <div>
      //   <div className="container">
      //     <div className={Style['boxs']}>

      //       {movieList.map((item)=> {
      //         return (
      //           <div className={Style['box']}>
      //             <div className={Style['content-box']} >

      //               <div className={Style.upcoming1}> </div>
      //               <h5 className="" >{item.movieTittle}</h5>
      //               <p>{item.genre}</p>
                    
      //               <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {detailsHandling(item.id_Movie)}} >Details</button>

      //               <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {deleteHandling(item.id_Movie)}} >Delete</button>
      //             </div>                  
      //           </div>  
      //         ) 
      //         })}

      //     </div>
      //   </div>
      // </div>












    {/* <div className={Style['wraps']}>
      <div className={Style['wrap']}>
      
          {movieList.map((item)=> {
            return (
            <div className="row">
              <div className="col">
                <div className="card">
              
                  <div className="card-body">
                    <div className={Style.upcoming1}> </div>
                        <h5 className="text-align" >{item.movieTittle}</h5>
                        <p>{item.genre}</p>
                        <Link to="/details">
                         <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                        </Link>

                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {deleteHandling(item.id_Movie)}} >Delete</button>
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}  >Update</button>
                  </div>                    

                </div>
              </div>
            </div>
            ) 
          })}


      </div>
    </div> */}