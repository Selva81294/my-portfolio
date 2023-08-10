import React from "react";
import "../ProjectContainer/ProjectContainer.css";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import stackOverflow from "../../Images/StackOverflow.jpg";
import chatApp from "../../Images/ChatApp.JPG";
import eazyPay from "../../Images/EazyPay.JPG";
import bookApp from "../../Images/BookApp.JPG"

const ProjectContainer = () => {
  const client_projects = [
    {
      img: eazyPay,
      title: "EazyShop-Ecommerce-Website",
      description:
        "An ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.",
      applink: "https://starlit-boba-48ae2d.netlify.app/",
      codelinkFE: "https://github.com/Selva81294/e-commerce-frontend",
      codelinkBE: "https://github.com/Selva81294/e-commerce-backend",
    },
    {
      img: chatApp,
      title: "Fun-Chaters-Chat-App",
      description:
        "This App provides realtime 1-on-1 chat and group chat using socket.io. Notification and typing indication functionality also applied in this app.",
      applink: "https://keen-sorbet-c69c44.netlify.app/",
      codelinkFE: "https://github.com/Selva81294/Chat-App-Frontend",
      codelinkBE: "https://github.com/Selva81294/Chat-App-Backend",
    },
    {
      img: stackOverflow,
      title: "Stack-Overflow-Clone-App",
      description:
        "Stack Overflow is a question and answer website for programmers. It is the flagship site of the Stack Exchange Network. It was created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on certain computer programming topics.",
      applink: "https://master--euphonious-liger-57c306.netlify.app/",
      codelinkFE: "https://github.com/Selva81294/stack-overflow-frontend",
      codelinkBE: "https://github.com/Selva81294/stack-overflow-backend",
    },
    {
      img: bookApp,
      title: "Book APP using Google API",
      description:
        "This app offers a quick view of the content so that you can judge the book's relevance. It lets you decide whether you want to read the whole book or not. Additionally, full book link also attached.",
      applink: "https://main--singular-daifuku-1aeb4b.netlify.app/",
      codelinkFE: "https://github.com/Selva81294/Book-APP-using-Google-Book-API",
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
            applink={projects.applink}
            codelinkFE={projects.codelinkFE}
            codelinkBE={projects.codelinkBE}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
