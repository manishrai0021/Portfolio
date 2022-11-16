import React from 'react'
import './about.css'
import ME from '../../assets/PP.JPG'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Photo" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about_card">
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>
            <article className="about_card">
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quaerat, reprehenderit quasi dolorem hic doloremque tempore et inventore similique nulla obcaecati, incidunt voluptas id consectetur alias in culpa deserunt quae.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About