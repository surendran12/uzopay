import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Banner.scss";

function Banner() {
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
          duration: 0.2,
//stagger: 0.09, 
//ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <section className="banner">
      <div className="text">
        <p className="tagline">Pay Smart. Pay Fast</p>
        <h2 ref={textRef} className="animated-text">
          End-to-End Payout & Payroll <br /> Solutions for Digital Era.
        </h2>
        <p className="desc">
          Optimize transactions and payouts with our secure, efficient payment
          gateway solution, ensuring smooth operations.
        </p>
        <div className="buttons">
          <button className="gradient-btn">
            Reach Out <span>→</span>
          </button>
          <button className="gradient-fill-btn font-small">
            Get Started <span>→</span>
          </button>
        </div>
      </div>

      <div className="image">
        <img src="https://raw.githubusercontent.com/surendran12/uzopay/main/src/assets/Hero-Img.png" alt="" />
        <span className="label top">Sales Product Screening</span>
        <span className="label left">Payout Process</span>
        <span className="label bottom">Transactions</span>
      </div>
    </section>
  );
}

export default Banner;
