import React, { useEffect, useRef } from "react";
import "./ImageSection.scss";
import gsap from "gsap";
import VideoSection from "../VideoSection/VideoSection";

const ImageSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.textContent.split("") || [];
      textRef.current.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      // GSAP animation
      gsap.fromTo(
        ".char",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05, // delay between letters
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);
  
  return (
    <section className="hero-section">
      <div className="hero-bg">
      {/* <img src="src/assets/img.png" alt="" /> */}
      <VideoSection />
      </div>

      <div className="finance-hero">
      <div className="content">
        <h1 ref={textRef} className="animated-text">
          Let’s build the <br /> future of finance together
        </h1>
        <div className="btn-bg">
        <div className="btn-wrapper">
        <button className="cta-btn">
          Get Started <span>➜</span>
        </button>
        </div>
        </div>
      </div>
      </div>


    </section>
  );
};

export default ImageSection;
