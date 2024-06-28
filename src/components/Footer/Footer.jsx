import "./footer.css";

import BreatheEasyLogo from "../../assets/BreatheEasyLogoOutline.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <img className="Logo-image" src={BreatheEasyLogo} width="200px" />

              <p className="footer-text">
                Tracks real-time AQI using APIs, recommends fast-growing
                air-purifying tree species to improve local air quality, and
                features a user-friendly interface with location input, AQI
                display, target AQI setting, and tree recommendations.
              </p>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Useful Links</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <i className="bx bx-chevron-right"></i>

                  <a href="./Hero/Hero.jsx" className="span">
                    Search Your City
                  </a>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <i className="bx bx-chevron-right"></i>

                  <span className="span">Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <i className="bx bx-chevron-right"></i>

                  <span className="span">AQI Table</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <i className="bx bx-chevron-right"></i>
                  <span className="span">FAQ</span>
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Reach us on</p>
              </li>

              <li>
                <ul className="social-list">
                  <li>
                    <a href="">
                      <i className="bx bxl-instagram-alt socialIcon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <i className="bx bxl-youtube socialIcon"></i>
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <i className="bx bxl-facebook-square socialIcon"></i>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer-item">
                <a href="mailto:contact@example.com" className="footer-link"><i className='bx bxl-gmail'></i>ishanvi.chauhan@gmail.com</a>
              </li>

              <li className="footer-item">
                <a href="tel:+152534468854" className="footer-link"><i className="bx bxs-phone"></i>+91 6393564879</a>
              </li>
            </ul>

            <address className="address">
              <div className="map">
                <iframe
                  title="abes"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8889002703554!2d77.4437602149526!3d28.633091682417557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d2df45167%3A0xe0ac343085e12a8f!2sABES%20ENGINEERING%20COLLEGE%2C%20NH%2024%2C%20Chipiyana%20Buzurg%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1666931394472!5m2!1sen!2sin"
                  width="80%"
                  height="200px"
                  // style="border: 0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </address>
          </div>
        </div>

        <br />
      </footer>
    </>
  );
};

export default Footer;
