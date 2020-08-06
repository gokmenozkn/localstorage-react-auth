import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="container mt-5" style={{ maxWidth: 600 }}>
        <form className="text-center p5">
          
          <p className="h4 mb-4">Sign up</p>

          {/* Username */}
          <input type="text" className="form-control mb-4" placeholder="Username" />

          {/* password */}
          <input type="password" className="form-control mb-4" placeholder="Password" />

          <button className="btn btn-primary btn-block my-4" type="submit">Sign up</button>

          <p>
            Member? 
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </>
  )
}