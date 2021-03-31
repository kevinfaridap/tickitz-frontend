import './App.css';
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Home from './pages/Main/Home'
// import Signin from './pages/Auth/Signin'
// import Signup from './pages/Auth/Signup'
// import Details from './pages/Main/Details'
// import Order from './pages/Main/Order'
// import Payment from './pages/Main/Payment'
// import Update from './pages/Main/Update'
// import Profile from './pages/Main/Profile';
// import OrderHistory from './pages/Main/OrderHistory';
import {Provider} from 'react-redux'
import store from './configs/redux/store'
import Route from './configs/router/MainRoute'

function App() {
  return (
    <Provider store={store } >
      <Route />
      
      {/* Pindah ke configs/router */}
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/details/:idmovie" component={Details} />
          <Route path="/order" component={Order} />
          <Route path="/payment" component={Payment} />
          <Route path="/update" component={Update} />
          <Route path="/profile" component={Profile}  />
          <Route path="/orderhistory" component={OrderHistory}  />

        </Switch>
      </BrowserRouter> */}
      
    
    </Provider>
  )
}

export default App;
