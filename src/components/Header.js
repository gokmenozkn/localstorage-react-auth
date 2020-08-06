import React from 'react';
import {
  Link
} from "react-router-dom";

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container } from 'react-bootstrap';

class Header extends React.Component {

  logout = () => {
    localStorage.removeItem('auth_token');
    window.location.reload();
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">Navbar</Link>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/signup">Sign up</Link>
              </li>
              {!localStorage.getItem('auth_token') &&
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
              }
              {localStorage.getItem('auth_token') &&
                <li className="nav-item">
                  <div className="nav-link text-white" onClick={this.logout}>Logout</div>
                </li>
              }
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;