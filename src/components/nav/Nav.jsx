import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
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
    <nav className='flex justify-evenly font-semibold shadow-lg p-2 gap-2 fixed bg-white z-10 w-full'>
      <div className='flex justify-between items-center border-2 px-4 rounded-full w-full'>
        <Link to={"/"} className='text-3xl font-bold text-black'>MKR</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/timeline"}>Timeline</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/blog"}>Blog</Link>
      </div>
    </nav>
  )
}

export default Nav