import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-Logo.svg/1024px-Pinterest-Logo.svg.png"
          alt="Pinterest Logo"
        />
      </div>
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  );
};
// fjdbcndn
export default Header;