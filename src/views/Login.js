import React from 'react';
import {
  Link
} from "react-router-dom";

import axios from 'axios';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  /**
   * 
   * @param {Event} e 
   */
  handleUsernameChange = e => {
    var { value } = e.target;

    this.setState({
      username: value
    });
  }

  /**
   * 
   * @param {Event} e 
   */
  handlePasswordChange = e => {
    var { value } = e.target;

    this.setState({
      password: value
    });
  }

  /**
   * @description send post request to Node.js api (URL=localhost:5000)
   * @param {Event} e 
   */
  handleSubmit = e => {
    e.preventDefault();
    
    var { username, password } = this.state;

    if (username && password) {

      axios.post("http://localhost:5000/user/login", {
        username,
        password
      }).then(res => {
        const {token} = res.data;

        localStorage.setItem('auth_token', token);
        window.location.replace('/');
      })
        .catch(e => console.log(e));

      this.setState({
        username: "",
        password: ""
      });
    } else {
      console.log("Enter username or password");
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <>
        <div className="container mt-5" style={{ maxWidth: 600 }}>
          <form className="text-center p5" onSubmit={this.handleSubmit}>
            
            <p className="h4 mb-4">Login</p>

            {/* Username */}
            <input 
              type="text" 
              className="form-control mb-4"
              value={username}
              onChange={this.handleUsernameChange} 
              placeholder="Username" 
              />

            {/* password */}
            <input 
              type="password" 
              className="form-control mb-4"
              value={password}
              onChange={this.handlePasswordChange}
              placeholder="Password" 
              />

            <button className="btn btn-primary btn-block my-4" type="submit">Login</button>

            <p>
              Not a member? 
              <Link to="/signup"> Register</Link>
            </p>
          </form>
        </div>
      </>
    )
  }
}