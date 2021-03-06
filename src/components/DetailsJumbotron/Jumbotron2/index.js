import React, {useEffect, useState} from 'react'
import Style from './jumbotron.module.css'
import {Link, useParams} from 'react-router-dom'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function Jumbotron2() {
  const history = useHistory()
  const params = useParams()

  const [movieState, setStateMovie] = useState({
    moviebyid: [],
  })

  // U/ Cinema nya di join dari moviebyid, jadi tidak pakai ini
  const [cinemaState, setStateCinema] = useState({
    cinemaList: [],
  })

  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_API}/cinema/`)
      .then((res)=>{
        setStateCinema({
          cinemaList: res.data.data
        })
      }) 

    const idMovie = params.idmovie 
    Axios.get(`${process.env.REACT_APP_API}/movies/${idMovie}`)
    .then((res)=>{
      // console.log(res.data, 'ddudu');
      setStateMovie({
        moviebyid: res.data.data
      })

    })  
  }, []);


  const adaMovie = movieState.moviebyid;
  const schdulee = adaMovie.schedule

  const handlingBooking = (idMovie, idCinema) => {
    history.push(`/order/${idMovie}/${idCinema}`)
  }

  // if(schdulee[0].cinemaName != schdulee[1].cinemaName){
  //   console.log('sasas');
  // }



    return (
        <div>
          {/* <!-- JUMBOTRON 2 --> */}
            <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-2']].join(' ')}>
              <div className="container">
                <h1 className={Style['display-4']}>Showtimes and Tickets</h1>
                
                {/* <!-- AWAL DROPDOWN --> */}
                {/* <div className="row">
                  <div className="col-lg-4">
                    <div className={Style['dropdown']}>
                      <button className={[Style['btn'], ['btn-secondary'], ['dropdown-toggle']].join(' ')} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        06/03/21
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Masukkan Tanggal</Link>
                      </div>
                    </div>    
                  </div>
                  <div className="col-lg-4">
                    <div className={Style.dropdown}>
                      <button className={[Style['btn'], ['btn-secondary'], ['dropdown-toggle']].join(' ')} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bengkulu
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="#">Pilih Kota</Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <!-- AKHIR DROPDOWN --> */}

                {/* <!-- Cards1 --> */}
                <div className="row">
                  {/* {cinemaState.cinemaList.map((item)=>{
                    return( 
                    <> */}
                  {schdulee !== undefined  ?  schdulee.map((item)=>{
                  return( 
                  <>
                  <div className={[['col-lg-4'], Style['card-1']].join(' ')}>
                    <div className={Style.card}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            {/* <div className={Style['img-showtime1']}></div> */}
                            <img className={Style['img-showtime1']} src={item.image} alt=""/>
                          </div>
                          <div className="col">
                            {/* <h5 className={Style['card-title']}>ebv.id</h5> */}
                            <h5 className={Style['card-title']}>{item.cinemaName}</h5>
                            <p>{item.cinemaAddress}</p>
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className={Style['img-show-line']}></div>
                          {/* <img className="img-show-line" src="./assets/Line 29.png" alt=""> */}
                        </div>

                        {/* {schdulee !== undefined ? schdulee.map((item)=>{
                          return( 
                          <> */}
                        <div className="row mt-2 mt-lg-4">
                          <div className="col">
                            <h4>{item.time}</h4>
                          </div>
                        </div>
                        {/* </>
                          )   
                          }) :console.log('err') } */}

                        <div className="row">
                          <div className="col">
                            <h3>Price</h3>
                          </div>
                          <div className="col">
                            {/* <h2>$10.00/seat</h2> */}
                            <h2>Rp.{item.price}/seat</h2>
                          </div>
                        </div>
                        <button 
                          type="button" 
                          className={Style.btn2}
                          onClick={() => {handlingBooking(params.idmovie, item.idCinema)}}
                        >Book Now</button>
                        <button type="button" className={Style.btn3}>Add to cart</button>
                      </div>
                    </div>
                  </div>

                  </>
                  )   
                  }) :console.log('err') }

                  {/* </>
                    )   
                    })} */}
                </div>

                  {/* <div className={[['col-4'], Style['card-2']].join(' ')}>
                    <div className={Style.card}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className={Style['img-showtime2']}></div>
                            
                          </div>
                          <div className="col">
                            <h5 className={Style['card-title']}>CineOne2</h5>
                            <p>Downcare street No.12, South Purwokerto</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className={Style['img-show-line']}></div>
                         
                        </div>
                        
                        <div className="row mt-2">
                          <div className="col">
                            <h4>08:30am</h4>
                          </div>
                          <div className="col">
                            <h4>10:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>12:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>02:00pm</h4>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col">
                            <h4>04:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>07:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>08:30pm</h4>
                          </div>
                          <div className="col">
                            <h4> </h4>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <h3>Price</h3>
                          </div>
                          <div className="col">
                            <h2>$10.00/seat</h2>
                          </div>
                        </div>
                        <button type="button" className={Style.btn2}>Book Now</button>
                        <button type="button" className={Style.btn3}>Add to cart</button>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className={[['col-4'], Style['card-3']].join(' ')}>
                    <div className={Style.card}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className={Style['img-showtime3']}></div>
                            
                          </div>
                          <div className="col">
                            <h5 className={Style['card-title']}>hiflix Cinema</h5>
                            <p>Colonel street No.2, East Purwokerto</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className={Style['img-show-line']}></div>
                         
                        </div>
                        
                        <div className="row mt-2">
                          <div className="col">
                            <h4>08:30am</h4>
                          </div>
                          <div className="col">
                            <h4>10:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>12:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>02:00pm</h4>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col">
                            <h4>04:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>07:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>08:30pm</h4>
                          </div>
                          <div className="col">
                            <h4> </h4>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <h3>Price</h3>
                          </div>
                          <div className="col">
                            <h2>$10.00/seat</h2>
                          </div>
                        </div>
                        <button type="button" className={Style.btn2}>Book Now</button>
                        <button type="button" className={Style.btn3}>Add to cart</button>
                      </div>
                    </div>
                  </div> */}
                  {/* </>
                    )   
                    })}
                </div> */}
                {/* <!-- Akhir Cards1 --> */}
              
             
                {/* <!-- Cards2 --> */}
                {/* <div className="row ">
                  <div className={[['col-lg-4'], Style['card-4']].join(' ')}>
                    <div className={Style.card}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className={Style['img-showtime1']}></div>
                        
                          </div>
                          <div className="col">
                            <h5 className={Style['card-title']}>ebv.id</h5>
                            <p>Whatever street No.12, South Purwokerto</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className={Style['img-show-line']}></div>
                      
                        </div>
                        
                        <div className="row mt-2">
                          <div className="col">
                            <h4>08:30am</h4>
                          </div>
                          <div className="col">
                            <h4>10:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>12:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>02:00pm</h4>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col">
                            <h4>04:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>07:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>08:30pm</h4>
                          </div>
                          <div className="col">
                            <h4> </h4>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <h3>Price</h3>
                          </div>
                          <div className="col">
                            <h2>$10.00/seat</h2>
                          </div>
                        </div>
                        <button type="button" className={Style.btn2}>Book Now</button>
                        <button type="button" className={Style.btn3}>Add to cart</button>
                      </div>
                    </div>
                  </div>

                  <div className={[['col-4'], Style['card-5']].join(' ')}>
                    <div className={Style.card}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className={Style['img-showtime2']}></div>
                          
                          </div>
                          <div className="col">
                            <h5 className={Style['card-title']}>CineOne2</h5>
                            <p>Downcare street No.12, South Purwokerto</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className={Style['img-show-line']}></div>
                        
                        </div>
                        
                        <div className="row mt-2">
                          <div className="col">
                            <h4>08:30am</h4>
                          </div>
                          <div className="col">
                            <h4>10:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>12:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>02:00pm</h4>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col">
                            <h4>04:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>07:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>08:30pm</h4>
                          </div>
                          <div className="col">
                            <h4> </h4>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <h3>Price</h3>
                          </div>
                          <div className="col">
                            <h2>$10.00/seat</h2>
                          </div>
                        </div>
                        <button type="button" className={Style.btn2}>Book Now</button>
                        <button type="button" className={Style.btn3}>Add to cart</button>
                      </div>
                    </div>
                  </div>

                  <div className={[['col-4'], Style['card-6']].join(' ')}>
                    <div className={Style.card}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className={Style['img-showtime3']}></div>
                           
                          </div>
                          <div className="col">
                            <h5 className={Style['card-title']}>hiflix Cinema</h5>
                            <p>Colonel street No.2, East Purwokerto</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className={Style['img-show-line']}></div>
                          
                        </div>
                        
                        <div className="row mt-2">
                          <div className="col">
                            <h4>08:30am</h4>
                          </div>
                          <div className="col">
                            <h4>10:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>12:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>02:00pm</h4>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col">
                            <h4>04:30pm</h4>
                          </div>
                          <div className="col">
                            <h4>07:00pm</h4>
                          </div>
                          <div className="col">
                            <h4>08:30pm</h4>
                          </div>
                          <div className="col">
                            <h4> </h4>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <h3>Price</h3>
                          </div>
                          <div className="col">
                            <h2>$10.00/seat</h2>
                          </div>
                        </div>
                        <button type="button" className={Style.btn2}>Book Now</button>
                        <button type="button" className={Style.btn3}>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <!-- Akhir Cards2 --> */}

                {/* <!-- VIEW MORE --> */}
                <div className="row mt-5">
                  <div className="col">
                    <div className={Style['view-more-line']}></div>
                    {/* <img className="view-more-line" src="./assets/Line 13.png" alt=""> */}
                  </div>
                  <div className="col">
                    <Link to="">
                      <h2 className={Style.view}>View More</h2>

                    </Link>
                  </div>
                  <div className="col">
                    <div className={Style['view-more-line']}></div>
                    {/* <img className="view-more-line" src="./assets/Line 13.png" alt=""> */}
                  </div>
                </div>
                {/* <!-- AKHIR VIEW MORE --> */}
              </div>
            </div>
            {/* <!-- Akhir JUMBOTRON2 --></div> */}
        </div>
    )
}

export default Jumbotron2 