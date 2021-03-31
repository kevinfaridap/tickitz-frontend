import React, {useEffect, useState} from 'react'
import Style from './jumbotron.module.css'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

function Jumbotron() {
  const params = useParams()

  const [movieState, setStateMovie] = useState({
    moviebyid: [],
  })

  // const moviebyid = movieList.data

    useEffect(()=>{
      const idMovie = params.idmovie
      
      Axios.get(`http://localhost:8000/v1/movies/${idMovie}`)
      .then((res)=>{
        // console.log(res.data);
        setStateMovie({
          moviebyid: res.data.data
        })

      }) 
    }, []);
    // console.log(movieState.moviebyid);

    // const mm = moviebyid[0];
    // console.log(movieList);
    // console.log(moviebyid);
    
    return (
        <div>
            {/* AWAL JUMBOTRON */}
            <div className={[Style['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-1']].join(' ')}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                  {movieState.moviebyid.map((item)=>{
                    return( 
                    <div className={Style['poster']}>
                      {/* <div className={Style['img-1']}></div> */}
                      <img className={Style['img-1']} src={item.image} alt=""/>
                      <div className={Style['img-2']}></div>
                     
                    </div>
                     )   
                    })}
                  </div>
                  <div className={[['col'], Style['full-teks']].join(' ')}>
                    <div className="row">
                      <div className="col">

                      {movieState.moviebyid.map((item)=>{
                         return( 
                          <>
                          <h3>  {item.movieTittle}  </h3>
                          <h5> {item.genre} </h5>

                        {/* <h3>Spider-Man: Homecoming</h3> */}
                        {/* <h5>Adventure, Action, Sci-Fi</h5> */}

                        <div className={['row', Style['teks-2']].join(' ')}>
                          <div className="col-lg-3 col-5">
                            
                            <h5>Release date</h5>
                            <h4>{item.releaseDate}</h4>
                            {/* <h4>June 28, 2017</h4> */}
                          </div>
                          <div className="col">
                            <h5>Directed by</h5>
                            <h4>{item.directedBy}</h4>
                            {/* <h4>Jon Watss</h4> */}
                          </div>
                        </div>
                        <div className={[['row'], Style['teks-2']].join(' ')}>
                          <div className="col-lg-3 col-5">
                            <h5>Duration</h5>
                            <h4>{item.duration}</h4>
                            {/* <h4>2 hours 13 minutes</h4> */}
                          </div>
                          <div className="col">
                            <h5>Casts</h5>
                            <h4>{item.casts}</h4>
                            {/* <h4>Tom Holland, Michael Keaton, Robert Downey Jr..,...</h4> */}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            {/* <div className={Style['a-line']}></div> */}
                            {/* <img className="a-line" src="./assets/Line 12.png" alt=""/> */}
                          </div>
                        </div>

                        <div className={[['row'], Style['synopsis']].join(' ')}>
                          <div className="col">
                            <h3>Synopsis</h3>
                            <p>{item.synopsis}</p>
                            {/* <p>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </p> */}
                          </div>
                        </div>

                          </>
                           )   
                          })}  


                      </div>
                    </div>    
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- AKHIR JUMBOTRON 1--></div> */}
        </div>
    )
}

export default Jumbotron
