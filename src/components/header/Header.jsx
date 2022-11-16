import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/PP2.png'
import Socials from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Manish Kumar Rai</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>

        <div className='me'>
          <img src={ME} alt="Photo" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      <Socials/>
    </header>
  )
}

export default Header