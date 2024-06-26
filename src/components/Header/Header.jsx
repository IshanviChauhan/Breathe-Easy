import "./header.css";
import logo from "../../assets/BreatheEasyLogo.png"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header=() =>{
    useEffect(() => {
        gsap.to("#nav", {
          backgroundColor: "#F6E6CB",
          duration: 0.5,
          height: "80px",
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
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
    return(
        <>
        <div id="nav">
        <div className="logo-container">
            <img src={logo} className="logo" />
        </div>
        <h4>HOME</h4>
        <h4>ABOUT</h4>
        <h4>FEATURES</h4>
        <h4>CONTACT US</h4>
        <h3>LOGIN</h3>
        <a href="https://www.linkedin.com/in/zakir-uddin/" target="_blank" className="no-underline">
            <div className="btn-pink" id="btn">Register Here</div>
        </a>
    </div>


    <div id="main">
        <div id="page1">
            <h3>Breathe Easy</h3>
            <p>Track,Plant and Learn for Cleaner Air</p>
    
            <div id="get">
                <a href="https://www.linkedin.com/in/zakir-uddin/" target="_blank" className="no-underline">
                    <div className="btn-pink" id="btn">Get Started</div>
                </a>
                <a href="#learn-more">
                    <p>Learn More →</p>
                </a>
            </div>
        </div>
        <div id="page2"></div>
    </div>
    </>




    // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    // <script src="script.js"></script>
    )
}

export default Header;