import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/BreatheEasyLogo.png";
import "./header.css";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "#D8EFD3",
      duration: 0.1,
      height: "100px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });

    gsap.to("#main", {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
      },
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <div id="nav">
        <div className="logo-container">
          <img src={logo} className="logo" />
        </div>
        <h4><Link to="/">HOME</Link></h4>
        <h4><Link to="/about">ABOUT</Link></h4>
        <h4>FEATURES</h4>
        <h4>CONTACT US</h4>
        <h3>LOGIN</h3>
        <a href="#">
          <div className="btn-yellow" id="btn">
            Register Here
          </div>
        </a>
      </div>

      <div id="page1">
        <h3>Breathe Easy</h3>
        <p>Track, Plant and Learn for Cleaner Air</p>

        <div id="get">
          <a href="#BreatheSearch">
            <div className="btn-yellow" id="btn">
              Get Started
            </div>
          </a>
          <a href="#aqi">
            <p>Learn More →</p>
          </a>
        </div>
      </div>
    </>

    // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    // <script src="script.js"></script>
  );
};

export default Header;
