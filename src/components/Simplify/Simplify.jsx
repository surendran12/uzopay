import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Simplify.scss";

function Simplify() {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.textContent.split("") || [];
      textRef.current.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");
      gsap.fromTo(
        ".char",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);
  return (
    <section className="simplify-section">
      <div className="simplify-left">
        <span className="tag">Reliable, and Efficient</span>
        <span> <img src="https://github.com/surendran12/uzopay/blob/main/src/assets/SimplifyArrow.svg" alt="" /></span>
        <h1 ref={textRef} className="animated-text">
          Simplify the <br /> payments process
        </h1>
        <p>Tools crafted to simplify and enhance your payout processes.</p>
      </div>

      {/* Right Content */}
      <div className="simplify-right">
        <div className="card-container">
        <span> <img src="https://github.com/surendran12/uzopay/blob/main/src/assets/SimplifySettings.png" alt="" /></span>
        </div>
      </div>

    
    </section>
  );
};

export default Simplify;
