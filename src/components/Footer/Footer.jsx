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

            <div className="tree">
              <img src="src\assets\tree.png" alt="" />
            </div>
          </div>
        </div>

        <br />
      </footer>
    </>
  );
};

export default Footer;
