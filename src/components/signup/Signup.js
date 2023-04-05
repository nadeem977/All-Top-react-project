import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <>
    <div className="main-div">
      <div className="context">
        <div className="text-div">
          <h1>Signup</h1>
          <p>By registering at AllTop.com you can create your own customized RSS feed page. Learn more about creating your <span className='spn'>custom AllTop page.</span> This is not for submitting your site to AllTop, we are not currently accepting site submissions.</p>
        </div>
        <form action="/" className='form'>
          <input type="text" placeholder='Frst name'/>
          <input type="text" placeholder='Last name' />
          <input type="text" placeholder='User name' />
          <input type="email"  placeholder='Enter your email'/>
          <input type="password" placeholder='password' />
          <p>I agree to the site's Privacy Policy and Cookie Policy</p>
          <button className='btn'>Signup</button>
          <p>Have an account? <Link to={"Login"}>Login In</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}
