import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Main/Home'
import Signin from '../../pages/Auth/Signin'
import Signup from '../../pages/Auth/Signup'
import Details from '../../pages/Main/Details'
import Order from '../../pages/Main/Order'
import Payment from '../../pages/Main/Payment'
import Update from '../../pages/Main/Update'
import Profile from '../../pages/Main/Profile'
import OrderHistory from '../../pages/Main/OrderHistory'
import PrivateRoute from './module/PrivateRoute'
import Admin from '../../pages/Main/Admin/Index'
  

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/details/:idmovie" component={Details} />
          <PrivateRoute path="/order" component={Order} />
          <Route path="/payment" component={Payment} />
          <Route path="/update" component={Update} />
          <Route path="/profile" component={Profile}  />
          <Route path="/orderhistory" component={OrderHistory}  />
          <Route path="/admin" component={Admin} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default MainRoute
