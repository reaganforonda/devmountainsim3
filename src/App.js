import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Component/Nav/Nav';
import Auth from './Component/Auth/Auth';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Post from './Component/Post/Post';

import Routing from './route';

import {withRouter} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);

  }

  render() {
    const pathname = window.location.href;

    console.log(pathname);
    console.log(pathname === 'http://localhost:3000/#/')
        return (
      <div className="App">
      {
        this.pathname === 'http://localhost:3000/#/' ? null : <Nav/>
      }
      
      <Routing/>
      </div>
    );
  }
}

export default App;
