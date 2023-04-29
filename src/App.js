import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar";
import Preloader from "../src/components/Pre";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
