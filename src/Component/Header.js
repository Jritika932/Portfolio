import React from 'react'
import { Link } from 'react-router-dom';
import  './header.css';
import git from "../Image/github.png"



const Header = () => {
  return (
    <div className='header__top'>
        <div>
        </div>
       
        <ul>
        <li > <Link style={{color:"rgb(8,33,84)"}} to= '/home'>Home </Link>  </li>
        <li> <Link style={{color:"rgb(8,33,84)"}} to= '/about'>About</Link> </li>
        <li> <Link style={{color:"rgb(8,33,84)"}} to= '/project'>Project</Link> </li>
        <li> <Link style={{color:"rgb(8,33,84)"}} to= '/technologies'>Technologies</Link> </li>
        <li> <Link style={{color:"rgb(8,33,84)"}} to= '/contact'>Contact</Link> </li>
        <li><a  href="https://github.com/Jritika932" target="blank"><img  className='links-1' src={git} alt="" /></a></li>
       
        
        </ul>
       
    </div>
    
  )
}

export default Header