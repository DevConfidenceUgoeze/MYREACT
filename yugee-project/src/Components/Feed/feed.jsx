import React from "react";
import Pin from "../../components/Pin";
import "./Feed.css";

const Feed = () => {
  const pins = [
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 1" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 2" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 3" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 4" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 5" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 6" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 7" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 8" },
    { imageUrl: "https://via.placeholder.com/300", title: "Pin 9" },
  ];

  return (
    <div className="feed">
      {pins.map((pin, index) => (
        <Pin key={index} imageUrl={pin.imageUrl} title={pin.title} />
      ))}
    </div>
  );
};

export default Feed;