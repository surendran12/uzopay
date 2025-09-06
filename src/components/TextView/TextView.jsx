import React, { useEffect, useRef } from "react";
import "./TextView.scss";
import gsap from "gsap";

function TextView() {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.textContent.split("") || [];
      textRef.current.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      gsap.fromTo(
        ".char",
        { opacity: 0, y: 50, color: "#888", textShadow: "0px 0px 0px transparent" },
        {
          opacity: 1,
          y: 0,
          color: "#fff",
          textShadow: "0px 0px 8px rgba(141, 68, 255, 0.8), 0px 0px 15px rgba(0, 240, 255, 0.6)",
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section className="glow-text font-small ">
      <h1 ref={textRef} className="animated-text">
        We focus on your finances, <br />
        you focus on what matters <br />
        most. Your finance our pride, Always Safe & Reliable.
      </h1>
    </section>
  );
};

export default TextView;
