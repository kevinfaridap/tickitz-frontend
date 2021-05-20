import React from 'react'
import Style from './jumbotron3.module.css'
import CardMovie from './../../Card/CardMovies'

function Jumbotron3() {
    return (
        <div >
           {/* <!-- AWAL JUMBOTRON3 --> */}
          <div className={[Style['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-3']].join(' ')}>
            <div className="container">

              <div className={[['row'], Style['teks-upcoming']].join(' ')}>
                <div className="col">
                  <h4 className={Style['title-upcoming']} >Now Showing Movies</h4>
                </div>
                <div className="col">
                  <h4 className={Style['view-upcoming']} > view all</h4>
                </div>
              </div>

              {/* <!-- btn month Mobile Version --> */}
              <div className={[['row'], Style['btn-mobile-set'], ['mt-5']].join(' ')}>
                <div className="col-4">
                  <button type="button" className={[['btn'], Style['btn-sept-mobile']].join(' ')}>September</button>
                </div>
                <div className="col-4">
                  <button type="button" className={[['btn'], Style['btn-oct-mobile']].join(' ')}>October</button>
                </div>
              </div>
              {/* <!-- Akhir btn month --> */}


              <div className={[['row'], ['mt-5'], Style['btn-dekstop']].join(' ')}>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-sept']].join(' ')}>September</button>
                </div>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-oct']].join(' ')}>October</button>
                </div>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>November</button>
                </div>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>Desember</button>
                </div>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>January</button>
                </div>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>February</button>
                </div>
                <div className="col">
                  <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>March</button>
                </div>
              
              
                
                {/* <div className={[['row'], ['mt-5'], Style['upcoming-movies']].join(' ')}>

                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className={Style.upcoming1}></div>
                        <h5>Black Widow</h5>
                        <p>Action, Adventure, Sci-Fi</p>
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                      </div>
                    </div>
                  </div>
                  

                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className={Style.upcoming2}></div>
                        <h5>The Witches</h5>
                        <p>Action, Adventure, Family</p>
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className={Style.upcoming3}></div>
                        <h5>Tenet</h5>
                        <p>Action, Sci-Fi</p>
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                      </div>
                    </div>
                  </div>


                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className={Style.upcoming1}></div>
                        <h5>Black Widow</h5>
                        <p>Action, Adventure, Sci-Fi</p>
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                      </div>
                    </div>
                  </div>
                
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className={Style.upcoming2}></div>
                        <h5>The Witches</h5>
                        <p>Action, Adventure, Family</p>
                        <button type="button" className={[['btn'], Style['btn-upcoming']].join(' ')}>Details</button>
                      </div>
                    </div>
                  </div>


                </div> */}

                {/* <!-- Awal Card-mobile-version --> */}
                <div className={[['row'], Style['upcoming-movies-mobile']].join(' ')}>
                  
                  <div className="col-6">
                    <div className={[['card'], Style['card-upcoming']].join(' ')}>
                      <div className={Style['mobile-upcoming']}></div>
                      <h5>Black Widow</h5>
                      <p>Action, Adventure,
                        Sci-Fi</p>
                      <button type="button" className={[['btn'], Style['btn-upcoming-mobile']].join(' ')}>
                        <h5 className={Style['details-teks']}> Details </h5> 
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={[['card'], Style['card-upcoming']].join(' ')}>
                      <div className={Style['mobile-upcoming2']}></div>
                      <h5>The Witches</h5>
                      <p>Adventure, Comedy,
                        Family</p>
                      <button type="button" className={[['btn'], Style['btn-upcoming-mobile']].join(' ')}>
                        <h5 className={Style['details-teks']}> Details </h5> 
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Akhir card-mobile-version --> */}



                <div className={[['row-12'], ['mt-5'],  ['justify-content-center'], Style['joinnow-card']].join(' ')}>
                  <div className={[['card'], Style['join-now']].join(' ')}>

                    <div className={[['row'], Style['teks-join']].join(' ')}>
                      <div className={["col-12"]}>
                        <h3 className={Style.teks1}>Be the vanguard of the </h3>
                      </div>
                      <div className={["col-12"]}>
                        <h2 className={Style.teks2}>Moviegoers</h2>
                      </div>
                    </div>

                    <div className={[['row'], Style['form-join']].join(' ')}>
                      
                      <div className="col ">
                        <form className={Style['form-inline']}>
                          <label className="sr-only" for="inlineFormInputName2">Name</label>
                          <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Type your name" />
                        
                            
                          <button type="submit" className={[['btn'], ['btn-primary'], ['mb-2']].join(' ')}>Join now</button>
                        </form>
                      </div>

                    </div>

                    <div className={[['row'], Style['last-paragraph']].join(' ')}>
                      <div className="col">
                        <p>By joining you as a Tickitz member,
                          we will always send you the latest updates via email .</p>
                      </div>
                    </div>
                    
                  </div>
                </div>


                {/* <!-- Awal join-now mobile version --> */}
                <div className={[['row'], Style['join-now-mobile']].join(' ')}>
                  <div className={[['card'], Style['join-card']].join(' ')}>

                    <div className="row">
                      <div className="col">
                        <h5>Be the vanguard of the Moviegoers</h5>
                        <h4>Moviegoers</h4>

                        <form>
                          <div className={[['form-group'], Style['form-join']].join(' ')}>
                            
                            <input type="email" className={Style['form-control']} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your email" />
                            
                            <button type="submit" className={[['btn'], Style['btn-join-mobile']].join(' ')}>Join now</button>
                            <p>By joining you as a Tickitz member,
                              we will always send you the
                              latest updates via email .</p>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* <!-- Akhir mobile version --> */}


            </div>
          </div>
          </div>
          {/* <!-- AKHIR JUMBOTRON3 --></div>     */}
        </div>
    )
}

export default Jumbotron3
