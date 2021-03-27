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
  Axios.get('http://localhost:3001/users/get').then((res)=>{
      console.log(res);
      setAccountList(res.data)
  })
}, []); 

const deleteAccount = (id) =>{
  Axios.delete(`http://localhost:3001/users/delete/${id}`)
}

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
         <div class="jumbotron jumbotron-fluid">
          <div class="container">
        {accountList.map((item)=>{
          return (
            <div className={Style['rectangle']} >
            <div class="card">
              <div class="card-header">
                User Id : {item.id}
              </div>
              <div class="card-body">
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
                  <button type="button" className={Style['btn-delete']} onClick={() => {deleteAccount(item.id)}} > Delete </button>

                </div>
                {/* <a href="#" class="btn btn-primary"></a>
                <a href="#" class="btn btn-primary"></a> */}
              </div>
            </div>
      
            </div>
          )
        })}

            <h1 class="display-4">UPDATE</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>   
        </div>
    )
}

export default Jumbotron
