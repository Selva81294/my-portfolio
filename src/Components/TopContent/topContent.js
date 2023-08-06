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
            <button className='topContent_downloadBtn' onClick={()=>newTab("https://docs.google.com/document/d/1icctN2fxfigyD0L3oo2M-P-VVI4REpll/edit#heading=h.30j0zll")}>My Resume</button>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent_workBtn'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent