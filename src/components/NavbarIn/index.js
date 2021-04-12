import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Style from './navbar.module.css'
import ButtonNav from './../Button/ButtonNav'
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
const jwt = require('jsonwebtoken')

function Navbarin() {
  const handleLogut = () =>{
   const doLogout = localStorage.removeItem("token");
    if(doLogout){
      < Redirect to="/" />
      // Redirect nya tidak bekerja, jadi setelah di klik dan hapus localstorage pake link di button di bawah(belum tahu masalahnya dimana)
     }
    swal("You Have Been Logged Out!")
  }
  

 
  
  
  const isAuthenticated = localStorage.getItem('token')
  let decode = jwt.decode(isAuthenticated)
  // console.log(decode);
  if(!isAuthenticated){
    return (
      <div>
         <nav className={["navbar", "navbar-expand-lg", "navbar-light", Style["nav-bar"]].join(' ')}>
           <div className={[['container'], Style['contain-nav']].join(' ')}>
             <Link className="navbar-brand" to="/">
               <div className={Style.img1}></div>  
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
  
               <ul className="navbar-nav ml-lg-5">
                  <li>
                      {/* <!-- MOBILE ONLY --> */}
                    <div class={Style.searchMobile}>
                        <form class={[['form-inline'], Style['form-search']].join(' ')}>
                          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    {/* <!-- ============ --> */}
                  </li>
                  <li className="nav-item active">
                    <Link className={Style['nav-link-logined']} to="/"> Movies <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className={Style['nav-link-logined']} to="/allmovies"> Cinemas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={Style['nav-link-logined']} to="/order"> Buy Ticket</Link>
                  </li>
  
                  <li className="nav-item dropdown ml-lg-5 nav-right">
                    <Link className={[Style['nav-link-logined'], Style['dropdown-toggle']].join(' ')} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Location
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="#">Indonesia</Link>
                        <Link className="dropdown-item" to="#">America</Link>
                        <Link className="dropdown-item" to="#">Rusia</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                      <Link className={Style['nav-link-logined']} to="#">
                        <div className={Style['img2']}></div>
                      </Link>
                  </li>
  
  
                  {/* TEST LOGOUT */}
                  <li className="nav-item dropdown ml-lg-5 nav-right">
                    <ButtonNav 
                        type = "button"
                        className={['btn', Style['btn-nav']].join(' ')}
                        value = "Sign Up"
                        to = "/signup"
                      />
                  </li>
  
                  {/* TEST LOGOUT */}
  
                  {/* <li className="nav-item">
                      <ButtonNav 
                        type = "button"
                        className={['btn', Style['img-profile']].join(' ')}
                        value = ""
                        to = "#"
                      />
                  </li> */}
  
                  <li>
                      {/* <!-- MOBILE ONLY --> */}
                    <div class={Style.searchMobile}>
                        <h5>@ 2020 Tickitz. All Rights Reserved.</h5>
                    </div>
                    {/* <!-- ============ --> */}
                  </li>
  
               </ul>
             </div>
           </div>
         </nav>
  
       </div> 
    )
  }

// ========= JIKA LOGIN ===============
  return(
    <>
      <nav className={["navbar", "navbar-expand-lg", "navbar-light", Style["nav-bar"]].join(' ')}>
           <div className={[['container'], Style['contain-nav']].join(' ')}>
             <Link className="navbar-brand" to="/">
               <div className={Style.img1}></div>  
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
  
               <ul className="navbar-nav ml-lg-5">
                  <li>
                      {/* <!-- MOBILE ONLY --> */}
                    <div class={Style.searchMobile}>
                        <form class={[['form-inline'], Style['form-search']].join(' ')}>
                          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    {/* <!-- ============ --> */}
                  </li>
                  <li className="nav-item active">
                    <Link className={Style['nav-link']} to="/"> Movies <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className={Style['nav-link']} to="/allmovies"> Cinemas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={Style['nav-link']} to="/order"> Buy Ticket</Link>
                  </li>
  
                  <li className="nav-item dropdown ml-lg-5 nav-right">
                    <Link className={[Style['nav-link'], Style['dropdown-toggle']].join(' ')} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Location
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="#">Indonesia</Link>
                        <Link className="dropdown-item" to="#">America</Link>
                        <Link className="dropdown-item" to="#">Rusia</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <div className={Style.img2}></div>
                      </Link>
                  </li>
  
  
                  {/* TEST LOGOUT */}
                  <li className="nav-item dropdown ml-lg-5 nav-right">
                    <Link className={[Style['nav-link'], Style['dropdown-toggle']].join(' ')} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <ButtonNav 
                          type = "button"
                          className={['btn', Style['img-profile']].join(' ')}
                          value = ""
                          to = "#"
                        />
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/profile">Profile</Link>
                        <Link onClick={handleLogut} className="dropdown-item" to="/">Logout</Link>
                    </div>
                  </li>
  
                  <li>
                      {/* <!-- MOBILE ONLY --> */}
                    <div class={Style.searchMobile}>
                        <h5>@ 2020 Tickitz. All Rights Reserved.</h5>
                    </div>
                    {/* <!-- ============ --> */}
                  </li>
  
               </ul>
             </div>
           </div>
         </nav>
    </>
  )
}

export default Navbarin
