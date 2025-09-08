import React from "react";
import Slider from "react-slick";
import "./ExpertiseSection.scss";
import Video1 from "../../assets/exprtise1.png";
import Video2 from "../../assets/exprtise2.png";
import Video3 from "../../assets/exprtise3.png";
import Video4 from "../../assets/exprtise4.png";
import Video5 from "../../assets/exprtise5.png";



const expertiseData = [
  {
    id: 1,
    title: "UPI Autopay",
    content:
      "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
      img: Video1,
  },
  {
    id: 2,
    title: "API Banking",
    content:
      "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
      img: Video2,
  },
  {
    id: 3,
    title: "Payouts",
    content:
      "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
      img: Video3,
  },
{
    id: 4,
    title: "Payouts",
    content:
      "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
        img: Video4,
  },
  {
    id: 5,
    title: "Bulk Payments",
    content:
      "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
        img: Video5,
  }
];



function ExpertiseSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="expertise-section">
      <div className="expertise-header">
        <h4 className="sub-title">Our Expertise</h4>
        <h2 className="main-title">Redefining Payment Processing for You</h2>
      </div>

      <Slider {...settings} className="expertise-slider">
        {expertiseData.map((item) => (
          <div className="expertise-card" key={item.id}>
            <div className="card-inner">
             <div> <img src="https://raw.githubusercontent.com/surendran12/uzopay/main/src/assets/tick.png" alt="" /></div>
              <img src={item.img} alt={item.title} className="card-img" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-content">{item.content}</p>
              <div className="view"> <img src="https://raw.githubusercontent.com/surendran12/uzopay/main/src/assets/arrow.png" alt="" /></div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ExpertiseSection;
