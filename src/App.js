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
    
          return (
      <div className="App">
      {
        this.props.location.pathname === '/' ? null : <Nav/>
      }
      
      <Routing/>
      </div>
    );
  }
}

export default withRouter(App);
