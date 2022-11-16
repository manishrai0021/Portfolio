import React from 'react'
import CV from '../../assets/Manish_Kumar_Rai_CV.pdf'

const CTA = () => {
  return (
    <div class="cta">
        <a href={CV} download className='btn'id='CV'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA