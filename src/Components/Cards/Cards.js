import React from "react";
import images from "../../assests/index";
import "./Cards.css";
export const Cards = () => {
  return (
    <div className="Card">
      <img src={images.burger} alt="" />
      <h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
        natus! Excepturi dolores ipsa est laborum deleniti repudiandae dolore
        dolor
      </h4>
      <h4>Price:- 100</h4>
      <h5>⭐⭐⭐</h5>
    </div>
  );
};
