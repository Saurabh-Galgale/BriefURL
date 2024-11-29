import React from 'react';
import "./Footer.css";
import git from '../Assets/gitFooter.png';

function Footer() {
  return (

    <div id='footer'>
    <a href='https://github.com/Saurabh-Galgale' target="_blank" rel="noreferrer"><img className='git' src={git} alt="git" /></a>
    </div>

  )
}

export default Footer;