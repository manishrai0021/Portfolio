import React from 'react'
import './skills.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience-details-icons'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills