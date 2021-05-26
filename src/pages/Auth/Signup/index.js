import React, { Component } from 'react'
import styleSingup from './signup.module.css'
import FormSign from '../../../components/FormSingup'
import {Link} from 'react-router-dom'

class Signup extends Component {
    render() {
        // let url = "https://www.google.com/";

        return (
            <div>
              <main className="row">
                {/* Awal section */}
                <section className="col-7" >
                  <div className="container">
                    <div className={styleSingup.img}></div>
                    <h2 className={styleSingup.teks}>Lets build your account</h2>
                    <p className={styleSingup.paragraph1} >To be a loyal moviegoer and access all of features, 
                    <br/> your details are required.</p>

                    <div className={`${styleSingup.row} ${styleSingup.rowCircle}`} >
                      <div className={styleSingup.circle1}> 
                        <h5>1</h5>
                       </div>
                      <h4 className={['title-fill']}>Fill your additional details</h4>
                    </div>

                    <div className={`${styleSingup.row} ${styleSingup.rowCircle2}`} >
                      <div className={styleSingup.circle2}> 
                        <h5>2</h5>
                       </div>
                      <h4>Active your account</h4>
                      <div className={styleSingup.line}> </div>
                    </div>

                    <div className={`${styleSingup.row} ${styleSingup.rowCircle2}`} >
                      <div className={styleSingup.circle2}> 
                        <h5>3</h5>
                       </div>
                      <h4>Done</h4>
                      <div className={styleSingup.line}> </div>
                    </div>


                  </div>
                </section>
                {/* Akhir section */}

              {/* Awal aside */}
              <aside className="col ml-2">
               <div className={`${styleSingup.container} ${styleSingup['contain-signup']}`}>
                  <div className={styleSingup['img-mobile']}></div>
                    <h1 className={styleSingup['fill-title']}>Fill your additional detail</h1>
                                      
                    <FormSign />

                    <div class={styleSingup['form-check-signup']}>
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                      <label class="form-check-label" for="exampleCheck1">I agree to tems & condition</label>
                    </div>
                    <h2 className={styleSingup['signnow-teks']}>
                      Already have an account ?
                      <Link to="/signin"> Signin Now</Link> 
                    </h2>

                    <h2 className={styleSingup['forget-teks']}>
                      Forgot your password? 
                      <Link to="#"> Reset Now</Link> 
                    </h2>
                                    
                    <p className={styleSingup['or-teks']}>or</p>
                    <div className={styleSingup.or}></div> 
                    <div className={styleSingup.or2}></div>

                    <div className="row justify-content-center">
                      <div className="col-lg-5 col-5">
                        <div className={styleSingup.box}> 
                          <Link to="#"> 
                              <div className={styleSingup.google}> </div>
                          </Link>
                          <Link className={styleSingup.googleTeks} to="#">Google </Link> 
                        </div>
                      </div>
                      <div className="col-lg-5 col-5">
                        <div className={styleSingup.box}> 
                          <Link to="#">
                              <div className={styleSingup.fb}> </div>
                          </Link>
                          <Link className={styleSingup.fbTeks} to="#">Facebook</Link>
                        </div>
                     </div>
                    </div>
              </div>
              </aside>
              {/* Akhir aside */}
          </main>
          </div>
        )
    }
}

export default Signup
