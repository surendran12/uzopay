import React from "react";
import "./Navbar.scss";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">UzOpay</div>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Payments <FaChevronDown size={18} /></li>
        <li>Payouts</li>
        <li>Payroll</li>
        <li>Contact Us</li>
      </ul>

      <div className="burger">
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
