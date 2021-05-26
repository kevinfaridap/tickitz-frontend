import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import Style from './orderhistory.module.css'
import Axios from 'axios'
import swal from 'sweetalert'
const jwt = require('jsonwebtoken')

function Jumbotron() {
  const [accountList, setAccountList] = useState([]);
  const [ticketHistory, setTicketHistory] = useState([])
  const isAuthenticated = localStorage.getItem('token')
  let decode = jwt.decode(isAuthenticated)
  const idUser = decode.idUser;
  const email =decode.email;
  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_API}/users/${email}`)
    .then((res)=>{
        setAccountList(res.data.data)
    })

    Axios.get(`${process.env.REACT_APP_API}/ticketresult/tickethistory/${idUser}`)
    .then((res)=>{
      const dataTicketHistory = res.data.data
      if(dataTicketHistory== null){
        swal(`You Haven't Bought Ticket Yet!`)
      } else{
        setTicketHistory(dataTicketHistory)
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []); 

    return (
        <div>
          <div className={[['jumbotron'], ['jumbotron-fluid'], Style['profile-jumbo']].join(' ')}>
            <div className="container">
              <div>
              <div className="row">
            {accountList!== undefined  ? accountList.map((item)=>{
            return (
              <>
                <div className="col-lg">
                  <div className={Style['card-profile']}>
                    <h6 className="mt-5 ml-5 lead">INFO</h6>
                    {/* <div className={Style['img-profile']}></div> */}
                    <img className={Style['img-profile']} src={item.image} alt="" />
                    <h5 className={Style['teks1']}>{item.firstName} {item.lastName}</h5>
                    {/* {/* <h5 className={Style['teks1']}>{item.firstName + ' ' + item.lastName }</h5> */} 
                    <h6 className={Style['teks2']} >Premium Member </h6>

                    <div className={Style['line']}></div>

                    <h5 className={Style['teks3']} >Loyalty Point</h5>
                    <div className={Style['img-card']}> </div>
                    <p className={Style['premium-teks']}>
                      <span>Premium Member </span> <br/>
                      320 point
                    </p>
                    <h5 className={Style['teks4']} >180 points become a master</h5>
                    <div className={Style['line-2']}></div>
                    <div className={Style['line-3']}></div>
                  </div>
                </div>
                </>
              )   
              }) :null }

                <div className="col-lg">
                  <div className={Style['card-profile2'] }>
                    <Link to="/profile">
                      <h5 className={Style['title-card']} >Account Settings</h5>
                    </Link>
                      <h5 className={Style['title-orderhistory']} >Order History</h5>
                    <div className={Style['line-4']}></div>
                    {ticketHistory!== undefined  ? ticketHistory.map((item)=>{
                    return (  
                    <>
                    <div className={Style['img-ticket-header']}></div>
                      <div className={[["row"], Style["ticket-history-box"]].join(' ')}>
                        <div className="col">
                          <p className={Style["date"]}>{item.date}</p>
                          <p className={Style["movie-title"]}>{item.movieTittle}</p>
                        </div>
                        <div className="col">
                          <p className={Style["time"]}>{item.time}</p>
                          <p className={Style["seat-value"]}>{item.seatvalues} Ticket</p>
                          <p className={Style["price"]}>IDR {item.price}</p>
                          {/* <img src={item.image} alt="" /> */}
                        </div>
                      </div>
                    {/* {JSON.stringify(ticketHistory)} */}
                    </>
                    )
                    }) :null }
                  </div>
                </div>
              </div>

                </div>
            </div>
          </div>
        </div>
    )
}

export default Jumbotron  