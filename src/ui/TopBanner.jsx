import React from "react";
import "./topbanner.css";
import { FaFacebook } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const TopBanner = () => {
  return (
    <section className="container-max banner-max">
      <div className="container banner">
        {/* column 1 meta icon*/}
        <div className="banner__meta-icon">
          <FaFacebook />
        </div>

        {/* column 2 workshop hours*/}
        <div className="banner__hours">
          <div className="banner__column">
            <div className="banner__hours-icon">
              <FaRegClock />
            </div>
            <div className="banner__hours-text">
              <p>Mon-Fri: 8:00am - 5:00pm</p>
            </div>
          </div>

          <div className="banner__column">
            <div className="banner__hours-icon">
              <FaRegClock />
            </div>
            <div className="banner__hours-text">
              <p>Saturday: 8:00am - 2:00pm</p>
            </div>
          </div>
        </div>

        {/* column 3 workshop address*/}
        <div className="banner__column">
          <div className="banner__address-icon">
            <FaLocationDot />
          </div>
          <div className="banner__address-text">
            <a
              href="https://maps.app.goo.gl/K21BN7RxWdnDNWDq6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>71 Kremzow Road, Brendale</p>
              <p>Brisbane, QLD, 4500</p>
            </a>
          </div>
        </div>

        {/* column 4 contact number*/}
        <div className="banner__column">
          <div className="banner__contact-icon">
            <FaPhone />
          </div>
          <div className="banner__contact-text">
            <p>0466 232 206</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
