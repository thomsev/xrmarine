import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import WorkshopPage from "./components/WorkshopPage/WorkshopPage";
import FinnListings from "./components/Finn/Finn";
import Nettbutikk from "./components/Nettbutikk/Nettbutikk";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/finn" element={<FinnListings />} />
            <Route path="/nettbutikk" element={<Nettbutikk />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
