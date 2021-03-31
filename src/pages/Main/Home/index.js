import React, { Component } from 'react'
import Navbar from './../../../components/Navbar'
import Jumbotron1 from './../../../components/HomeJumbotron/Jumbotron'
import Jumbotron2 from './../../../components/HomeJumbotron/Jumbotron2'
// import Jumbotron3 from './../../../components/HomeJumbotron/Jumbotron3'
import Footer from './../../../components/Footer'
import Cardmonth from './../../../components/Card/Cardmonth'
import CardMovie from '../../../components/Card/CardMovies'
import Jumbotron3update from './../../../components/HomeJumbotron/Jumbotron3Updated'
import {useSelector} from 'react-redux'


function Home() {
  
    // const{name} = useSelector(state => state)
    // console.log('isiiiiiiiiiiiiii', name);
    return (
      <div>
        <Navbar />
        <Jumbotron1 />
        <Jumbotron2 />
        <Cardmonth />
        <CardMovie 
         
        />
        <Jumbotron3update />

        {/* <Jumbotron3 /> */}
        <Footer />
      </div>
    )
}

export default Home




// File lama sebelum masuk redux
// class Home extends Component {
//   render() {
//     const{name} = useSelector(state => state)
//     console.log('isiiiiiiiiiiiiii', name);
//     return (
//       <div>
//         <Navbar />
//         <Jumbotron1 />
//         <Jumbotron2 />
//         <Cardmonth />
//         <CardMovie />
//         <Jumbotron3update />

//         {/* <Jumbotron3 /> */}
//         <Footer />
//       </div>
//     )
//   }
// }

// export default Home
