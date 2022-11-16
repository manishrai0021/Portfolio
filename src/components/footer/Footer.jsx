import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Manish</a>

      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Skills">Experience</a></li>
        <li><a href="#projects">Projetcs</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://facebook.com">Instagram</a>
        <a href="https://facebook.com">WhatsApp</a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Manish Kumar Rai. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer