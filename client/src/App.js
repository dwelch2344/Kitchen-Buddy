import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (<Router>
    <div className="App">
      <NavBar />

      <div className="outer">
        <div className="inner">
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
