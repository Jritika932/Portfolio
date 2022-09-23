import React from 'react'
import './pagesCss/Home.css'
import ritika from '../Image/Ritika.pdf'
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className='Home'>
        <div className='div__left'>
           <section className='first'>
            <h1 style={{color:"rgb(8,33,84)"}}>HEY</h1>
           <h1>MY NAME IS</h1> 
              
           </section>

            <section className='second'>
            <h1 style={{color:"rgb(8,33,84)"}}>RITIKA JOSHI</h1>
            <h1>FULLSTACK DEVELOPER</h1>
            <h3 style={{color:"rgb(8,33,84)"}}>I BUILD THINGS FOR WEB</h3>
            </section><br /><br />
            <button style={{color:"black"}}> <Link style={{color:"rgb(8,33,84)"}} to='/contact'>Hire Me</Link> </button>

            <button><a style={{color:"rgb(8,33,84)"}} href={ritika} download={ritika}>Download Resume</a></button>
      

        </div>

        

    </div>
  )
}

export default Home