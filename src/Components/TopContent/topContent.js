import React from 'react'
import { Link } from 'react-scroll'
import './topContent.css'
import Resume from '../../Resume/My_Resume.pdf'

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h1>Mr. Selva Kumaran</h1> 
            <p>A Full Stack Web & App Developer</p>
            <a href= {Resume} download>
                <button className='topContent_downloadBtn'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent_workBtn'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent