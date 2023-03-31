import React from 'react'
import {Element} from "react-scroll"
import Experience from '../ExperienceBox/Experience'
import "../ExperienceContainer/ExperienceContainer.css"

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="experience">
        <h1>Experience</h1>
        <div className='experienceContainer_info'>
            <Experience number="+6 years" title="Quality"/>
            <Experience number="6+ months course" title="Full Stack Developer" style={{backgroundColor : "#e62200"}}/>
            <Experience number="+3" title="Projects"/>
        </div>

    </Element>
  )
}

export default ExperienceContainer