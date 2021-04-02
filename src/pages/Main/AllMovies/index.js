import React from 'react'
import Navbarin from '../../../components/NavbarIn'
// import Jumbotron from '../../../components/DetailsJumbotron/AccontJumbotron'
import AllMoviesJumbotron from '../../../components/AllMovies'
import Footer from '../../../components/Footer'

function AllMovies() {
    return (
        <div>
            <Navbarin />
            {/* <Jumbotron /> */}
            <AllMoviesJumbotron />
            <Footer />
        </div>
    )
}

export default AllMovies
