import React from 'react';
import { Element } from 'react-scroll';
import skillImg from '../../Images/skillImg.jpg';
import LinearProgress from '@mui/material/LinearProgress';
import "../SkillContainer/SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer_image'>
            <img src={skillImg} alt=''/>
        </div>
        <div className='skillContainer_text'>
            <h2>SKILL<span>SET</span> </h2>
            <div className='skillContainer_skillset'>
                <h5>HTML</h5>
                <div className='skillContainer_slider skillContainer_slider1'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>CSS</h5>
                <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>CSS Framework [Bootstrap, Material UI]</h5>
                <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Javascript</h5>
                <div className='skillContainer_slider skillContainer_slider4'>
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>React JS</h5>
                <div className='skillContainer_slider skillContainer_slider5'>
                    <LinearProgress variant='determinate' value={85}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Databases [MongoDB, MySQL]</h5>
                <div className='skillContainer_slider skillContainer_slider6'>
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>Node JS</h5>
                <div className='skillContainer_slider skillContainer_slider7'>
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillContainer_skillset'>
                <h5>GIT</h5>
                <div className='skillContainer_slider skillContainer_slider8'>
                    <LinearProgress variant='determinate' value={85}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer