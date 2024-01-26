import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBanner from "./components/topbanner/TopBanner";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
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
