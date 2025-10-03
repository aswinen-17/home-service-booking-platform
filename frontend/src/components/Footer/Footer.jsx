import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src ={assets.logonew} alt=""/>
          <p>Homease services bring convenience right to your doorstep by offering trusted solutions for everyday needs like repairs, maintenance, and improvements</p>
          <div className="footer-social-icons">
            <img src = {assets.facebook_icon} alt=""/>
            <img src = {assets.twitter_icon} alt=""/>
            <img src = {assets.linkedin_icon} alt=""/>

          </div>
        </div>
         <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8811223333</li>
            <li>contact@homease.com</li>
          </ul>

        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Homease.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
