import React, { useState } from 'react'
import Styleformsign from './formsign.module.css'
import Input from './../Input'
import Axios from 'axios'
import {Link} from 'react-router-dom'

function FormSign() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitSignup = () =>{
    Axios.post("http://localhost:3001/api/insert", {
      email: email, 
      password: password
   })
   .then(() => {
     alert(`Email anda : ${email} password anda : ${password}`)
   })
  }

  

  return (
        <div>
          <form >
            <div className={Styleformsign['form-group']}>

                <Input 
                  label= "Email"
                  type="email"
                  name="email"
                  placeholder="Write email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
            </div>
            <div className={Styleformsign["form-group"]}>
  
              <Input 
                label= "Password"
                type= "password"
                name= "password"
                placeholder= "Write password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>
            {/* <button type="submit" className={Styleformsign.btn} onClick={submitSignup} >Sign Up</button> */}
            <Link to="/signin">
            <button onClick={submitSignup} className={Styleformsign.btn}>Sign Up</button>
            </Link>
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