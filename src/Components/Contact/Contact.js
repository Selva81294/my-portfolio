import React from 'react'
import '../Contact/Contact.css'
import {Element} from "react-scroll"
import IconButton from '@mui/material/IconButton';
import {Facebook, LinkedIn, Instagram, FacebookOutlined} from "@mui/icons-material"

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email : <span>selva812494@gmail.com</span>
            </p>
            <p>
                Github Username : <span>Selva81294</span>
            </p>
            <div className='contact_icons'>
                <a href='www.google.com'>
                    <IconButton>
                      <LinkedIn/>   
                    </IconButton>
                </a>
                <a href='www.google.com'>
                    <IconButton>
                      <Facebook/>   
                    </IconButton>
                </a>
                <a href='www.google.com'>
                    <IconButton>
                      <Instagram/>   
                    </IconButton>
                </a>

            </div>
        </div>
    </Element>
  )
}

export default Contact