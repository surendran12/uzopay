import React from "react";
import Slider from "react-slick";
import "./Testimonials.scss";
import Video1 from "../../assets/client.png";

// Sample data
const testimonials = [
  {
    id: 1,
    name: "Mickael Grants",
    role: "CEO",
    feedback:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      img: Video1,
    rating: 5,
  },
  {
    id: 2,
    name: "Mickael Grants",
    role: "CEO",
    feedback:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      img: Video1,
    rating: 5,
  },
  {
    id: 3,
    name: "Mickael Grants",
    role: "CEO",
    feedback:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      img: Video1,
    rating: 4,
  },
  {
    id: 4,
    name: "Mickael Grants",
    role: "CEO",
    feedback:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      img: Video1,
    rating: 4,
  },
];

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendArrows: (container) => (
      <div className="custom-arrows">{container}</div>
    ),
    prevArrow: <button className="arrow prev">❮</button>,
    nextArrow: <button className="arrow next">❯</button>,
  };

  return (
    <section className="testimonials">
      <div className="header">
        <span className="sub-title">Client Feedbacks</span>
        <h2 className="main-title">Trusted by Businesses Like Yours</h2>
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimoialbg">
            <p className="feedback">{item.feedback}</p>
            <div className="user-info">
              {/* <img src={item.img} alt={item.name} className="avatar" /> */}
               <img src="https://raw.githubusercontent.com/surendran12/uzopay/main/src/assets/client.png" alt="AI Robot" />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < item.rating ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
