import React from 'react'
import './nav.css'
import {useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {BsBarChartSteps} from 'react-icons/bs'
import {MdOutlineContactMail} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <div className='wrapper'>
          <div>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
          </div>
          {/* <span>Home</span> */}
        </div>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FaLaptopCode/></a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWorkOutline/></a>
        <a href="#timeline" onClick={() => setActiveNav('#timeline')} className={activeNav === '#timeline' ? 'active' : ''}><BsBarChartSteps/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav