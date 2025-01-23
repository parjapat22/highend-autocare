import { FaFacebook } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import styles from "./TopBanner.module.css";

const TopBanner = () => {
  return (
    <section className={`${styles.sectionBanner}`}>
      <div className={`container ${styles.containerBanner}`}>
        {/* column 1 meta icon*/}
        <div className={`${styles.bannerIcon} ${styles.metaIcon}`}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>

        {/* column 2 workshop hours*/}
        <div>
          {/* weekday hours */}
          <div className={styles.rowIconText}>
            <div className={`${styles.bannerIcon} ${styles.hoursIcon}`}>
              <FaRegClock />
            </div>

            <div className={styles.hours}>
              <p>Mon - Fri: 8:00am - 5:00pm</p>
            </div>
          </div>

          {/* weekend hours */}
          <div className={styles.rowIconText}>
            <div className={`${styles.bannerIcon} ${styles.hoursIcon}`}>
              <FaRegClock />
            </div>

            <div className={styles.hours}>
              <p>Saturday: 8:00am - 2:00pm</p>
            </div>
          </div>
        </div>

        {/* column 3 workshop address*/}
        <div className={styles.rowIconText}>
          <div className={`${styles.bannerIcon} ${styles.addressIcon}`}>
            <FaLocationDot />
          </div>

          <div className={styles.address}>
            <p>
              <a
                href="https://maps.app.goo.gl/K21BN7RxWdnDNWDq6"
                target="_blank"
                rel="noopener noreferrer"
              >
                71 Kremzow Road, Brendale
                <br />
                Brisbane, QLD, 4500
              </a>
            </p>
          </div>
        </div>

        {/* column 4 contact number*/}
        <div className={styles.rowIconText}>
          <div className={`${styles.bannerIcon} ${styles.contactIcon}`}>
            <FaPhone />
          </div>

          <div className={styles.contact}>
            <p>
              <a
                href="tel:+61466232206"
                target="_blank"
                rel="noopener noreferrer"
              >
                0466 232 206
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
