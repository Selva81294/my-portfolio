import React, { useState } from 'react'
import '../Project/Project.css'

const Project = ({img,title,description,link}) => {
const [show,setShow] = useState(false)
  return (
    <a href={link}>
        <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className='project_content'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                ) : (
                    <img src={img} alt=''/>
                )
            }
        </div>
    </a>
  )
}

export default Project