import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Main/Home'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Details from './pages/Main/Details'
import Order from './pages/Main/Order'
import Payment from './pages/Main/Payment'
import TestCRUD from './pages/Main/TestCRUD'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* value dari component = dari nama import diatas */}
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/details" component={Details} />
        <Route path="/order" component={Order} />
        <Route path="/payment" component={Payment} />
        <Route path="/testcrud" component={TestCRUD} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
