import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar(prop) {
  return (
    <>
      <div id='nav'>
        <h1>BriefURL</h1>
        <div id='menu'>
          <Link to="/" className='menutxt'>Home</Link>
          <Link to="/Contact Us" className='menutxt'>Contact</Link>
          {/* <Link to="/Projects" className='menutxt'>Projects</Link> */}
          <Link to="/About" className='menutxt'>About</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;