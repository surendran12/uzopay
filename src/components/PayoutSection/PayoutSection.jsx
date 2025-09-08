import React, { useEffect, useRef } from "react";
import "./PayoutSection.scss";
import gsap from "gsap";

function PayoutSection() {

  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section className="payout-section">
      <div className="content">
        <span className="badge">Payout Service Centric</span>
        <h2>Streamlined for Payout Ease and Efficiency</h2>

        <div className="features">
          <div className="feature">
            <h4>Comprehensive Documentation</h4>
            <p>
              Access clear, detailed documentation that simplifies integration
              and accelerates your payout setup.
            </p>
          </div>

          <div className="feature">
            <h4>Quick Start SDKs</h4>
            <p>
              Leverage our ready-to-use SDKs for various programming languages,
              enabling quick and smooth payout implementation.
            </p>
          </div>

          <div className="feature">
            <h4>Sandbox Environment</h4>
            <p>
              Test and refine your payout integration in a secure sandbox
              environment before going live, ensuring a seamless launch.
            </p>
          </div>
        </div>

        <button className="cta-btn">
          Get Started <span>➜</span>
        </button>
      </div>

      <div className="hex-grid">
      <img src="https://github.com/surendran12/uzopay/blob/main/src/assets/Hex.png" alt=""ref={imgRef} className="animated-img"/>
      </div>
    </section>
  );
};

export default PayoutSection;
