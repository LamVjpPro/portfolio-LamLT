import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Navbar from "../Navbar";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import HomeContent from "./HomeContent";

function Home() {
  return (
    <section>
      <Container fluid className="home-section">
        <Navbar />
        <Particle />
        <Container className="home-content text-[whitesmoke] text-left">
          <Row>
            <Col md={7} className="pt-[80px]">
              <h1 className="pb-[15px] text-[38.4px] pl-[50px]">
                Hi There!
                <span className="wave">👋🏻</span>
              </h1>
              <h1 className="text-[40px] pl-[45px]">
                I'M
                <strong className="text-[#cd5ff8]"> Le Trong Lam </strong>
              </h1>
              <div className="p-[50px] text-left">
                <Type />
              </div>
            </Col>
            <Col md={5} className="pb-5">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-[450]"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeContent />
    </section>
  );
}

export default Home;
