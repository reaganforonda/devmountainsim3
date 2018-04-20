import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Component/Nav/Nav';
import Auth from './Component/Auth/Auth';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Post from './Component/Post/Post';

import Routing from './route';

class App extends Component {

  constructor(props){
    super(props);

  }

  render() {
    const pathname = window.location.pathname
        return (
      <div className="App">
      <Nav/>
      <Routing/>
      </div>
    );
  }
}

export default App;
