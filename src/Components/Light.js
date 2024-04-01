import React, { useState } from "react";

// const Light = (props) => {
//   return <div>Light Mode</div>;
// };

const ToggleButton = () => {
  const [isToggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!isToggle);
  };

  return <button onClick={HandleToggle}>{isToggle ? "ON" : "OFF"}</button>;
};
// const Car = (props) => {
//   return (
//     <>
//       <h2>I am a {props.brand}!</h2>;
//     </>
//   );
// };

// export const Lights = <Car brand="Ford" />;
// export const Dark = <Car brand="Dark-Ford" />;

export default ToggleButton;
