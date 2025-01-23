import Logo from "../assets/footer-logo.png";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa6";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      {/* footer row 1 */}
      <section className={styles.sectionRow1}>
        <div className={`container ${styles.containerRow1}`}>
          {/* footer row 1 column 1 */}
          <div className={`${styles.footerCol} ${styles.footerCol1}`}>
            <div className={`${styles.col1Logo}`}>
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>

            <div>
              <p>
                Mechanical repairs & servicing on all makes & models of
                automobiles. We use quality parts to comply with your new car
                log book service & warranty. We come to you wherever you are in
                Brisbane.
              </p>
            </div>
          </div>

          {/* footer row 1 column 2 */}
          <div className={`${styles.footerCol}`}>
            <h3>Contact Us</h3>

            {/* address */}
            <div className={`${styles.rowIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <FaLocationDot />
              </div>

              <div className={`${styles.col2Text}`}>
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

            {/* contact */}
            <div className={`${styles.rowIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <FaPhone />
              </div>

              <div className={styles.col2Text}>
                <p>
                  <a
                    href="tel:+61466232206"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +61 466 232 206
                  </a>
                </p>
              </div>
            </div>

            {/* email */}
            <div className={`${styles.rowIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <HiOutlineMail />
              </div>

              <div className={styles.col2Text}>
                <p>
                  <a
                    href="mailto:admin@highendautocare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    admin@highendautocare.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* footer row 1 column 3 */}
          <div className={`${styles.footerCol} ${styles.footerCol3}`}>
            <div className={`${styles.col3Text}`}>
              <h3>Opening Hours</h3>

              <p>Mon - Fri: 8:00am - 5:00pm</p>
              <p>Saturday: 8:00am - 2:00pm</p>
            </div>

            {/* social */}
            <div className={`${styles.social}`}>
              <p>
                <strong>Follow us on</strong>
              </p>

              <div className={`${styles.socialIcons}`}>
                <div className={`${styles.socialIcon}`}>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </div>

                {/* add another icon in a new div here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer row 2 */}
      <section className={styles.sectionRow2}>
        <div className={`container ${styles.containerRow2}`}>
          <p>Copyright &copy; 2021 Highend Autocare</p>
          <p>Developed by Basant Parjapat</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
