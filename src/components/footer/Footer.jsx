import React from "react";
import "./footer.css";
import Logo from "../../assets/footer_logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <section className="footer__row1">
        <div className="container footer__row1__container">
          {/* footer row 1 column 1 */}
          <div className="footer__col1">
            <div className="footer__logo">
              <img src={Logo} alt="logo" />
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
              <div className="footer__social-icon">
                <FaFacebook />
              </div>
              <div className="footer__social-text">
                <h2>Facebook</h2>
              </div>
            </div>
          </div>

          {/* footer row 1 column 2 */}
          <div className="footer__col2">
            <h2>Our Information</h2>
            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaLocationDot />
              </div>
              <div className="footer__address-text">
                <p>71 Kremzow Road, Brendale</p>
                <p>Brisbane, QLD, 4500</p>
              </div>
            </div>

            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaPhone />
              </div>
              <div className="footer__contact-text">
                <p>+61 466 232 206</p>
              </div>
            </div>

            <div className="footer__social">
              <div className="footer__col2-icon">
                <HiOutlineMail />
              </div>
              <div className="footer__email-text">
                <p>admin@highendautocare.com</p>
              </div>
            </div>

            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaRegClock />
              </div>
              <div className="footer__timing-text">
                <p>Mon - Fri: 8:00am - 5:00pm</p>
              </div>
            </div>

            <div className="footer__social">
              <div className="footer__col2-icon">
                <FaRegClock />
              </div>
              <div className="footer__timing-text">
                <p>Saturday: 8:00am - 2:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer row 2 */}
      <section className="footer__row2">
        <div className="container footer__row2__container">
          <p>Copyright &copy; 2021 Highend Autocare</p>
          <p>Developed by Basant Parjapat</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
