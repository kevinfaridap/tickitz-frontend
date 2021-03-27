import React, {useEffect, useState} from 'react'
import Style from './jumbotron.module.css'
import Axios from 'axios'

function Jumbotron() {
  const [accountList, setAccountList] = useState([]);
  
  const [firstName, setUpdateFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(()=>{
    Axios.get('http://localhost:3001/users/update/40').then((res)=>{
        console.log(res);
        setAccountList(res.data)
    })
  }, []); 
 

  const updateAccount = (id) =>{
    Axios.put(`http://localhost:3001/users/update/${id}`, {
      email: email, 
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
   })
   setUpdateFirstName("")
  }

    return (
        <div>
          <div className={[['jumbotron'], ['jumbotron-fluid'], Style['profile-jumbo']].join(' ')}>
            <div className="container">

              <div className="row">
                <div className="col">
                  <div className={Style['card-profile']}>
                    <h6 className="mt-5 ml-5 lead">INFO</h6>
                    <div className={Style['img-profile']}></div>
                    <h5 className={Style['teks1']}>Jonas El Rodrigez</h5>
                    <h6 className={Style['teks2']} >Moviegoers </h6>

                    <div className={Style['line']}></div>

                    <h5 className={Style['teks3']} >Loyalty Point</h5>
                    <div className={Style['img-card']}></div>
                    <h5 className={Style['teks4']} >180 points become a master</h5>
                    <div className={Style['line-2']}></div>
                    <div className={Style['line-3']}></div>
                  </div>
                </div>

                <div className="col">
                  <div className={Style['card-profile2'] }>

                    <h4 className={Style['title-card']} >Account Settings</h4>
                    <div className={Style['line-4']}></div>

                    <h5 className={Style['title-detail']} >Detail Information</h5>
                    <div className={Style['line-5']}></div>

                    {accountList.map((item)=>{
                      return (
 
                        <div>
                          
                            <form>
                              <div class="form-row">
                                <div class="col">
                                  <input type="text" class="form-control" 
                                  placeholder={item.firstName} 
                                  onChange={(e)=>{ setUpdateFirstName(e.target.value)
                                  }} />
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control" 
                                  placeholder={item.lastName}
                                  onChange={(e)=>{ setLastName(e.target.value)}}
                                  />
                                </div>
                              </div>
                              <div class="form-row mt-3 mb-3">
                                <div class="col">
                                  <input type="text" class="form-control" 
                                  placeholder={item.email}
                                  onChange={(e)=>{ setEmail(e.target.value)}}
                                  />
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control" 
                                  placeholder={item.phoneNumber}
                                  onChange={(e)=>{ setPhoneNumber (e.target.value)}}
                                  />
                                </div>
                              </div>
                            </form>
                                  
                            <div className={Style['btn']}>
                              
                              <button type="button" className={Style['btn-update']} onClick={() => {updateAccount(item.id)}} > Update </button>
                             

                            </div>
                        </div>
                  

                      )
                    })}
                  </div>
                </div>
              </div>

              {/* <h1 className="display-4">Fluid jumbotron</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
            </div>
          </div>
        </div>
    )
}

export default Jumbotron  