import React from 'react'
import CV from '../../assets/cv_YBV_final.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA