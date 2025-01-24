import React from "react";
import "./Pin.css";

const Pin = ({ imageUrl, title }) => {
  return (
    <div className="pin">
      <img src={imageUrl} alt={title} className="pin-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default Pin;