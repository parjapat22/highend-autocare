import styles from "./Footer.module.css";
import Logo from "../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";

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

            <div className={`${styles.col1Text}`}>
              <p>
                Mechanical repairs & servicing on all makes & models of
                automobiles. We use quality parts to comply with your new car
                log book service & warranty. We come to you wherever you are in
                Brisbane.
              </p>
            </div>

            <div className={`${styles.colIconText}`}>
              <div className={`${styles.col1Icon}`}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>

              <h2>Facebook</h2>
            </div>
          </div>

          {/* footer row 1 column 2 */}
          <div className={`${styles.footerCol} ${styles.footerCol2}`}>
            <h2>Our Information</h2>

            {/* address */}
            <div className={`${styles.colIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <FaLocationDot />
              </div>

              <div className={`${styles.col2Text}`}>
                <a
                  href="https://maps.app.goo.gl/K21BN7RxWdnDNWDq6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    71 Kremzow Road, Brendale <br />
                    Brisbane, QLD, 4500
                  </p>
                </a>
              </div>
            </div>

            {/* contact */}
            <div className={`${styles.colIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <FaPhone />
              </div>

              <div className={`${styles.col2Text}`}>
                <p>+61 466 232 206</p>
              </div>
            </div>

            {/* email */}
            <div className={`${styles.colIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <HiOutlineMail />
              </div>

              <div className={`${styles.col2Text}`}>
                <p>admin@highendautocare.com</p>
              </div>
            </div>

            {/* workshop hours */}
            <div className={`${styles.colIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <FaRegClock />
              </div>

              <div className={`${styles.col2Text}`}>
                <p>Mon - Fri: 8:00am - 5:00pm</p>
              </div>
            </div>

            <div className={`${styles.colIconText}`}>
              <div className={`${styles.col2Icon}`}>
                <FaRegClock />
              </div>

              <div className={`${styles.col2Text}`}>
                <p>Saturday: 8:00am - 2:00pm</p>
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
