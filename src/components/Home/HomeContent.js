import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeContent() {
  return (
    <Container fluid className="relative pb-[70px] pt-[70px]" id="about">
      <Container>
        <Row>
          <Col md={8} className="text-white pt-[100px] pb-5 text-center">
            <h1 className="text-[2.6em]">
              LET ME <span className="text-purple-600"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-white pt-[50px] text-[1.2em] text-left">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="text-purple-600"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="text-purple-600">
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="text-purple-600">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="text-purple-600">Node.js</b> and
              <i>
                <b className="text-purple-600">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="text-purple-600"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center pt-[25px]">
            <h1 className="text-white">FIND ME ON</h1>
            <p className="text-white">
              Feel free to <span className="text-purple-600">connect </span>with
              me
            </p>
            <ul className="home-about-social-links">
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#700c86]  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#700c86]  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#700c86]  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://www.instagram.com/lamcutevjppro/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#700c86] home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeContent;
