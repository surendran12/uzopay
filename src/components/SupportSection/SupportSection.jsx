import React, { useEffect, useRef } from "react";
import "./SupportSection.scss";
import gsap from "gsap";

const cards = [
  {
    img: "./../assets/Heroshadow.png",
    title: "Optimize customer journeys",
    desc: "Streamlined transactions enhancing efficiency and customer satisfaction.",
    button: "Explore →",
  },
  {
    title: "Faster Processing Time",
    desc: "Quick and efficient payment processing for a seamless user experience.",
    button: "Learn more →",
  },
  {
    title: "Flexible Solutions",
    desc: "Customizable options to meet the unique needs of your business.",
    button: "Explore more →",
  },
  {
    title: "Effortless Integration",
    desc: "Simple API integration with your existing systems and platforms.",
    button: "Learn more →",
  },
];

const SupportSection = () => {
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
          duration: 0.1,
          stagger: 0.01,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <section className="support-section">
      <div className="header">
      
        <p className="subtitle">Reasons to Partner</p>
        <h2 h2 ref={textRef} className="animated-text">
          Exceptional Support for Your <br /> Success
        </h2>
      </div>

     <div className="supportbg">
     <div className="cards">

  <div className="row">
    <div className="col left">
      <div className="card">
      <img src="src/assets/Video.png" alt="AI Robot" />
      <h3 className="gradient-text">
      Optimize <span>customer journeys</span>
    </h3>
        <p>
          Streamlined transactions enhancing efficiency and customer
          satisfaction.
        </p>
        <button>Explore →</button>
      </div>
    </div>

    <div className="col right">
      <div className="card">
      <h3 className="gradient-text">
      Faster Processing Time
    </h3>
    <p>
          Quick and efficient payment processing for a seamless user experience.
        </p>
        <h3></h3>
        <button>Learn more →</button>
    <p> <img src="src/assets/Video1.png" alt="AI Robot" /></p>
       
       
     
      </div>
    </div>
  </div>

  {/* Row 2 */}
  <div className="row">


    <div className="col right">
      <div className="card">

        
      <h3 className="gradient-text">
      Effortless Integration
    </h3>
    <p>
    Simple API integration with your existing systems and platforms.
        </p>
       
        <button>Learn more →</button>
    <p> <img src="src/assets/Video3.png" alt="" /></p>
     <br/>
      </div>
    </div>

    <div className="col left">
      <div className="card">
      
      <h3 className="gradient-text">
      Flexible Solutions
    </h3>
        <p>
        Customizable options to meet the unique needs of your business.
        </p>
        <button>Explore more →</button>
        <h3></h3>
        <img src="src/assets/Video4.png" alt="AI Robot" />

      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default SupportSection;
