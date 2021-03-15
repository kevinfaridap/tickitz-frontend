import React, { Component } from 'react'
import style from './formsignin.module.css'
import {Link} from 'react-router-dom'

class FormSignin extends Component {
    render() {
        return (
          <div>
            <form >
              <div className={style['form-group']}>
                <h4>Email</h4>
                <input type="email" className={style['form-control']} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" />
              </div>
              <div className={style["form-group"]}>
                <h4>Password</h4>
                <input type="password" className={style['form-control']} id="exampleInputPassword1" placeholder="Write your password" />
              </div>
              <Link to="/">
              <button type="submit" className={style.btn} >Sign in</button>
              </Link>
            </form>
           

          </div>
        )
    }
}

export default FormSignin
