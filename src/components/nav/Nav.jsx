import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {BiSolidContact} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiSolidUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarkStarFill/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidContact/></a>
      {/*<a href='#'><AiOutlineHome/></a>*/}
    </nav>
  )
}

export default Nav