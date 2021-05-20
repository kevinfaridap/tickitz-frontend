import React from 'react'
import Style from './jumbotron2.module.css'
import {Link} from 'react-router-dom'

function Jumbotron2() {
    return (
        <div>
              {/* <!-- AWAL JUMBOTRON2 --> */}
                <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-2']].join(' ')}>
                  <div className="container">
                    
                    <div className={['row', Style['teks-show']].join(' ')}>
                      <div className="col">
                          <h4 className={Style['title-showing']} >Upcoming Movies</h4>
                      </div>
                      <div className="col">
                          <Link to="/allmovies">
                            <h4 className={Style['view-teks']} > view all</h4>

                          </Link>
                      </div>
                    </div>

                    <div className={['row', ['mt-5'], Style['movie-desktop']].join(' ')}>
                      <div className="col">
                          <div className={Style['spiderman-movie']}></div>
                      </div>
                      <div className="col">
                          <div className={Style['lion-movie']}></div>
                      </div>
                      <div className="col">
                          <div className={Style['human-movie']}></div>
                      </div>
                      <div className="col">
                          <div className={Style['spiderman-movie']}></div>
                      </div>
    
                    </div>
                    
                    {/* <!-- MOVIE MOBILE VERSION ONLY --> */}
                    <div className={['row', ['mt-5'], Style['movie-mobile']].join(' ')}>
                      <div className="col-6">
                          <div className={Style['spiderman-movie']}></div>
                      </div>
                      <div className="col-6">
                          <div className={Style['lion-movie']}></div>
                    </div>
                    {/* <!-- Akhir movie mobile --> */}


                   </div>
                  </div>
                </div>
                {/* <!-- AKHIR JUMBOTRON2 --> */}
        </div>
    )
}

export default Jumbotron2
