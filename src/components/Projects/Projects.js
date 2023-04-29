import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectsItem from "./ProjectsItem";
import chatify from "../../Assets/Projects/chatify.png";

function Project() {
  return (
    <Container fluid className="project-section relative pt-[150px] pb-[30px]">
      <Particle />
      <Container>
        <h1 className="text-white text-[2.3em] font-medium pt-[10px] ">
          My Recent
          <strong className="purple">Works </strong>
        </h1>
        <p className="text-white">
          Here are a few projects I've worked on recently.
        </p>
        <Row className="pb-[10px] justify-center">
          <Col
            md={4}
            className="pt-[50px] pb-[50px] pl-[25px] pr-[25px] h-auto"
          >
            <ProjectsItem
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col
            md={4}
            className="pt-[50px] pb-[50px] pl-[25px] pr-[25px] h-auto"
          >
            <ProjectsItem
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col
            md={4}
            className="pt-[50px] pb-[50px] pl-[25px] pr-[25px] h-auto"
          >
            <ProjectsItem
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col
            md={4}
            className="pt-[50px] pb-[50px] pl-[25px] pr-[25px] h-auto"
          >
            <ProjectsItem
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col
            md={4}
            className="pt-[50px] pb-[50px] pl-[25px] pr-[25px] h-auto"
          >
            <ProjectsItem
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col
            md={4}
            className="pt-[50px] pb-[50px] pl-[25px] pr-[25px] h-auto"
          >
            <ProjectsItem
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
