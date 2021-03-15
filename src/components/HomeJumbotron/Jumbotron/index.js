import React from 'react'
import Style from './jumbotron.module.css'

function Jumbotron() {
    return (
        <div>
          <div className={[Style['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-1']].join(' ')}>
              <div className="container">
                <div className={[['row'], Style['content-full']].join(' ')}>
                  <div className={[["col-lg-6"], [Style.teks]].join(' ')}>
                      <p className={Style.lead}>Nearest Cinema, Newest Movie,</p>
                      <h1 className={Style['display-4']}> <span> Find out now! </span> </h1>
                    </div>
                    <div className={[['col-lg-2'], ['col-2'], Style['spiderman-img']].join(' ')}>
                      <div className={Style.spiderman1}></div>
                      <div className={Style['spiderman1-cover']}></div>
                    </div>

                    <div className="col-lg-2 col-2 lion-img">
                      <div className={Style.lion}></div>
                      <div className={['lion-cover']}></div>
                    </div>

                    <div className="col-lg-2 col-2 human-img">
                      <div className={Style.human}></div>
                      <div className={['human-cover']}></div>
                    </div>

                  </div>
              </div>
            </div>
        </div>
    )
}

export default Jumbotron
