import React, { useState } from "react";
import "./PaymentTabs.scss";
import { FaCreditCard, FaWallet, FaFileInvoice, FaRobot } from "react-icons/fa";

const tabData = [
  {
    id: "payments",
    title: "Payments",
    icon: <FaCreditCard />,
    heading: "Elevate Your Online Store's Payment Experience",
    content:
      "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities.",
    points: [
      { icon: <FaCreditCard />, text: "Optimize Your Checkout" },
      { icon: <FaFileInvoice />, text: "Fast and Secure" },
      { icon: <FaRobot />, text: "Smooth Integration" },
    ],
    image: "/images/payment.png",
  },
  {
    id: "payout",
    title: "Payout",
    icon: <FaWallet />,
    heading: "Payout",
    content:
    "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities.",
    points: [
        { icon: <FaCreditCard />, text: "Optimize Your Checkout" },
        { icon: <FaFileInvoice />, text: "Fast and Secure" },
        { icon: <FaRobot />, text: "Smooth Integration" },
    ],
    image: "/images/payout.png",
  },
  {
    id: "payroll",
    title: "Payroll",
    icon: <FaFileInvoice />,
    heading: "PayRoll",
    content:
    "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities.",
    points: [
        { icon: <FaCreditCard />, text: "Optimize Your Checkout" },
        { icon: <FaFileInvoice />, text: "Fast and Secure" },
        { icon: <FaRobot />, text: "Smooth Integration" },
    ],
    image: "/images/payroll.png",
  },
  {
    id: "ai-banking",
    title: "AI Banking",
    icon: <FaRobot />,
    heading: "AI Banking",
    content:
    "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities.",
    points: [
        { icon: <FaCreditCard />, text: "Optimize Your Checkout" },
        { icon: <FaFileInvoice />, text: "Fast and Secure" },
        { icon: <FaRobot />, text: "Smooth Integration" },
    ],
    image: "/images/aibanking.png",
  },
];

function PaymentTabs() {
  const [activeTab, setActiveTab] = useState("payments");
  const activeContent = tabData.find((tab) => tab.id === activeTab);

  return (
    <section className="payment-section">
      <div className="payment-header">
        <p className="sub-title">Enhancing Payments</p>
        <h2 className="main-title">Powering Payments Across Industries</h2>
      </div>

      <div className="tabbg">
      <div className="tabs">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
     

      <div className="tab-content">
        <div className="tab-left">
          <h3>{activeContent.heading}</h3>
          <p>{activeContent.content}</p>
          <ul>
            {activeContent.points.map((p, idx) => (
              <li key={idx}>
                {p.icon}
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <button className="cta-btn">Get Started →</button>
        </div>
        <div className="tab-right">
        <span> <img src="https://raw.githubusercontent.com/surendran12/uzopay/main/src/assets/paymentmethod.png" alt="" /></span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PaymentTabs;
