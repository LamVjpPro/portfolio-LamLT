import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { DiJavascript1, DiNodejs, DiPhp } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineGitlab } from "react-icons/ai";
import {
  SiFirebase,
  SiHeroku,
  SiLinux,
  SiMongodb,
  SiPostman,
  SiSwagger,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container
      fluid
      className="about-section relative pt-[150px] pb-[30px] text-white"
    >
      <Particle />
      <Container>
        <Row className="justify-center p-[10px]">
          <Col md={7} className="justify-center pt-[30px] pb-[50px]">
            <h1 className="text-[2.1em] pb-[20px]">
              Know Who <strong className="text-[#c770f0]">I'M</strong>
            </h1>
            <Card className="border-none text-white bg-transparent">
              <Card.Body>
                <blockquote className="mb-[1rem] text-[1.25rem] mb-0">
                  <p className="text-justify">
                    Hi Everyone, I am{" "}
                    <span className="text-[#c770f0]">Le Trong Lam </span>
                    from{" "}
                    <span className="text-[#c770f0]">
                      {" "}
                      Trieu Son, Thanh Hoa.
                    </span>
                    <br />I used to study at Vietnam - Korea Vocational College
                    of Technology majoring in network administrator.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="list-none text-left pl-[1px]">
                      <ImPointRight /> Playing Games
                    </li>
                    <li className="list-none text-left pl-[1px]">
                      <ImPointRight /> Reading comics
                    </li>
                    <li className="list-none text-left pl-[1px]">
                      <ImPointRight /> Travelling
                    </li>
                  </ul>

                  <p className="text-[#a588c0]">
                    "Strive to build things that make a difference!"{" "}
                  </p>
                  <footer className="mt-[-1rem] mb-[1rem] text-[1rem] text-[#a588c0]">
                    LamDaiK
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="about-img pt-[120px] pb-[50px]">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="text-white text-[2.3em] font-medium pt-[10px]">
          Professional
          <strong className="text-[#c770f0]">Skillset </strong>
        </h1>
        <Row className="justify-center pb-[50px]">
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <DiPhp />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <DiJavascript1 />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <DiNodejs />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <GrReactjs />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <BiGitBranch />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <AiOutlineGitlab />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <SiSwagger />
          </Col>
          <Col
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
            md={2}
            xs={4}
          >
            <SiMongodb />
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
          >
            <SiFirebase />
          </Col>
        </Row>
        <h1 className="text-white text-[2.3em] font-medium pt-[10px]">
          Tools
          <strong className="text-[#c770f0]">I use </strong>
        </h1>
        <Row className="justify-center pb-[50px]">
          <Col
            xs={4}
            md={2}
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
          >
            <SiLinux />
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
          >
            <SiVisualstudiocode />
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
          >
            <SiPostman />
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
          >
            <SiVercel />
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons text-[4.5em] opacity-[0.93] align-middle text-center rounded-[5px] table overflow-hidden "
          >
            <SiHeroku />
          </Col>
        </Row>
        <Row className="justify-center pb-[10px]">
          <h1 className="text-white text-[2.3em] font-medium pt-[10px] pb-[20px]">
            Days I<strong className="text-[#c770f0]">Code</strong>
          </h1>
          <GitHubCalendar
            username="kenny"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
