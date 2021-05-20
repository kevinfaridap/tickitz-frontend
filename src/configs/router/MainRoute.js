import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Main/Home'
import Signin from '../../pages/Auth/Signin'
import Signup from '../../pages/Auth/Signup'
import Details from '../../pages/Main/Details'
import Order from '../../pages/Main/Order'
import Payment from '../../pages/Main/Payment'
import AllMovies from '../../pages/Main/AllMovies'
import Profile from '../../pages/Main/Profile'
import OrderHistory from '../../pages/Main/OrderHistory'
import PrivateRoute from './module/PrivateRoute'
import Admin from '../../pages/Main/Admin/Index'
import TicketResult from '../../pages/Main/TicketResult'
import PublicRoute from './module/PublicRoute'

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/signin" component={Signin} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/details/:idmovie" component={Details} />
          <PrivateRoute path="/order/:idmovie/:idcinema" component={Order} />
          <PrivateRoute path="/payment" component={Payment} />
          <PrivateRoute path="/allmovies" component={AllMovies} />
          <PrivateRoute path="/profile" component={Profile}  />
          <PrivateRoute path="/orderhistory" component={OrderHistory}  />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/ticketresult" component={TicketResult} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default MainRoute
