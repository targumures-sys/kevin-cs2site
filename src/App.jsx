import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Gameplay from "./Gameplay";
import Esports from "./Esports";
import Media from "./Media";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;