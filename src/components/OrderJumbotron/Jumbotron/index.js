import React, {useEffect, useState} from 'react'
import Style from './jumbotron.module.css'
import {Link, useParams, useLocation} from 'react-router-dom'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

function Jumbotron() {
  const {search, pathname} = useLocation();
  const history = useHistory()
  const params = useParams()
  // console.log(params);
  const [movieState, setStateMovie] = useState({
    moviebyid: [],
  })

  const [getSeatsA, setGetSeatsA] = useState()
  const [getSeatsB, setGetSeatsB] = useState()

  useEffect(()=>{
    const idMovie = params.idmovie 
    Axios.get(`${process.env.REACT_APP_API}/movies/${idMovie}`)
    .then((res)=>{
      setStateMovie({
        moviebyid: res.data.data
      })
    })  

    
  }, []);

  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_API}/seat/getbycategory/A`)
    .then((res)=>{
      // console.log(res.data.data, 'llll');
      const dataSeat = res.data.result
      console.log(dataSeat, 'iniasdasd');
      if(dataSeat !== undefined){
        setGetSeatsA(dataSeat)
      } else{
        console.log(dataSeat);
      }
    })
    .catch((err)=>{
      console.log(err);
    })

    Axios.get(`${process.env.REACT_APP_API}/seat/getbycategory/B`)
    .then((res)=>{
      const dataSeatB = res.data.result
      if(dataSeatB !== undefined){
        setGetSeatsB(dataSeatB)
      } else{
        console.log(dataSeatB);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [pathname]);

  const idCinema = params.idcinema
  const adaMovie = movieState.moviebyid;
  const schdulee = adaMovie.schedule
  // console.log(getSeatsA);

    return (
        <div>
           {/* <!-- JUMBOTRON --> */}
          <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-1']].join(' ')}>
            <div className="container">
              {/* <!-- AWAL MOVIE SELECTED & ORDER INFO --> */}
              <div className={[['row'], Style['tittle']].join(' ')}>
                <h3>Movie Selected</h3>
                <h4 className={Style['order-teks']}>Order Info</h4>
              </div>

              <div className={[['row'], Style['movieAndOrder']].join(' ')}>
              {schdulee !== undefined  ?  schdulee.map((item)=>{
              return( 
              <>
                <div className="col-md-8">
                  <div className={[['card'], Style['card1']].join(' ')} >
                    <div className="card-body">
                      <div className="row">    
                      {/* {item.idCinema} */}
                        <h3>{item.idCinema==idCinema?item.movieTittle: ''}</h3>
                        <Link to="/" className={[['btn'], Style['button']].join(' ')}>Change Movie</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className={[['card'], Style['card-order-info']].join(' ')} >
                    <div className="card-body">
                      {/* <div className={Style['order-img']}></div> */}
                      <img className={Style['order-img']} src={item.image} alt=""/>
                      <h5 className={Style['order-title']}>{item.cinemaName}</h5>
                      
                      <div className="row">
                        <div className={[['col'], Style['order-information']].join(' ')}>
                          <h5>Movie selected</h5>
                          <h5>Sunday, 06 March 2021</h5>
                          <h5>One Ticket Price</h5>
                          <h5>Seat Choosen</h5>
                        </div>
                        <div className={[['col'], Style['order-detail']].join(' ')}>
                          <h5>{item.movieTittle}</h5>
                          <h5>{item.time}</h5>
                          <h5>Rp.{item.price}</h5>
                          <h5>C4, C5, C6</h5>
                        </div>
                      </div>

                      <div className="row">
                        <div className={Style['order-line16']}></div>
                        {/* <img src="./assets/Line 16.png" alt=""> */}
                      </div>

                      <div className={[['row'], Style['totalpayment']].join(' ')}>
                        <div className="col">
                          <h4>Total Payment</h4>
                        </div>
                        <div className="col">
                          <h3>Rp. {item.price}</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </>
              )   
              }) :console.log('No data map') }
              </div>
              
              {/* <!-- AKHIR MOVIE SELECTED & ORDER INFO --> */}

              {/* <!-- AWAL CHHOSE YOUR SEAT --> */}
              <div className={[['row'], Style['chooseyourseat']].join(' ')}>
                <h3>Choose Your Seat</h3>
              </div>

              <div className="row">
                <div className="col">
                  <div className={[['card'], Style['card2']].join(' ')} >
                    <div className="card-body">
                      <div className="row">    
                        <h5 className={Style['screen-tittle']}>Screen</h5>
                      </div>
                      <div className="row mb-5">
                        <div className={Style['line-mobile']}></div>
                        <div className={Style['img-line']}></div>
                        {/* <img className="line-mobile" src="/assets/line-mobile.png" alt=""> */}
                        {/* <img className="line" src="./assets/Rectangle 536.png" alt=""> */}
                      </div>
                      <div className={[["row"], ["mb-3"], Style['seat-menu']].join(' ')}>
                      {/* <p>{JSON.stringify(getSeatsA)}</p>   */}
                      {getSeatsA !== undefined? getSeatsA.map((item)=>{
                      return( 
                      <>
                        <div className="col-1">
                          <button
                            className={Style['button-seat']}
                          > 
                          {/* {item.seatName} */}
                          </button>
                        </div>
                      </>
                      )   
                      }): null }
                        
                        {/* Hapus Sebentar */}
                        {/* <div className={Style.seat}></div>
                        <div className={Style['seat-mobile']}></div> */}
                        
                      </div>
                      <div className={[["row"], Style['seat-menu']].join(' ')}>
                        {getSeatsB !== undefined? getSeatsB.map((item)=>{
                        return( 
                        <>
                          <div className="col-1">
                            <button
                              className={Style['button-seat']}
                            >
                              {/* {item.seatName} */}
                            </button>
                          </div>
                        </>
                        )   
                        }): null }
                      </div>
                      
                      <div className="row">
                        <h4 className={Style.seatingkey}>Seating key</h4>
                      </div>

                      <div className={[['row'], Style['keyseat']].join(' ')}>
                        <div className={Style['keyseat-img1']}></div>
                        {/* <img src="./assets/available.png" alt=""> */}
                        <h5>Available</h5>

                        {/* <img src="./assets/selected.png" alt=""> */}
                        <div className={Style['keyseat-img2']}></div>
                        <h5>Selected</h5>

                        {/* <img src="./assets/lovenest.png" alt=""> */}
                        <div className={Style['keyseat-img3']}></div>
                        <h5>Love nest</h5>

                        {/* <img src="./assets/sold.png" alt=""> */}
                        <div className={Style['keyseat-img4']}></div>
                        <h5>Sold</h5>
                      </div>

                      {/* <!-- keyseat-mobile only--> */}
                      <div className={[['row'], Style['keyseat-mobile']].join(' ')}>
                        <div className="col">

                          <div className={[['row'], Style['icon1']].join(' ')}>

                            <div className={Style['keyseat-mobile-img']}></div>
                            {/* <img className="arrow" src="./assets/Forward Arrow.png" alt=""> */}
                            <h5>A - G</h5>

                            <div className={Style['keyseat-mobile-img-arrow2']}></div>
                            {/* <img className="arrow2" src="./assets/r-arrow.png" alt=""> */}
                            <h5>1 - 14</h5>
                          </div>

                          <div className={[['row'], Style['icon2']].join(' ')}>

                            <div className={Style['keyseat-mobile-icon2']}></div>
                            {/* <img className="arrow" src="./assets/Forward Arrow.png" alt=""> */}
                            <h5>Available</h5>

                            <div className={Style['keyseat-mobile-icon3']}></div>
                            {/* <img className="arrow2" src="./assets/r-arrow.png" alt=""> */}
                            <h5>Selected</h5>
                          </div>

                          <div className={[['row'], Style['icon4']].join(' ')}>

                            <div className={Style['keyseat-mobile-icon4']}></div>
                            {/* <img className="arrow" src="./assets/Forward Arrow.png" alt=""> */}
                            <h5>Love nest</h5>

                            <div className={Style['keyseat-mobile-icon5']}></div>
                            {/* <img className="arrow2" src="./assets/r-arrow.png" alt=""> */}
                            <h5>Sold</h5>
                          </div>

                      
                        </div>
                      </div>
                      {/* <!-- AKHIR KEYSEAT MOBILE --> */}

                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- AKHIR CHOOSEYOUR SEAT --> */}

              {/* <!-- Order Movie- Mobile.version ONLY --> */}
              <div className="row mt-5">
                <div className="col">
                  <div className={[['card'], Style['card3']].join(' ')} >
                    <div className="card-body">
                      <div className={[['row'], Style['choose-seat-border']].join(' ')}>    
                        <div className={[['col'], Style['set-btn-choose']].join(' ')}>
                          <div className="dropdown">
                            <button className="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <h5 className={Style['in-teks']}> C </h5>
                              <div className={Style['img-dropdown']}></div> 
                              {/* <img className="dropdown" src="./assets/dropdown.png" alt=""> */}
                            </button>
                            
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="dropdown-item" to="#">A</Link>
                              <Link className="dropdown-item" to="#">B</Link>
                              <Link className="dropdown-item" to="#">....</Link>
                            </div>
                          </div>
                        </div>
                        <div className={[['col'], Style['set-btn-choose']].join(' ')}>
                          <div className="dropdown">
                            <button className="btn btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <h5 className={Style['in-teks2']}> 4 </h5>
                              <div className={Style['img-dropdown2']}></div>  
                              {/* <img className="dropdown2" src="./assets/dropdown.png" alt=""> */}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="dropdown-item" to="#">5</Link>
                              <Link className="dropdown-item" to="#">6</Link>
                              <Link className="dropdown-item" to="#">....</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div className={[['row'], Style['choose-seat-border']].join(' ')}>    
                        <div className={[['col'], Style['set-btn-choose']].join(' ')}>
                          <div className="dropdown">
                            <button className="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <h5 className={Style['in-teks']}> C </h5>
                              <div className={Style['img-dropdown']}></div> 
                              {/* <img className="dropdown" src="./assets/dropdown.png" alt=""> */}
                            </button>
                            
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="dropdown-item" to="#">A</Link>
                              <Link className="dropdown-item" to="#">B</Link>
                              <Link className="dropdown-item" to="#">....</Link>
                            </div>
                          </div>
                        </div>
                        <div className={[['col'], Style['set-btn-choose']].join(' ')}>
                          <div className="dropdown">
                            <button className="btn btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <h5 className={Style['in-teks2']}> 4 </h5>
                              <div className={Style['img-dropdown2']}></div>  
                              {/* <img className="dropdown2" src="./assets/dropdown.png" alt=""> */}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="dropdown-item" to="#">5</Link>
                              <Link className="dropdown-item" to="#">6</Link>
                              <Link className="dropdown-item" to="#">....</Link>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className={[['row'], Style['choose-seat-border']].join(' ')}>    
                        <div className={[['col'], Style['set-btn-choose']].join(' ')}>
                          <div className="dropdown">
                            <button className="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <h5 className={Style['in-teks']}> C </h5>
                              <div className={Style['img-dropdown']}></div> 
                              {/* <img className="dropdown" src="./assets/dropdown.png" alt=""> */}
                            </button>
                            
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="dropdown-item" to="#">A</Link>
                              <Link className="dropdown-item" to="#">B</Link>
                              <Link className="dropdown-item" to="#">....</Link>
                            </div>
                          </div>
                        </div>
                        <div className={[['col'], Style['set-btn-choose']].join(' ')}>
                          <div className="dropdown">
                            <button className="btn btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <h5 className={Style['in-teks2']}> 4 </h5>
                              <div className={Style['img-dropdown2']}></div>  
                              {/* <img className="dropdown2" src="./assets/dropdown.png" alt=""> */}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="dropdown-item" to="#">5</Link>
                              <Link className="dropdown-item" to="#">6</Link>
                              <Link className="dropdown-item" to="#">....</Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={[['row'], Style['button-seat']]}>
                        <button type="button" className={[['btn'], Style['button-new-seat']].join(' ')}>
                          Add new seat</button>
                          {/* <h4 className={Style['teks-last']}>Add new seat</h4> */}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- AKHIR Order Movi0e- Mobile.version only --> */}




              <div className={[['row'], Style['last-button']].join(' ')}>
                <div className={[['col'], Style['button1']].join(' ')}>
                  <button type="button" className={[['btn'], Style['button-change']].join(' ')}>Change your movie</button>
                </div>
                <div className={[['col'], Style['button2']].join(' ')}>
              
                <Link to="/payment">
                  <button type="button" className={[['btn'], Style['button-check']].join(' ')}>Checkout now</button>
                </Link>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- AKHIR JUMBOTRON --></div> */}
        </div>
    )
}


export default Jumbotron
