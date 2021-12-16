import React from 'react';

import {Switch, Route} from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar';
import Locations from './components/Locations';
import Movies from './components/Movies';
import People from './components/People';
import Home from './components/Home';

class App extends React.Component  {

  render() {

    return (
      <div className="App">
       <NavBar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/locations' component = {Locations} />
          <Route path = '/movies' component = {Movies} />
          <Route path = '/people' component = {People} />
        </Switch>
      </div>
    );

  }

}



export default App;