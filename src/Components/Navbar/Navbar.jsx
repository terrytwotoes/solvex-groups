import React, { Component } from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-items">
      <ul>
        <li> <a href="#" className="items">About Us</a></li>
        <li> <a href="#" className="items">Products</a></li>
        {/* <li>
          <a href="#" className="logo">
            <img src="http://www.sme.in/solvexengg/images/headerlogo.png" alt=""/></a>
        </li> */}
        <li> <a href="#" className="items">LOGO</a></li>
        <li> <a href="#" className="items">Contact Us</a></li>
        <li> <a href="#" className="items">Enquiry</a></li>
      </ul>
      </div>
    </div>
  );
}