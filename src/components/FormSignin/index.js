import React, { useState } from 'react'
import style from './formsignin.module.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../configs/actions/user'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'

function FormSignin () {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {loading} = useSelector(state=>state.user)
  const history = useHistory()
  
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    dispatch(login(data))
    .then((res)=>{
      // console.log(res.data);
      const dataLogin = res.data
      // console.log(dataLogin, 'isidataloginnyaaaaaaa');
      if(dataLogin == null){
        swal('Email and Password are incorect')
      } else  {
        swal(`Welcome ${dataLogin.firstName}`)
        history.push('/')
      }
    })
    .catch((err)=>{
      swal(' Failed Login !')
    })
  }
    
    return (
      <div>
        <form >
          <div className={style['form-group']}>
            <h4>Email</h4>
            <input type="email" name='email' value={email} className={style['form-control']} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={style["form-group"]}>
            <h4>Password</h4>
            <input type="password" name='password' value={password} className={style['form-control']} id="exampleInputPassword1" placeholder="Write your password" onChange={(e) => setPassword(e.target.value)} />
          </div>
        
          <button type="submit" className={style.btn} onClick={handleLogin} >{!loading ? 'Sign in' : 'Loading...'}</button>
         
        </form>
        

      </div>
    )
    
}

export default FormSignin











// File lama
// class FormSignin extends Component {
//   render() {
//       return (
//         <div>
//           <form >
//             <div className={style['form-group']}>
//               <h4>Email</h4>
//               <input type="email" className={style['form-control']} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" />
//             </div>
//             <div className={style["form-group"]}>
//               <h4>Password</h4>
//               <input type="password" className={style['form-control']} id="exampleInputPassword1" placeholder="Write your password" />
//             </div>
//             <Link to="/">
//             <button type="submit" className={style.btn} >Sign in</button>
//             </Link>
//           </form>
         

//         </div>
//       )
//   }
// }

// export default FormSignin
