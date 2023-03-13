import React from 'react'
import "../ProjectContainer/ProjectContainer.css"
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import studentProject from '../../Images/StudentsApp.jpg'

const ProjectContainer = () => {

const client_projects = [
    {
        img: studentProject,
        title: "Students App",
        description : "Here you can see students lists, add, update and delete option also available",
        link: "https://splendorous-crepe-4fcded.netlify.app/"
    },
    {
        img: "https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
        title: "Facebook",
        description : "Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.",
        link: "www.google.com"
    },
    {
        img: "https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
        title: "Facebook",
        description : "Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.",
        link: "www.google.com"
    },
    {
        img: "https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
        title: "Facebook",
        description : "Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.",
        link: "www.google.com"
    }
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