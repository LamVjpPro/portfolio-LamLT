import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument, CgGitFork } from "react-icons/cg";

function NavBar() {
  const [expand, setExpanded] = useState(false);
  const [navColor, setNavColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="flex">
          <img src={logo} className="h-[22.4px] w-[40px]" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                className="text-white pr-[10px] pl-[10px]"
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineHome className="mb-[5px] mr-[5px]" />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white pr-[10px] pl-[10px]"
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser className="mb-[5px] mr-[5px]" />
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white pr-[10px] pl-[10px]"
                as={Link}
                to="/project"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="mb-[5px] mr-[5px]" />
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white pr-[10px] pl-[10px]"
                as={Link}
                to="/resume"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument className="mb-[5px] mr-[5px]" />
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-[1.1em] pt-[10px]">
              <Button
                href="https://github.com/LamVjpPro"
                target="_blank"
                className="leading-[22px] bg-[#934cce5e] py-1 px-4 align-middle text-center border-none "
              >
                <CgGitFork className="text-[19.2px]" />{" "}
                <AiFillStar className="text-[17.6px]" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
