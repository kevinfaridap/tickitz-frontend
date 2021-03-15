import React from 'react'
import Style from './jumbotron.module.css'

function Jumbotron() {
    return (
        <div>
            {/* <!-- JUMBOTRON --> */}
            <div class={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-1']].join(' ')}>
              <div class="container">
                {/* <!-- AWAL Payment INFO --> */}
                <div class={[['row'], Style['tittle']].join(' ')}>
                  <h3>Payment Info</h3>
                  <h4 class={Style['order-teks']}>Personal Info</h4>
                </div>

                <div class={[['row'], Style['paymentinfo']].join(' ')}>
                  <div class="col-md-8">
                    <div class={[['card'], Style['card1']].join(' ')} >
                      <div class="card-body">

                        <div class={[['row'], Style['info-1']].join(' ')}>    
                          <div class="col-4">
                            <h5 class={Style.info1}>Date & time</h5>
                          </div>
                          <div class="col">
                            <h5 class={Style.info2} >Tuesday, 07 July 2020 at 02:00pm</h5>
                          </div>
                        </div>
                        <div class={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div class={[['row'], Style['info-1']].join(' ')}>    
                          <div class="col">
                            <h5 class={Style.info1}>Movie title</h5>
                          </div>
                          <div class="col">
                            <h5 class={Style.info2} >Spider-Man: Homecoming</h5>
                          </div>
                        </div>
                        <div class={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div class={[['row'], Style['info-1']].join(' ')}>    
                          <div class="col">
                            <h5 class={Style.info1}>Cinema name</h5>
                          </div>
                          <div class="col">
                            <h5 class={Style.info2} >CineOne21 Cinema</h5>
                          </div>
                        </div>
                        <div class={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div class={[['row'], Style['info-1']].join(' ')}>    
                          <div class="col">
                            <h5 class={Style.info1}>Number of tickets</h5>
                          </div>
                          <div class="col">
                            <h5 class={Style.info2} >3 pieces</h5>
                          </div>
                        </div>
                        <div class={[['row'], Style['line-payment']].join(' ')}>
                          <div className={Style['img-line-payment']}></div>
                          {/* <img src="./assets/line-payment.png" alt=""> */}
                        </div>

                        <div class={[['row'], Style['totalpayment']].join(' ')}>
                          <div class="col">
                            <h4>Total Payment</h4>
                          </div>
                          <div class="col">
                            <h3>$30.00</h3>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>

                  <div class={[['col-4'], Style['card-del']].join(' ')}>
                    <div class={[['card'], Style['card-personalinfo']].join(' ')} >
                      <div class="card-body">
                        
                        
                        <h5 class={Style['title-personalinfo']}>Full Name</h5>
                        <div class="row">
                          <div class={[['card'], Style['card-info']].join(' ')}>
                              <h5> Kevin Farid Alpharisy</h5>
                          </div>
                        </div>
                        
                        <h5 class={Style['title-personalinfo']}>Email</h5>
                        <div class="row">
                          <div class={[['card'], Style['card-info']].join(' ')}>
                              <h5>kevinfaridap@gmail.com</h5>
                          </div>
                        </div>

                        <h5 class={Style['title-personalinfo']}>Phone Number</h5>
                        <div class="row">
                          <div class={[['card'], Style['card-info']].join(' ')}>
                              <h5>+62   |  89667306022 </h5>  
                          
                          </div>
                        </div>
                      
                        <div class={[['row'], Style['button-fill-data']].join(' ')}>
                          <button type="button" class={[['btn'], Style['btn-fill']].join(' ')}>
                          <div className={Style['btn-personal-info']}></div> 
                          {/* <img class="btn-personal-info" src="./assets/btn.png" alt="">  */}
                          Fill your data correctly</button>
                          
                        </div>
            
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- AKHIR Payment INFO --> */}

                {/* <!-- METHOD MOBILE --> */}
                <div class="col">
                  <h4 class={Style['title-paymethod']} >Payment Method</h4>
                </div>
                {/* <!-- AKHIR METHOD MOBILE --> */}

                {/* <!-- AWAL Payment Method --> */}
                <div class={[['row'], Style['tittle2']].join(' ')}>
                  <h3>Choose Payment Method</h3>
                  
                </div>

                <div class="row">
                  <div class="col-md-8">
                    <div class={[['card'], Style['card2']].join(' ')} >
                      <div class="card-body">

                        <div class="row ">    
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['google-payment']}></div>
                                {/* <img class="google-payment" src="./assets/logos_google-pay.png" alt=""> */}
                            </div>
                          </div>
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                              <div className={Style['visa-payment']}></div>
                                {/* <img class="visa-payment" src="./assets/visa.png" alt=""> */}
                            </div>
                          </div>
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['gopay-payment']}></div>
                                {/* <img class="gopay-payment" src="./assets/gopay.png" alt=""> */}
                            </div>
                          </div>
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['paypal-payment']}></div>
                                {/* <img class="paypal-payment" src="./assets/logos_paypal.png" alt=""> */}
                            </div>
                          </div>
                        </div>

                        <div class="row mt-4 ">    
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['dana-payment']}></div>
                                {/* <img class="dana-payment" src="./assets/dana.png" alt=""> */}
                            </div>
                          </div>
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['bca-payment']}></div>
                                {/* <img class="bca-payment" src="./assets/bca.png" alt=""> */}
                            </div>
                          </div>
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['bri-payment']}></div>
                                {/* <img class="bri-payment" src="./assets/bri.png" alt=""> */}
                            </div>
                          </div>
                          <div class="col-3">
                            <div class={[['card'], Style['payment']].join(' ')}>
                                <div className={Style['ovo-payment']}></div>
                                {/* <img class="ovo-payment" src="./assets/ovo.png" alt=""> */}
                            </div>
                          </div>
                        </div>


                        <div class="row mt-3 ">
                          <div class="col">
                            <div className={Style['line-1']}></div>
                            {/* <img class="line-1" src="./assets/line-pay.png" alt=""> */}
                          </div>
                          <div class="col">
                            <h5 class={Style.or}>or</h5>
                          </div>
                          <div class="col">
                            <div className={Style['line-2']}></div>
                            {/* <img class="line-2" src="./assets/line-pay.png" alt=""> */}
                          </div>
                        </div>
                        
                        <div class={[['row'], ['text-center'], Style['pay-title']].join(' ')}>
                          <h5 class={Style['pay-teks']}>Pay via cash <h4 class={Style['pay-teks2']}> . See how it work</h4></h5> 
                        </div>
                    </div>
                  </div>
                </div>
                {/* <!-- AKHIR PAYMENT METHOD --> */}
                
                {/* <!-- INFO MOBILE ONLy --> */}
                <div class={[['col-lg-4'], Style['card-mobile']].join(' ')}>

                  <h5 class={Style.title}>Personal Info</h5>

                  <div class={[['card'], Style['card-personalinfo']].join(' ')} >
                    <div class="card-body">
                      
                      
                      <h5 class={Style['title-personalinfo']}>Full Name</h5>
                      <div class="row">
                        <div class={[['card'], Style['card-info']].join(' ')}>
                            <h5> Kevin Farid Alpharisy</h5>
                        </div>
                      </div>
                      
                      <h5 class="title-personalinfo">Email</h5>
                      <div class="row">
                        <div class={[['card'], Style['card-info']].join(' ')}>
                            <h5>kevinfaridap@gmail.com</h5>
                        </div>
                      </div>

                      <h5 class="title-personalinfo">Phone Number</h5>
                      <div class="row">
                        <div class={[['card'], Style['card-info']].join(' ')}>
                            <h5>+62   |  89667306022 </h5>  
                        
                        </div>
                      </div>
                    
                      <div class={[['row'], Style['button-fill-data']].join(' ')}>
                        <button type="button" class={[['btn'], Style['btn-fill']]}>
                          <div className={Style['btn-personal-info']}></div> 
                        {/* <img class="btn-personal-info" src="./assets/btn.png" alt="">  */}
                        Fill your data correctly</button>
                        
                      </div>
                    
                    </div>
                  </div>
                </div>
                {/* <!-- AKHIR MOBILE ONLY --> */}


              </div>
            </div>
          </div>

            {/* <!-- AKHIR JUMBOTRON --></div> */}
        </div>
    )
}

export default Jumbotron
