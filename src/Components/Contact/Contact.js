import React from 'react'
import '../Contact/Contact.css'
import {Element} from "react-scroll"
import IconButton from '@mui/material/IconButton';
import {Facebook, LinkedIn, Instagram} from "@mui/icons-material"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
      
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email : <span>selva81294@gmail.com</span>
            </p>
            <p>
                Github Username : <span>Selva81294</span>
            </p>
            <div className='contact_icons'>
                <a href='https://www.linkedin.com/in/selva-kumaran-b714b6131'>
                    <IconButton>
                      <LinkedIn/>   
                    </IconButton>
                </a>
                <a href='https://www.facebook.com/ilayaselva/'>
                    <IconButton>
                      <Facebook/>   
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/thalapathy_selva8/'>
                    <IconButton>
                      <Instagram/>   
                    </IconButton>
                </a>

            </div>
        </div>
        <div>

        </div>
        
    </Element>
  )
}

export default Contact