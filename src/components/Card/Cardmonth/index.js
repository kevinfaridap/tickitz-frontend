import React from 'react'
import Style from './cardmonth.module.css'

function Cardmonth() {
    return (
        <div>
          <div className="container mt-5 mb-5">

            <div className={[['row'], Style['teks-upcoming']].join(' ')}>
              <div className="col">
                <h4 className={Style['title-upcoming']} >Now Showing Movies</h4>
              </div>
              <div className="col">
                <h4 className={Style['view-upcoming']} > view all</h4>
              </div>
            </div>


            <div className={Style['wraps']}>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-sept']].join(' ')}>September</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-oct']].join(' ')}>October</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>November</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>December</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>January</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>February</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>March</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>April</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>May</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>June</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>July</button>
              </div>
              <div className={Style['wrap']}>
              <button type="button" className={[['btn'], Style['btn-month']].join(' ')}>August</button>
              </div>
            </div>
            

          </div>
        </div>
    )
}

export default Cardmonth
