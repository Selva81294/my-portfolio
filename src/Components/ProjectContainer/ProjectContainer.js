import React from 'react'
import "../ProjectContainer/ProjectContainer.css"
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import studentProject from '../../Images/StudentsApp.jpg'
import stackOverflow from '../../Images/StackOverflow.jpg'

const ProjectContainer = () => {

const client_projects = [
    {
        img: studentProject,
        title: "Students App",
        description : "Here you can see students lists, add, update and delete option also available",
        link: "https://splendorous-crepe-4fcded.netlify.app/"
    },
    {
        img: stackOverflow,
        title: "Stock-Overflow-Clone-App",
        description : "Stack Overflow is a question and answer website for programmers. It is the flagship site of the Stack Exchange Network. It was created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on certain computer programming topics.",
        link: "https://master--euphonious-liger-57c306.netlify.app/"
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