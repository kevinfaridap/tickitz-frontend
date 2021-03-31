import React from 'react'
import { Link } from 'react-router-dom'
import Style from './orderhistory.module.css'

function Jumbotron() {

    return (
        <div>
          <div className={[['jumbotron'], ['jumbotron-fluid'], Style['profile-jumbo']].join(' ')}>
            <div className="container">
            {/* {/* {accountList.map((item)=>{ */}
            {/* return ( */} 
              <div>
              <div className="row">
                <div className="col-lg">
                  <div className={Style['card-profile']}>
                    <h6 className="mt-5 ml-5 lead">INFO</h6>
                    <div className={Style['img-profile']}></div>
                    <h5 className={Style['teks1']}>Kevin Farid</h5>
                    {/* {/* <h5 className={Style['teks1']}>{item.firstName + ' ' + item.lastName }</h5> */} 
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

                <div className="col-lg">
                  <div className={Style['card-profile2'] }>
                    <Link to="/profile">
                      <h5 className={Style['title-card']} >Account Settings</h5>
                    </Link>
                      <h5 className={Style['title-orderhistory']} >Order History</h5>
                    <div className={Style['line-4']}></div>
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

export default Jumbotron  