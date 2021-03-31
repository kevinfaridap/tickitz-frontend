import React, { Component } from 'react'
import style from './signin.module.css'
// import FormSign from '../../../components/FormSingup'
import FormSignin from './../../../components/FormSignin'

function Signin () {
// class Signin extends Component {
  // File lama
  // constructor(){
  //   super()
  //   this.state ={
  //     email: '',
  //     password: ''
  //   }
  // }


  // render() {
    let url = "https://www.google.com/";
      return (
        <div>
          <main className="row">
            {/* Awal section */}
            <section className="col-7" >
              <div className={style.img}></div>
              <h2>wait, watch, wow !</h2>
            </section>
            {/* Akhir section */}

            {/* Awal aside */}
            <aside className="col ml-2">
              <div className="container">
                <div className={style['img-mobile']}></div>
                <h1>Sign In</h1>
                <p className={style.teks1} >Sign in with your data that you entered during your registration</p>
                
                {/* <FormSign /> */}
                <FormSignin />
                <h2 className={style['forget-teks']}>Forgot your password? <a href={url}>Reset Now</a> </h2>
                                
                <p className={style['or-teks']}>or</p>
                <div className={style.or}></div> 
                <div className={style.or2}></div>

                <div className="row justify-content-center">
                  <div className="col-lg-5 col-5">
                    <div className={style.box}> 
                      <a href={url}> 
                        <div className={style.google}> </div>
                      </a>
                      <a className={style.googleTeks} href={url}>Google</a> 
                    </div>
                  </div>
                  <div className="col-lg-5 col-5">
                    <div className={style.box}> 
                      <a href={url}>
                        <div className={style.fb}> </div>
                      </a>
                      <a className={style.fbTeks} href={url}>Facebook</a>
                    </div>
                  </div>
                </div>

              </div>
            </aside>
            {/* Akhir aside */}
          </main>
        </div>
      )
    // }
}

export default Signin
