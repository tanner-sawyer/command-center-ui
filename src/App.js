import React, { Component } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch> {/* This is a new thing in React 16 I believe. It is a little better for memory/time I think (just a switch statement) */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
