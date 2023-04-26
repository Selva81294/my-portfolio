import React from 'react'
import "../ProjectContainer/ProjectContainer.css"
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import studentProject from '../../Images/StudentsApp.jpg'
import stackOverflow from '../../Images/StackOverflow.jpg'
import chatApp from "../../Images/ChatApp.JPG"

const ProjectContainer = () => {

const client_projects = [
    {
        img: stackOverflow,
        title: "Stock-Overflow-Clone-App",
        description : "Stack Overflow is a question and answer website for programmers. It is the flagship site of the Stack Exchange Network. It was created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on certain computer programming topics.",
        link: "https://master--euphonious-liger-57c306.netlify.app/"
    },
    {
        img: chatApp,
        title: "Fun-Chaters-Chat-App",
        description : "This App provides realtime 1-on-1 chat and group chat using socket.io. Notification and typing indication functionality also applied in this app.",
        link: "https://keen-sorbet-c69c44.netlify.app/"
    },
]

  return (
    <Element className='projectContainer' id='projects'>
        <h1>My Projects</h1>
        <div className='projectContainer_projects'>
          {
            client_projects.map((projects,idx)=>(
                <Project key={idx} img={projects.img} title={projects.title} 
                description = {projects.description} link={projects.link}/>
            ))
          }  
        </div>
    </Element>
  )
}

export default ProjectContainer