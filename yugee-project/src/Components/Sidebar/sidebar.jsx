import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Following</li>
        <li>Saved</li>
        <li>Discover</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default Sidebar