import React, {Component} from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>  
      <Route exact path="/" component={Login} />
      <Route  path="/admin" component={Admin} />
      <Route  path="/logout" component={Logout} />
      </Switch>
      </BrowserRouter>
    );
  }
}

