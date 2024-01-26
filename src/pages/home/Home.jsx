import React from "react";
import "./home.css";
import Car from "../../assets/homepage_car.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ATS from "../../assets/auto-transmission-service.jpg";
import brake from "../../assets/brake repair.jpg";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <section>
      {/* home page header section */}
      <section className="container-max">
        <div className="container home__div-header">
          <h1>We Care About Your Car</h1>

          <p>
            Mechanical repairs & servicing on all makes & models of automobiles.
            We use quality parts to comply with your new car log book service &
            warranty. We come to you wherever you are in Brisbane.
          </p>

          {/* car image */}
          <div className="home__img">
            <img src={Car} alt="car" />
          </div>
        </div>
      </section>

      {/* home page key info section */}
      <section className="container-max home__section-info">
        <div className="container home__div-info">
          {/* address */}
          <div className="home__address">
            <div className="home__key-icon">
              <FaLocationDot />
            </div>
            <h2>Address</h2>
            <p>71 Kremzow Road, Brendale</p>
            <p>Brisbane, QLD, 4500</p>
          </div>

          {/* hours */}
          <div className="home__hours">
            <div className="home__key-icon">
              <FaBusinessTime />
            </div>
            <h2>Working Hours</h2>
            <p>Mon - Fri: 8:00am - 5:00pm</p>
            <p>Saturday: 8:00am - 2:00pm</p>
            <p>Sunday & Public Holidays: Closed</p>
          </div>

          {/* appointment */}
          <div className="home__appointment">
            <div className="home__key-icon">
              <FaPhone />
            </div>
            <h2>Make an appointment</h2>
            <p>Baggi: 0435 267 495</p>
            <p>Harry: 0412 999 187</p>
            <p>Workshop: 0466 232 206</p>
          </div>
        </div>
      </section>

      {/* home page services section */}
      <section className="container-max">
        <div className="container home__div-services">
          <h2>Our Services</h2>

          <div className="home__services-text">
            <p>
              Mechanical repairs & servicing on all makes & models of
              automobiles. We use quality parts to comply with your new car log
              book service & warranty.
            </p>
            <button type="button">Find more</button>
          </div>

          {/* home services gallery */}
          <div className="home__gallery">
            <div className="home__gallery-card">
              <img src={ATS} alt="logo" />
              <h3>Auto Transmission Service</h3>
            </div>

            <div className="home__gallery-card">
              <img src={brake} alt="logo" />
              <h3>Brake Repair Pads & Rotors</h3>
            </div>

            <div className="home__gallery-card">
              <img src={Logo} alt="logo" />
              <h3>COI for Uber, Taxi & Trucks</h3>
            </div>

            <div className="home__gallery-card">
              <img src={Logo} alt="logo" />
              <h3>System Diagnosis & Repair</h3>
            </div>

            <div className="home__gallery-card">
              <img src={Logo} alt="logo" />
              <h3>Log Book Service</h3>
            </div>

            <div className="home__gallery-card">
              <img src={Logo} alt="logo" />
              <h3>Tyres & Wheel Balancing</h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
