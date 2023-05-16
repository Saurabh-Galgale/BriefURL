import React from 'react';
import "./Footer.css";
import linkedin from '../Assets/linkedin.png';
import youtube from '../Assets/youtube.png';
import twitter from '../Assets/twitter.png';
import insta from '../Assets/insta.png';

function Footer() {
  return (
    <>
    <div id='footer'>
    <h1>No @Copyright issue ! ( feel free to copy )</h1>
    <div id='linkedinlogofooter'>
    <a href='' target={'_blank'}><img className='linkedin' src={linkedin} alt="LinkedIn" /></a>
    <a href='' target={'_blank'}><img className='youtube' src={youtube} alt="youtube" /></a>
    <a href='' target={'_blank'}><img className='twitter' src={twitter} alt="twitter" /></a>
    <a href='' target={'_blank'}><img className='insta' src={insta} alt="insta" /></a>
    </div>
    </div>
    </>
  )
}

export default Footer;