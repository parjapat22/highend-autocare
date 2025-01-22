import { useEffect } from "react";
import Button from "../components/Button";
import ServicesSlider from "../components/ServicesSlider";
import Form from "../components/forms/Form";

import Car from "../assets/homepage_car.png";

import { FaLocationDot } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import styles from "./Home.module.css";

const Home = () => {
  // enable home page to load from top
  // page jumps to middle due to form component
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      {/* home page header section */}
      <section>
        <div className={`container ${styles.containerHeader}`}>
          <h1>We Care About Your Car</h1>

          <p>
            Mechanical repairs & servicing on all makes & models of automobiles.
            We use quality parts to comply with your new car log book service &
            warranty. We come to you wherever you are in Brisbane.
          </p>

          {/* car image */}
          <div className={styles.headerImg}>
            <img src={Car} alt="car" />
          </div>
        </div>
      </section>

      {/* home page key info section */}
      <section>
        <div className={`container ${styles.containerInfo}`}>
          {/* address */}
          <div className={`${styles.infoCol}`}>
            <div className={`${styles.infoIcon}`}>
              <FaLocationDot />
            </div>

            <h3>Address</h3>
            <p>
              71 Kremzow Road, Brendale <br />
              Brisbane, QLD, 4500
            </p>
          </div>

          {/* hours */}
          <div className={`${styles.infoCol}`}>
            <div className={`${styles.infoIcon}`}>
              <FaBusinessTime />
            </div>

            <h3>Working Hours</h3>
            <p>Mon - Fri: 8:00am - 5:00pm</p>
            <p>Saturday: 8:00am - 2:00pm</p>
            <p>Sunday & Public Holidays: Closed</p>
          </div>

          {/* appointment */}
          <div className={`${styles.infoCol}`}>
            <div className={`${styles.infoIcon}`}>
              <FaPhone />
            </div>

            <h3>Make an Appointment</h3>
            <p>Baggi: 0435 267 495</p>
            <p>Harry: 0412 999 187</p>
            <p>Workshop: 0466 232 206</p>
          </div>
        </div>
      </section>

      {/* services section */}
      <section>
        <div className={`container ${styles.containerServices}`}>
          <h2>Our Services</h2>

          <div className={styles.servicesInfo}>
            <p>
              Mechanical repairs & servicing on all makes & models of
              automobiles. We use quality parts to comply with your new car log
              book service & warranty.
            </p>

            <Button>Find more</Button>
          </div>

          {/* home services gallery */}
          <ServicesSlider />
        </div>
      </section>

      {/* home page request call back section */}
      <section className={`${styles.sectionCallback}`}>
        <div className={`container ${styles.containerCallback}`}>
          {/* call back text */}
          <div className={styles.callbackText}>
            <h2>Why Choose Us</h2>
            <p>
              Our amazing team of Highend Autocare is highly experienced and
              qualified to provide you best automotive service. We, Bagi and
              Harry are fully qualified mechanics with over 12 years of
              experience in the automotive industry. We are passionate to help
              the local community with reasonable prices and high-quality work.
            </p>
          </div>

          {/* callback form */}
          <div className={styles.callbackForm}>
            <h2>Request Callback</h2>
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
