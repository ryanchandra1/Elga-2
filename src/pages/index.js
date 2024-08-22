import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Careers from "./Careers";
import Support from "./Support";
import Additional1 from "./AdditionalPages1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Pages () {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Additional1" element={<Additional1 />} />
      </Routes>
    </Router>
 )
}

export default Pages;