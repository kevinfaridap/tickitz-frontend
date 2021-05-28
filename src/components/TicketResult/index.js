import React, {useEffect, useState, useRef} from 'react'
import Style from './ticketresult.module.css'
import TicketBox from './ticketBox'
import {useParams} from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';


function TicketResultJumbotron() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams()
  const ticketresult = params.ticketresult 
  // console.log(ticketresult);
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], Style['ticket-result-jumbotron']].join(' ')}>
        <div className="container">
          <div className={Style['ticket-result-box']}>
            <h3 className={Style['ticket-result-title']}>Proof of Payment</h3>
            <TicketBox 
              ref={componentRef} 
              idticket={ticketresult}
            />
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-lg-2">
                <button className={Style['download']}>
                  Download
                </button>
              </div>
              <div className="col-lg-2">
                <button className={Style['print']} onClick={handlePrint}>
                  Print
                </button>
                {/* <ReactToPrint
                  trigger={() => <button>Print this out!</button>}
                  content={() => componentRef.current}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TicketResultJumbotron
