import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Choda Y B V Anjaneya</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt='me'/>
        </div>
      </div>

    </header>
  )
}

export default Header