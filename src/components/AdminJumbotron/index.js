import React from 'react'
import Style from './admin.module.css'

function AdminJumbotron() {
    return (
      <div>
        <div className={[['jumbotron'], ['jumbotron-fluid'], Style['profile-jumbo']].join(' ')}>
            <div className="container">
            {/* {accountList.map((item)=>{
            return ( */}
              <div>
              <div className="row">

              <div className="col-lg">
                  <h3 className={Style['tittle-movie-desc']} >Movie Description</h3>
                  <div className={Style['card-profile2'] }>

                    <div className="row">
                      <div className="col">
                        <img className={Style['movie-poster']} src="http://3.bp.blogspot.com/-LtV0B4lXT5w/WIib0ogS2bI/AAAAAAAACIc/s89hMiqnHm4Ynxx4N3QLy17mZ8lB33UVACK4B/s1600/Snowden%2Bposter%2B2.jpg" alt=""/>
                      </div>
                      <div className="col">

                      </div>
                    </div>

                    <form>
                      <div className="form-row mt-5">
                        <div className="col">
                          <h5 className={Style['text-form']} >First Name</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder="kosong" 
                          
                          />
                        </div>
                        <div className="col">
                          <h5 className={Style['text-form']}>Last Name</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder="text here"
                          
                          />
                        </div>
                      </div>
                      <div className="form-row mt-3 mb-3">
                        <div className="col">
                          <h5 className={Style['text-form']}>Your Email</h5>
                          <input type="text" className={Style['form-control']} 
                          placeholder="text here"
                         
                          />
                        </div>
                        <div className="col">
                          <h5 className={Style['text-form-phone']}>Phone Number</h5>
                          <input type="text" class={Style['form-control']} 
                          placeholder="Text here"
                          
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
                         
                          />
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
                      
                      <button type="button" className={Style['btn-update']} > 
                        Update Changes 
                      </button>
                      

                    {/* </div> */}
                       
                  </div>
                </div>




                <div className="col-lg">
                <h3 className={Style['tittle-movie-desc']} >Premiere Location</h3>
                  <div className={Style['card-profile']}>
                    <h6 className="mt-5 ml-5 lead">INFO</h6>
                    <div className={Style['img-profile']}></div>
                    <h5 className={Style['teks1']}>Text hereeeee</h5>
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

                
              </div>

          
                </div>
                {/* )
              })} */}
            </div>
          </div>
      </div>
    )
}

export default AdminJumbotron
