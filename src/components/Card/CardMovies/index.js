import Axios from 'axios'
import React, {useEffect, useState}  from 'react'
import Style from './cardmovies.module.css'
import {Link, useHistory} from 'react-router-dom'

function CardMovies() {
   
    const [movieList, setMovieList] = useState([]);


    useEffect(()=>{
      getMovies()
    }, []); 
    
    const getMovies = ()=>{
      Axios.get('http://localhost:3001/api/get').then((res)=>{
            console.log(res);
            setMovieList(res.data)
        })
    }


    const deleteHandling = (id) =>{
      Axios.delete(`http://localhost:3001/api/delete/${id}`)
      .then((res)=>{
        getMovies()
      })
    }

    const history = useHistory();
    const detailsHandling = (idmovie) => {
      history.push(`/details/${idmovie}`)
    }

    return (
        <div>
          <div className="container">
            <div className={Style['boxs']}>

              {movieList.map((item)=> {
                return (
                  <div className={Style['box']}>
                    <div className={Style['content-box']} >
                      {/* <div className={Style.upcoming1}> </div> */}
                      <div className={Style.upcoming1}> </div>
                      <h5 className="" >{item.movieTittle}</h5>
                      <p>{item.genre}</p>
                      {/* <Link to="/details"> */}
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {detailsHandling(item.id_Movie)}} >Details</button>
                      {/* </Link> */}
                      <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')} onClick={() => {deleteHandling(item.id_Movie)}} >Delete</button>
                      {/* <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}  >Update</button> */}
                    </div>                  
                  </div>  
                ) 
                })}
    
            </div>
          </div>

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
         
             
        </div>
    )
}

export default CardMovies
