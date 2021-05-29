import React, { useState } from 'react'
import Styleformsign from './formsign.module.css'
import Input from './../Input'
import Axios from 'axios'

import {register} from '../../configs/actions/user'
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'

function FormSign() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [formUser, setFormUser] = useState({
    email: '',
    password: ''
  })
  
  const [passwordErr, setPasswordErr] = useState({})
  const [emailErr, setEmailErr] = useState({})

  const handleChange = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name] : e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const isValid = formValidation();
    if(formUser.email===''){
      swal("Email Cannot be Empty!")
    } else if(formUser.password===''){
      swal("Password Cannot be Empty!")
    } else{
      if(isValid){
        Axios.post(`${process.env.REACT_APP_API}/users/register`, formUser)
        .then((res)=>{
          console.log(res.data.data, 'checkkk');
          if(res.data.data==null){
            swal(res.data.error.message)
          } 
            // setFormUser({
            // firstName: '',
            // lastName: '',
            // email: '',
            // phoneNumber: '',
            //   role: '',
            // })
            swal(`Registered. Check Your Email to Continue`)
            history.push('/signin')
          
          
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    }

  }
  
  const formValidation = () =>{
    const passwordErr = {};
    const emailErr = {};
    let isValid = true;

    if(formUser.password.trim().length < 8){
      passwordErr.passwordShort = "Password is too short. Min 8 character";
      isValid = false;
    }

    if(formUser.email.trim().length < 1){
      emailErr.emailEmpty = "Email cannot be empty!"
    }

    setPasswordErr(passwordErr);
    setEmailErr(emailErr)
    return isValid;
  }

  return (
        <div>
          <form >
            <p className={Styleformsign["sing-up-title"]}>Sign Up</p>
            <div className={Styleformsign['form-group']}>

                <Input 
                  label= "Email"
                  type="email"
                  name="email"
                  placeholder="Write email"
                  value={formUser.email}
                  onChange={(e) => handleChange(e)}
                />
                {Object.keys(emailErr).map((key)=>{
                  return <div className={Styleformsign['error-validation']} style={{color: "red"}}>{emailErr[key]}</div>
                })}
              
            </div>
            <div className={Styleformsign["form-group"]}>
  
              <Input 
                label= "Password"
                type= "password"
                name= "password"
                placeholder= "Write password"
                value={formUser.password}
                onChange={(e) => handleChange(e)}
              />
              {Object.keys(passwordErr).map((key)=>{
                  return <div className={Styleformsign['error-validation']} style={{color: "red"}}>{passwordErr[key]}</div>
                })}

            </div>
            {/* <button type="submit" className={Styleformsign.btn} onClick={submitSignup} >Sign Up</button> */}
            {/* <Link to="/signin"> */}
            <button onClick={handleRegister} className={Styleformsign['btn-signup']}>Sign Up</button>
            {/* </Link> */}
          </form>
        </div>

    
  )
}

export default FormSign


// import React, { Component } from 'react'
// import Styleformsign from './formsign.module.css'
// import Input from './../Input'

// class FormSign extends Component {
//     render() {
//         return (
//           <div>
//             <form >
//               <div className={Styleformsign['form-group']}>
//                 {/* <h4>Email</h4> */}
//                 <Input 
//                   title= "Email"
//                   type="email"
//                   name="ticketMovie"
//                   placeholder="Write email"
//                   value=""
//                 />
//                 {/* <input type="email" className={Styleformsign['form-control']} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" /> */}
//               </div>
//               <div className={Styleformsign["form-group"]}>
//                 {/* <h4>Password</h4>
//                 <input type="password" className={Styleformsign['form-control']} id="exampleInputPassword1" placeholder="Write your password" />
//               </div> */}
//               <Input 
//                 title= "Password"
//                 type= "password"
//                 name= "ticketCategory"
//                 placeholder= "Write password"
//               />

//               </div>
              
//               <button type="submit" className={Styleformsign.btn} >Sign Up</button>
//             </form>
           

//           </div>
//         )
//     }
// }

// export default FormSign