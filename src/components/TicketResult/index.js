import React from 'react'
import Style from './ticketresult.module.css'

function TicketResultJumbotron() {
  return (
    <div>
      <div class={[['jumbotron'], ['jumbotron-fluid'], Style['ticket-result-jumbotron']].join(' ')}>
        <div class="container">
          <div className={Style['ticket-result-box']}>
            <h3 className={Style['ticket-result-title']}>Proof of Payment</h3>
            <div className={Style['ticket-rectangle']}>
              <div className={Style['img-ticket-header']}></div>
              
              <h6 className={Style['movie-text']}>Movie</h6>
              <h6 className={Style['movie-title']}>Spiderman Home Coming</h6>
              
              <div className="row">
                <div className="col">
                  
                  <h6 className={Style['date-text']}>Date</h6>
                  <h6 className={Style['date-value']}>07 July</h6>
                  
                  <h6 className={Style['count-text']}>Count</h6>
                  <h6 className={Style['count-value']}>3 pieces</h6>

                </div>
                <div className={[['col'], Style['time-date']].join(' ')}>
               
                  <h6 className={Style['time-text']}>Time</h6>
                  <h6 className={Style['time-value']}>02:00 pm</h6>
                  
                  <h6 className={Style['seat-text']}>Seats</h6>
                  <h6 className={Style['seat-value']}>C4, C3, C2</h6>

                </div>

                <div className={[['col'], Style['category-price']].join(' ')}>
               
                  <h6 className={Style['category-text']}>Category</h6>
                  <h6 className={Style['category-value']}>PG-13</h6>
                  
                  <h6 className={Style['price-text']}>Price</h6>
                  <h6 className={Style['price-value']}>$30.00</h6>

                </div>
              </div>

              <div className={Style['ticket-result-line']}></div>

              <div className={Style['small-ticket']}>
                <h6 className={Style['movie-text-2']}>Movie</h6>
                <h6 className={Style['movie-title-2']}>Spiderman Home...</h6>

                <h6 className={Style['date-text-2']}>Date</h6>
                <h6 className={Style['date-title-2']}>07 Jul</h6>

                <h6 className={Style['count-text-2']}>Count</h6>
                <h6 className={Style['count-title-2']}>3 pcs</h6>

                <div className={Style['small-ticket-texts']}>
                  <h6 className={Style['time-text-2']}>Time</h6>
                  <h6 className={Style['time-title-2']}>2:00pm</h6>

                  <h6 className={Style['seat-text-2']}>Seats</h6>
                  <h6 className={Style['seat-title-2']}>C4, C3, C2</h6>

                  <h6 className={Style['category-text-2']}>Category</h6>
                  <h6 className={Style['category-title-2']}>PG-13</h6>
                </div>
              </div>

              <div className={Style['img-scan-bar']}></div>
              <div className={Style['img-scan-bar-2']}></div>
              <div className={Style['img-scan-bar-3']}></div>

              <div className={Style['buttom-circle']}></div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TicketResultJumbotron
