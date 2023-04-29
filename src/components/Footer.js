import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="bg-[#0a0416] bottom-0 pt-[10px] pb-[8px]">
      <Row>
        <Col md={4} className="text-center ">
          <h3 className="text-[1em] text-white mt-[0.5em] mb-[0.5em]">
            Designed and Developed by T.Lam
          </h3>
        </Col>
        <Col md={4} className="text-center ">
          <h3 className="text-[1em] text-white mt-[0.5em] mb-[0.5em]">
            Copyright © {year} SB
          </h3>
        </Col>
        <Col md={4} className="z-1 text-center">
          <ul className="mt-[0.5em] mb-[0.5em] p-0 ">
            <li className="inline-block pr-[15px] pl-[15px]">
              <a
                href="https://github.com/LamVjpPro"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="inline-block pr-[15px] pl-[15px]">
              <a
                href="https://www.facebook.com/lamcutevjppro.2603"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li className="inline-block pr-[15px] pl-[15px]">
              <a
                href=""
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
