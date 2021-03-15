import React, { Component } from 'react'
import Navbar from './../../../components/Navbar'
import Jumbotron1 from './../../../components/HomeJumbotron/Jumbotron'
import Jumbotron2 from './../../../components/HomeJumbotron/Jumbotron2'
import Jumbotron3 from './../../../components/HomeJumbotron/Jumbotron3'
import Footer from './../../../components/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron1 />
        <Jumbotron2 />
        <Jumbotron3 />
        <Footer />
      </div>
    )
  }
}

export default Home
