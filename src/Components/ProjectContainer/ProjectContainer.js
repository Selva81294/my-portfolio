import React from "react";
import "../ProjectContainer/ProjectContainer.css";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import stackOverflow from "../../Images/StackOverflow.jpg";
import chatApp from "../../Images/ChatApp.JPG";
import eazyPay from "../../Images/EazyPay.JPG";

const ProjectContainer = () => {
  const client_projects = [
    {
      img: eazyPay,
      title: "EazyShop-Ecommerce-Website",
      description:
        "An ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.",
      link: "https://starlit-boba-48ae2d.netlify.app/",
    },
    {
      img: chatApp,
      title: "Fun-Chaters-Chat-App",
      description:
        "This App provides realtime 1-on-1 chat and group chat using socket.io. Notification and typing indication functionality also applied in this app.",
      link: "https://keen-sorbet-c69c44.netlify.app/",
    },
    {
      img: stackOverflow,
      title: "Stack-Overflow-Clone-App",
      description:
        "Stack Overflow is a question and answer website for programmers. It is the flagship site of the Stack Exchange Network. It was created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on certain computer programming topics.",
      link: "https://master--euphonious-liger-57c306.netlify.app/",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>My Projects</h1>
      <div className="projectContainer_projects">
        {client_projects.map((projects, idx) => (
          <Project
            key={idx}
            img={projects.img}
            title={projects.title}
            description={projects.description}
            link={projects.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
