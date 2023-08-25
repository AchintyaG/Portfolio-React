import React from "react";
import '../style.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Praveen Kumar Gautam</h1>
      <div className="menu">
        <a href="#">Home  </a>
        <a href="#">About  </a>
        <a href="#">Contact  </a>
        <a href="#">Blog</a>
      </div>
    </nav>
  );
};
export default Navbar;
