import React from 'react'
import './pagesCss/about.css'

export const About = () => {
  return (
    <div className='About'>
      <div className=' card__section'>
        <div className='About__first'>
          <h1>About Me</h1><hr/><hr/><br /><br />
          <p>Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.</p>
        </div>
    
        </div>
          <div className='About__second'>
        <h1>Education</h1><hr/><hr/>
          <section className='stack'>
            <p>Full Stack Developer</p>
            <p>April 2022 - Present day</p>
          </section>
          <section className='prep'>
            <p>Prepbyetes</p> <p>Online</p>
          </section><br /><hr/>
          <section className='stack'>
            <p>Bachelor in Computer Science Engineering</p>
            <p>2017 - 2021</p>
          </section>
          <section className='prep'>
            <p>Graphic Era Hill University</p> <p>Dehradun</p>
          </section>
        </div>
    </div>
  )
}
