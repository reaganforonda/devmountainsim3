import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import {update} from '../../ducks/reducer';

export class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnClickRegister = this.handleOnClickRegister.bind(this);
    this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegisterRequest() {
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("http://localhost:4000/api/register", user)
      .then(result => {
        console.log(result.data)
        this.props.update(result.data.id, result.data.username, result.data.profile_pic);
      })
      .catch(e => console.log(e));
  }

  handleLoginRequest() {
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:4000/api/login", user)
      .then(result => {
        this.props.update(result.data.id, result.data.username, result.data.profile_pic);
      })
      .catch(e => console.log(e));
  }

  handleOnClickRegister() {
    this.handleRegisterRequest();
  }

  handleOnClickLogin() {
    this.handleLoginRequest();
  }

  render() {
    return (
      <div>
        <div>
          <div>
            UserName:
            <input
              name="username"
              value={this.state.username}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={e => this.handleInputChange(e)}
            />
          </div>
        </div>

        <div>
          <Link to="/dashboard" onClick={() => this.handleOnClickLogin()}>
            <button>Login</button>
          </Link>
          <Link to="/dashboard" onClick={() => this.handleOnClickRegister()}>
            <button>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, {update})(Auth);