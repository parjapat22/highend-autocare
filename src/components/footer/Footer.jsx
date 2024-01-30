import React from "react";
import "./footer.css";
import Logo from "../../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* footer row 1 */}
      <section className="container-max footer-max__row1">
        <div className="container footer__row1">
          {/* footer row 1 column 1 */}
          <div className="footer__col1">
            <div className="footer__logo">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>

            <div className="footer__text">
              <p>
                Mechanical repairs & servicing on all makes & models of
                automobiles. We use quality parts to comply with your new car
                log book service & warranty. We come to you wherever you are in
                Brisbane.
              </p>
            </div>

            <div className="footer__social">
              <div className="icon-link footer__col1-icon">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>

              <div className="footer__social-text">
                <h2>Facebook</h2>
              </div>
            </div>
          </div>

          {/* footer row 1 column 2 */}
          <div className="footer__col2">
            <h2>Our Information</h2>

            {/* address */}
            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaLocationDot />
              </div>
              <div className="footer__address-text">
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

            {/* contact */}
            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaPhone />
              </div>
              <div className="footer__contact-text">
                <p>+61 466 232 206</p>
              </div>
            </div>

            {/* email */}
            <div className="footer__social">
              <div className="footer__col2-icon">
                <HiOutlineMail />
              </div>
              <div className="footer__email-text">
                <p>admin@highendautocare.com</p>
              </div>
            </div>

            {/* workshop hours */}
            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaRegClock />
              </div>
              <div className="footer__hours-text">
                <p>Mon - Fri: 8:00am - 5:00pm</p>
              </div>
            </div>

            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaRegClock />
              </div>
              <div className="footer__hours-text">
                <p>Saturday: 8:00am - 2:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer row 2 */}
      <section className="container-max footer-max__row2">
        <div className="container footer__row2">
          <small>Copyright &copy; 2021 Highend Autocare</small>
          <small>Developed by Basant Parjapat</small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
