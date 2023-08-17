import React from 'react'
import { Link } from 'react-scroll'
import './topContent.css'

const TopContent = () => {

function newTab(url){
  window.open(url)
}

  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h1>Mr. Selva Kumaran</h1> 
            <p>A Full Stack Web & App Developer</p>
            <button className='topContent_downloadBtn' onClick={()=>newTab("https://drive.google.com/file/d/11324UspfdaThGuEAHv4G7MYUV6s0b2Q8/view?usp=sharing")}>My Resume</button>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent_workBtn'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent