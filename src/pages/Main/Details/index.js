import React, { Component } from 'react'
// import Navbar from './../../../components/Navbar'
import Jumbotron from './../../../components/DetailsJumbotron/Jumbotron'
import Jumbotron2 from './../../../components/DetailsJumbotron/Jumbotron2'
import Footer from './../../../components/Footer'
import Navbarin from '../../../components/NavbarIn'

export class Details extends Component {
    render() {
        return (
            <div>
              <Navbarin />
              <Jumbotron />
              <Jumbotron2 />
              <Footer />
            </div>
        )
    }
}

export default Details
