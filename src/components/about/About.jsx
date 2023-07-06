import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import {GiLoveMystery} from 'react-icons/gi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>CSE B.tech IIT Kharagpur</small>
            </article>

            <article className='about__card' >
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className='about__card' >
              <GiLoveMystery className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Playing Cricket, Badminton, Volley Ball, Chess</small>
              <small>Watching sci-fi, detective, intellectual, action movies and web series</small>
              <small>Being Krishna Consciousness and reading Bhagavadhgeeta</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About