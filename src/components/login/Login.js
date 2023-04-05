import React from "react";
import "./login.css"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className="main-div">
      <div className="content-div">
        <h1>Login</h1>
        <form action="/" className="form">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="password" />
          <button className="btn">Submit</button>
        </form>
        <div className="btns-div">
          <p className="btn"><Link  className="links" to={"Signup"}>Signup</Link></p>
          <button className="btn btn-outline">Forget Password</button>
        </div>
      </div>
    </div>
  );
}
