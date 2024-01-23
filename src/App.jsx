import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBanner from "./components/topbanner/TopBanner";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <TopBanner />
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
