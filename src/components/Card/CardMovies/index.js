import Axios from 'axios'
import React, {useEffect, useState}  from 'react'
import Style from './cardmovies.module.css'
import {Link} from 'react-router-dom'

function CardMovies() {
    // const [movieTittle, setMovieTittle] = useState("");
    // const [genre, setGenre] = useState("");
    // const [releaseDate, setReleaseDate] = useState("");
    // const [directBy, setDirectBy] = useState("");
    // const [duration, setDuration] = useState("");
    // const [casts, setCasts] = useState("");
    // const [synopsis, setSynopsis] = useState("");
    const [id_Movie, setIdMovie] = useState("");
    const [movieList, setMovieList] = useState([]);



    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((res)=>{
            console.log(res);
            setMovieList(res.data)
        })
    }, []); 


    const deleteHandling = (id) =>{
      Axios.delete(`http://localhost:3001/api/delete/${id}`)
    }

    return (
        <div>
          {/* <div className="container ">
            <div className={[['row'], Style['adsas']].join(' ')}>
              {movieList.map((item)=> {
                return (
                    <div className={[['col-md-3'], Style['sads']].join(' ')}>
                      <div className={[['card'], Style['items']].join(' ')}>
                        <div className={[Style['item'], Style['card-body']].join(' ')}>
                         
                          <div className={Style.upcoming1}> </div>
                              <h5 className="text-align" >{item.movieTittle}</h5>
                              <p>{item.genre}</p>
                              <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                          </div>                    
                      </div>
                    </div>
                ) 
              })}

            </div>
          </div> */}

          <div className={Style['wraps']}>
            <div className={Style['wrap']}>
              <div className="row">
            
              {movieList.map((item)=> {
                  return (
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
                  ) 
                })}

              </div>

            </div>
          </div>
         
             
        </div>
    )
}

export default CardMovies
