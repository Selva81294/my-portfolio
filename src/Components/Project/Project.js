import React, { useState } from 'react'
import '../Project/Project.css'

const Project = ({img,title,description,applink,codelinkFE,codelinkBE}) => {
const [show,setShow] = useState(false)

function newTab(url){
    window.open(url)
  }

  return (
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
            <div className='project_btn'>
                <button className='project_appBtn' onClick={()=>newTab(`${applink}`)}>View App</button>
                {
                    codelinkFE ? (
                        <button className='project_codeBtnFE' onClick={()=>newTab(`${codelinkFE}`)}>Get Code(FE)</button>
                    ) : ""
                }
                {
                    codelinkBE ? (
                        <button className='project_codeBtnBE' onClick={()=>newTab(`${codelinkBE}`)}>Get Code(BE)</button>
                    ) : ""
                }
                
                
            </div>
        </div>
  )
}

export default Project