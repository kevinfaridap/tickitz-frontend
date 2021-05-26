import React, {useEffect, useState} from 'react'
import Style from './jumbotron.module.css'
import {Link, useParams, useLocation} from 'react-router-dom'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import {gpay, bca, bri, dana, ovo, gopay, paypal, visa} from '../../../assets/images'
import swal from 'sweetalert'
const jwt = require('jsonwebtoken')

function Jumbotron() {
  const {search, pathname} = useLocation();
  const history = useHistory()
  const params = useParams()

  const [movieState, setStateMovie] = useState({
    moviebyid: [],
  })

  const [getDataUserLogin, setGetDataUserLogin] = useState([])
  const [choosePayment, setChoosePayment] = useState(null)
  
  useEffect(()=>{
    const idMovie = params.idmovie 
    Axios.get(`${process.env.REACT_APP_API}/movies/${idMovie}`)
    .then((res)=>{
      setStateMovie({
        moviebyid: res.data.data
      })
    })  

    const isAuthenticated = localStorage.getItem('token')
    let decode = jwt.decode(isAuthenticated)
    const emailUserLogin = decode.email
    
    // console.log(decode, 'isi decode');
    Axios.get(`${process.env.REACT_APP_API}/users/${emailUserLogin}`)
    .then((res)=>{
      const dataUserLogin = res.data.data[0]
      // console.log(dataUserLogin);
      if(dataUserLogin !== undefined){
        setGetDataUserLogin(dataUserLogin)
      } else{
        console.log(dataUserLogin);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

  const idCinema = params.idcinema
  const adaMovie = movieState.moviebyid;
  const schdulee = adaMovie.schedule
  const idMovie = params.idmovie
  const seatname = params.seatname
  const ticketvalues = params.ticketvalues
  
    
  const payorder =()=>{
    if(choosePayment===null){
      swal(`You haven't choose payment method!`)
    } else{
      if(schdulee !== undefined){
        const isAuthenticated = localStorage.getItem('token')
        let decode = jwt.decode(isAuthenticated)
        const idUser = decode.idUser
        
        Axios.post(`${process.env.REACT_APP_API}/ticketresult/`, {
          movieTittle: schdulee[0].movieTittle,
          idUser: idUser,
          time: schdulee[0].time,
          seatvalues: ticketvalues,
          seatnames: seatname,
          price: schdulee[0].price
        })
        .then((res) => {
            if(res.data === null || res.data === undefined){
              swal(`Something Wrong!`)
            } else{
              const dataTicket = res.data.data
              console.log(dataTicket);
              swal(`Success Order Ticket!`)
              history.push(`/ticketresult/${dataTicket.id}`)
            }
        })
        .catch((err) => {
            console.log(err);
        }) 
      } else{
        swal('something wrong!')
      }
    }
  }

    return (
        <div>
            {/* <!-- JUMBOTRON --> */}
            <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-1']].join(' ')}>
              <div className="container">
                {/* <!-- AWAL Payment INFO --> */}
                <div className={[['row'], Style['tittle']].join(' ')}>
                  <h3>Payment Info</h3>
                  <h4 className={Style['order-teks']}>Personal Info</h4>
                </div>

                <div className={[['row'], Style['paymentinfo']].join(' ')}>
                  <div className="col-md-8">
                    {schdulee !== undefined  ?  schdulee.map((item)=>{
                    return( 
                    <>
                    <div className={[['card'], Style['card1']].join(' ')} >
                      <div className="card-body">

                        <div className={[['row'], Style['info-1']].join(' ')}>    
                          <div className="col-4">
                            <h5 className={Style.info1}>Time</h5>
                          </div>
                          <div className="col">
                            <h5 className={Style.info2} >{item.time}</h5>
                          </div>
                        </div>
                        <div className={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div className={[['row'], Style['info-1']].join(' ')}>    
                          <div className="col">
                            <h5 className={Style.info1}>Movie title</h5>
                          </div>
                          <div className="col">
                            <h5 className={Style.info2} >{item.movieTittle}</h5>
                          </div>
                        </div>
                        <div className={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div className={[['row'], Style['info-1']].join(' ')}>    
                          <div className="col">
                            <h5 className={Style.info1}>Cinema name</h5>
                          </div>
                          <div className="col">
                            <h5 className={Style.info2} >{item.cinemaName}</h5>
                          </div>
                        </div>
                        <div className={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div className={[['row'], Style['info-1']].join(' ')}>    
                          <div className="col">
                            <h5 className={Style.info1}>Number of tickets</h5>
                          </div>
                          <div className="col">
                            <h5 className={Style.info2} >{ticketvalues} pieces</h5>
                          </div>
                        </div>
                        <div className={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div className={[['row'], Style['totalpayment']].join(' ')}>
                          <div className="col">
                            <h4>Total Payment</h4>
                          </div>
                          <div className="col">
                            <h3>IDR {ticketvalues*item.price}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    </> 
                    )   
                    }) :console.log('No data map') }
                  </div>

                  <div className={[['col-4'], Style['card-del']].join(' ')}>
                    <div className={[['card'], Style['card-personalinfo']].join(' ')} >
                      <div className="card-body">
                        <h5 className={Style['title-personalinfo']}>Full Name</h5>
                        <div className="row">
                          <div className={[['card'], Style['card-info']].join(' ')}>
                              <h5> {getDataUserLogin.firstName+ ' ' + getDataUserLogin.lastName}</h5>
                          </div>
                        </div>
                        
                        <h5 className={Style['title-personalinfo']}>Email</h5>
                        <div className="row">
                          <div className={[['card'], Style['card-info']].join(' ')}>
                              <h5>{getDataUserLogin.email}</h5>
                          </div>
                        </div>

                        <h5 className={Style['title-personalinfo']}>Phone Number</h5>
                        <div className="row">
                          <div className={[['card'], Style['card-info']].join(' ')}>
                              <h5>{getDataUserLogin.phoneNumber} </h5>  
                          </div>
                        </div>
                      
                        <div className={[['row'], Style['button-fill-data']].join(' ')}>
                          <button type="button" className={[['btn'], Style['btn-fill']].join(' ')}>
                          <div className={Style['btn-personal-info']}></div> 
                          {/* <img className="btn-personal-info" src="./assets/btn.png" alt="">  */}
                          Change data on profile if incorect</button>
                        </div>
            
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- AKHIR Payment INFO --> */}

                {/* <!-- METHOD MOBILE --> */}
                <div className="col">
                  <h4 className={Style['title-paymethod']} >Payment Method</h4>
                </div>
                {/* <!-- AKHIR METHOD MOBILE --> */}

                {/* <!-- AWAL Payment Method --> */}
                <div className={[['row'], Style['tittle2']].join(' ')}>
                  <h3>Choose Payment Method</h3>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className={[['card'], Style['card2']].join(' ')} >
                      <div className="card-body">
                        <div className="row ">    
                          <div className="col-3">
                            <button 
                              className={[['card'], Style['payment']].join(' ')} 
                              onClick={()=>setChoosePayment(1)}
                            >
                              <div className={Style['google-payment']}>
                                <img src={gpay} alt="" />
                              </div>
                            </button>
                          </div>
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(2)}>
                              <div className={Style['visa-payment']}>
                                <img src={visa} alt="" />
                              </div>
                            </button>
                          </div>
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(3)}> 
                              <div className={Style['gopay-payment']}>
                                <img src={gopay} alt="" />
                              </div>
                            </button>
                          </div>
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(4)}>
                              <div className={Style['paypal-payment']}>
                                <img src={paypal} alt="" />
                              </div>
                            </button>
                          </div>
                        </div>

                        <div className="row mt-4 ">    
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(5)}>
                              <div className={Style['dana-payment']}>
                                <img src={dana} alt="" />
                              </div>
                            </button>
                          </div>
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(6)}>
                              <div className={Style['bca-payment']}>
                                <img src={bca} alt="" />
                              </div>
                            </button>
                          </div>
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(7)}>
                              <div className={Style['bri-payment']}>
                                <img src={bri} alt="" />
                              </div>
                            </button>
                          </div>
                          <div className="col-3">
                            <button className={[['card'], Style['payment']].join(' ')} onClick={()=>setChoosePayment(8)}>
                              <div className={Style['ovo-payment']}>
                                <img src={ovo} alt="" />
                              </div>
                            </button>
                          </div>
                        </div>

                        <div className="row mt-3 ">
                          <div className="col">
                            <div className={Style['line-1']}></div>
                          </div>
                          <div className="col">
                            <h5 className={Style.or}>or</h5>
                          </div>
                          <div className="col">
                            <div className={Style['line-2']}></div>
                          </div>
                        </div>
                        
                        <div className={[['row'], ['text-center'], Style['pay-title']].join(' ')}>
                          <h5 className={Style['pay-teks']}>Pay via cash </h5>
                          <h4 className={Style['pay-teks2']}> . See how it work</h4> 
                        </div>
                    </div>
                  </div>
                </div>
                
                {/* <!-- AKHIR PAYMENT METHOD --> */}
                
                {/* <!-- INFO MOBILE ONLy --> */}
                <div className={[['col-lg-4'], Style['card-mobile']].join(' ')}>

                  <h5 className={Style.title}>Personal Info</h5>

                  <div className={[['card'], Style['card-personalinfo']].join(' ')} >
                    <div className="card-body">
                      
                      
                      <h5 className={Style['title-personalinfo']}>Full Name</h5>
                      <div className="row">
                        <div className={[['card'], Style['card-info']].join(' ')}>
                            <h5> Kevin Farid Alpharisy</h5>
                        </div>
                      </div>
                      
                      <h5 className="title-personalinfo">Email</h5>
                      <div className="row">
                        <div className={[['card'], Style['card-info']].join(' ')}>
                            <h5>kevinfaridap@gmail.com</h5>
                        </div>
                      </div>

                      <h5 className="title-personalinfo">Phone Number</h5>
                      <div className="row">
                        <div className={[['card'], Style['card-info']].join(' ')}>
                            <h5>+62   |  89667306022 </h5>  
                        
                        </div>
                      </div>
                    
                      <div className={[['row'], Style['button-fill-data']].join(' ')}>
                        <button type="button" className={[['btn'], Style['btn-fill']]}>
                          <div className={Style['btn-personal-info']}></div> 
                        {/* <img className="btn-personal-info" src="./assets/btn.png" alt="">  */}
                        Fill your data correctly</button>
                        
                      </div>
                    
                    </div>
                  </div>
                </div>
                {/* <!-- AKHIR MOBILE ONLY --> */}


              </div>
              {/* Awal Button */}
              <div className="row mt-4">
                <div className="col-4">
                  <button 
                    type="button" 
                    className={[['btn'], Style['button-prev']].join(' ')}
                    onClick={()=>history.goBack()}
                  >
                    Previous step
                  </button>
                </div>
                <div className="col-4">
                  <button 
                    type="button" 
                    className={[['btn'], Style['button-paynow']].join(' ')}
                    onClick={() => {payorder()}}
                  >
                    Pay your order
                  </button>
                </div>
              </div>
              {/* Akhir Buttin */}
            </div>
          </div>

            {/* <!-- AKHIR JUMBOTRON --></div> */}
        </div>
    )
}

export default Jumbotron
