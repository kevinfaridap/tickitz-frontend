import React from 'react'
import Style from './jumbotron.module.css'

function Jumbotron3update() {
  return (
    <div >
      {/* <!-- AWAL JUMBOTRON3 --> */}
      <div className={[Style['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-3']].join(' ')}>
        <div className="container">


          <div className={[['row-12'], ['mt-5'], ['justify-content-center'], Style['joinnow-card']].join(' ')}>
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
    //   {/* <!-- AKHIR JUMBOTRON3 --></div>     */}
    // </div>
  )
}

export default Jumbotron3update










