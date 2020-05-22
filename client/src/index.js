import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './Components/login/Login';


ReactDOM.render(
  <BrowserRouter>
     <Switch>
         <Route path="/" exact={true} component={App} />
         <Route path="/login" exact={true}  component={Login} />
         
     </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

