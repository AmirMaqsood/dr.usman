import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Procedures from "./components/Procedures.jsx";
import Specializations from "./components/Specializations.jsx";
import Research from "./components/Research.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Specializations />
              <About />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
