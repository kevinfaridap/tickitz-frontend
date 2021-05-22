import React, {useEffect, useState} from 'react'
import Style from './ticketbox.module.css'
import {Link, useParams, useLocation} from 'react-router-dom'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'


function TicketBox() {
  const {search, pathname} = useLocation();
  const history = useHistory()
  const params = useParams()

  const ticketresult = params.ticketresult 
  const [dataTicket, setDataTicket] = useState([])
  useEffect(()=>{
      Axios.get(`${process.env.REACT_APP_API}/ticketresult/${ticketresult}`)
    .then((res)=>{
        const result = res.data.data[0]
      // console.log(result);
      if(result!==undefined){
        setDataTicket(result)
      } 
    })
    .catch((err)=>{
      console.log(err);
    })  
  }, []);

  const dateNew = dataTicket.date
  const dateNewest = dateNew!==undefined?dateNew.replace(2021, ""): null;
  return (
    <div>
      <div className={Style['ticket-rectangle']}>
        <div className={Style['img-ticket-header']}></div>
        
        <h6 className={Style['movie-text']}>Movie</h6>
        <h6 className={Style['movie-title']}>{dataTicket.movieTittle}</h6>
        
        <div className="row">
          <div className="col">
            
            <h6 className={Style['date-text']}>Date</h6>
            <h6 className={Style['date-value']}>{dateNewest}</h6>
            
            <h6 className={Style['count-text']}>Count</h6>
            <h6 className={Style['count-value']}>{dataTicket.seatvalues} pieces</h6>

          </div>
          <div className={[['col'], Style['time-date']].join(' ')}>
          
            <h6 className={Style['time-text']}>Time</h6>
            <h6 className={Style['time-value']}>{dataTicket.time}</h6>
            
            <h6 className={Style['seat-text']}>Seats</h6>
            <h6 className={Style['seat-value']}>{dataTicket.seatnames}</h6>

          </div>

          <div className={[['col'], Style['category-price']].join(' ')}>
          
            {/* <h6 className={Style['category-text']}>Category</h6>
            <h6 className={Style['category-value']}>PG-13</h6> */}
            
            <h6 className={Style['price-text']}>Price</h6>
            <h6 className={Style['price-value']}>IDR {dataTicket.price*dataTicket.seatvalues}</h6>

          </div>
        </div>

        <div className={Style['ticket-result-line']}></div>

        <div className={Style['small-ticket']}>
          <h6 className={Style['movie-text-2']}>Movie</h6>
          <h6 className={Style['movie-title-2']}>{dataTicket.movieTittle}</h6>

          <h6 className={Style['date-text-2']}>Date</h6>
          
          <h6 className={Style['date-title-2']}>{dateNewest}</h6>

          <h6 className={Style['count-text-2']}>Count</h6>
          <h6 className={Style['count-title-2']}>{dataTicket.seatvalues} pcs</h6>

          <div className={Style['small-ticket-texts']}>
            <h6 className={Style['time-text-2']}>Time</h6>
            <h6 className={Style['time-title-2']}>{dataTicket.time}</h6>

            <h6 className={Style['seat-text-2']}>Seats</h6>
            <h6 className={Style['seat-title-2']}>{dataTicket.seatnames}</h6>

            {/* <h6 className={Style['category-text-2']}>Category</h6>
            <h6 className={Style['category-title-2']}>PG-13</h6> */}
          </div>   
          
        </div>

        <div className={Style['img-scan-bar']}></div>
        <div className={Style['img-scan-bar-2']}></div>
        <div className={Style['img-scan-bar-3']}></div>

        <div className={Style['buttom-circle']}></div>

      </div>
    </div>
  )
}

export default TicketBox




//=============== CLASS COMPONENT untuk print function, sudah bisa tapi masalah di get param nya.
// import React, { Component } from 'react'

// export class ticketBox extends Component {
//   state = {
//     dataTicket: []
//   }

//     componentDidMount() {
//       const ticketresult = 'ad868f0a-707d-47e9-ad26-77834c16ce92';
//       this.fetchData(ticketresult);
//       console.log(ticketresult);
//       Axios.get(`${process.env.REACT_APP_API}/ticketresult/${ticketresult}`)
//       .then((res)=>{
//         const dataTicket = res.data.data[0]
//         // console.log(result);
//         if(dataTicket!==undefined){
//           this.setState({dataTicket})
//         } 
//       })
//       .catch((err)=>{
//         console.log(err);
//       })  
//     }

//     fetchData = ticketresult => {
//         // ...
//     };
    
//     render() {
//       const dateNew = this.state.dataTicket.date
//       const dateNewest = dateNew!==undefined?dateNew.replace(2021, ""): null;
//         return (

//       <div>
//       <div className={Style['ticket-rectangle']}>
//         <div className={Style['img-ticket-header']}></div>
        
//         <h6 className={Style['movie-text']}>Movie</h6>
//         <h6 className={Style['movie-title']}>{this.state.dataTicket.movieTittle}</h6>
        
//         <div className="row">
//           <div className="col">
            
//             <h6 className={Style['date-text']}>Date</h6>
//             <h6 className={Style['date-value']}>{dateNewest}</h6>
            
//             <h6 className={Style['count-text']}>Count</h6>
//             <h6 className={Style['count-value']}>{this.state.dataTicket.seatvalues} pieces</h6>

//           </div>
//           <div className={[['col'], Style['time-date']].join(' ')}>
          
//             <h6 className={Style['time-text']}>Time</h6>
//             <h6 className={Style['time-value']}>{this.state.dataTicket.time}</h6>
            
//             <h6 className={Style['seat-text']}>Seats</h6>
//             <h6 className={Style['seat-value']}>{this.state.dataTicket.seatnames}</h6>

//           </div>

//           <div className={[['col'], Style['category-price']].join(' ')}>
            
//             {/* <h6 className={Style['category-text']}>Category</h6>
//             <h6 className={Style['category-value']}>PG-13</h6> */}
            
//             <h6 className={Style['price-text']}>Price</h6>
//             <h6 className={Style['price-value']}>IDR {this.state.dataTicket.price*this.state.dataTicket.seatvalues}</h6>

//           </div>
//         </div>

//         <div className={Style['ticket-result-line']}></div>

//         <div className={Style['small-ticket']}>
//           <h6 className={Style['movie-text-2']}>Movie</h6>
//           <h6 className={Style['movie-title-2']}>{this.state.dataTicket.movieTittle}</h6>

//           <h6 className={Style['date-text-2']}>Date</h6>
          
//           <h6 className={Style['date-title-2']}>{dateNewest}</h6>

//           <h6 className={Style['count-text-2']}>Count</h6>
//           <h6 className={Style['count-title-2']}>{this.state.dataTicket.seatvalues} pcs</h6>

//           <div className={Style['small-ticket-texts']}>
//             <h6 className={Style['time-text-2']}>Time</h6>
//             <h6 className={Style['time-title-2']}>{this.state.dataTicket.time}</h6>

//             <h6 className={Style['seat-text-2']}>Seats</h6>
//             <h6 className={Style['seat-title-2']}>{this.state.dataTicket.seatnames}</h6>

//             {/* <h6 className={Style['category-text-2']}>Category</h6>
//             <h6 className={Style['category-title-2']}>PG-13</h6> */}
//           </div>   
          
//         </div>

//         <div className={Style['img-scan-bar']}></div>
//         <div className={Style['img-scan-bar-2']}></div>
//         <div className={Style['img-scan-bar-3']}></div>

//         <div className={Style['buttom-circle']}></div>

//       </div>
//     </div>
//       )
//     }
// }

// export default ticketBox


