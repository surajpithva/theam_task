import React, { useState } from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </>
    </div>
  );
};

const DarkColor = { background: "red" };
const LightColor = { background: "yellow" };

export const Toggle = () => {
  const [isToggle, setToggle] = useState("Light");

  const HandleToggle = () => {
    setToggle(isToggle === "Light" ? "Dark" : "Light");
    document.body.classList.toggle("dark-mode");
  };
  return (
    <>
      <button onClick={HandleToggle}>{isToggle}</button>
    </>
  );
};
