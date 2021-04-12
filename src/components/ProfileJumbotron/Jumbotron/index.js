import React, {useEffect, useState} from 'react'
import Style from './jumbotron.module.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const jwt = require('jsonwebtoken')

function Jumbotron() {
  const [accountList, setAccountList] = useState([]);
  
  const [firstName, setUpdateFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role , setRole] = useState("");

  const isAuthenticated = localStorage.getItem('token')
  let decode = jwt.decode(isAuthenticated)
  const idUser = decode.idUser;
  
  useEffect(()=>{
    // console.log(decode.idUser);
    Axios.get(`http://localhost:8000/v1/users/${idUser}`)
    .then((res)=>{
        // console.log(res);
        setAccountList(res.data.data)
    })

    
  }, []); 
 
  // const updateAccount = (id) =>{
  //   Axios.put(`http://localhost:8000/v1/users/${id}`, {
  const updateAccount = () =>{
    Axios.put(`http://localhost:8000/v1/users/${idUser}`, {
      firstName: firstName,
      lastName: lastName,
      email: email, 
      password: password,
      phoneNumber: phoneNumber,
      role: role
   })
   swal('succes')
  }

    return (
        <div>
          <div className={[['jumbotron'], ['jumbotron-fluid'], Style['profile-jumbo']].join(' ')}>
            <div className="container">
            {accountList.map((item)=>{
            return (
              <div>
              <div className="row">
                <div className="col-lg">
                  <div className={Style['card-profile']}>
                    <h6 className="mt-5 ml-5 lead">INFO</h6>
                    <div className={Style['img-profile']}></div>
                    <h5 className={Style['teks1']}>{item.firstName + ' ' + item.lastName }</h5>
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

                <div className="col-lg">
                  <div className={Style['card-profile2'] }>
                    <h5 className={Style['title-card']} >Account Settings</h5>
                    <Link to="/orderhistory">
                      <h5 className={Style['title-orderhistory']} >Order History</h5>
                    </Link>
                    <div className={Style['line-4']}></div>
                    <h5 className={Style['title-detail']} >Detail Information</h5>
                    <div className={Style['line-5']}></div>

                    <form>
                      <div className="form-row mt-5">
                        <div className="col">
                          <h5 className={Style['text-form']} >First Name</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder={item.firstName} 
                          onChange={(e)=>{ setUpdateFirstName(e.target.value)
                          }} />
                        </div>
                        <div className="col">
                          <h5 className={Style['text-form']}>Last Name</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder={item.lastName}
                          onChange={(e)=>{ setLastName(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="form-row mt-3 mb-3">
                        <div className="col">
                          <h5 className={Style['text-form']}>Your Email</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder={item.email}
                          onChange={(e)=>{ setEmail(e.target.value)}}
                          />
                        </div>
                        <div className="col">
                          <h5 className={Style['text-form-phone']}>Phone Number</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder={item.phoneNumber}
                          onChange={(e)=>{ setPhoneNumber (e.target.value)}}
                          />
                        </div>
                      </div>
                    </form>
                    
                    <h5 className={Style['title-detail']} >Account and Privacy</h5>
                    <div className={Style['line-5']}></div>
                    
                    <form>
                      <div className="form-row mt-5">
                        <div className="col">
                          <h5 className={Style['text-password']} >New Password</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder='Write Your Password' 
                          onChange={(e)=>{ setPassword(e.target.value)
                          }} />
                        </div>
                        <div className="col">
                          <h5 className={Style['text-password2']}>Confirm Password</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder='Confirm Your password'
                          />
                        </div>
                      </div>
                    </form>


                    {/* <div className={Style['btn']}> */}
                      
                      <button type="button" 
                        className={Style['btn-update']} 
                        onClick={() => {updateAccount(item.id)}} > 
                        Update Changes 
                      </button>
                      

                    {/* </div> */}
                       
                  </div>
                </div>
              </div>

              {/* <h1   ="display-4">Fluid jumbotron</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}

                </div>
                )
              })}
            </div>
          </div>
        </div>
    )
}

export default Jumbotron  