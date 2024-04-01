import React, { useState } from "react";

// export default function ToggleButton() {
//   const [text, setText] = useState('On');

//   const handleClick = () => {
//     setText(text === 'On' ? 'Off' : 'On');
//   };

//   return (
//     <button onClick={handleClick}>{text}</button>
//   );
// }

const Toggle = () => {
  const [isToggle, setToggle] = useState("On");

  const HandleToggle = () => {
    setToggle(isToggle === "On" ? "Off" : "On");
  };
  return (
    <>
      <h1>{isToggle} </h1>
      <button onClick={HandleToggle}>{isToggle}</button>
    </>
  );
};

export default Toggle;
