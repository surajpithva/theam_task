import Dark from "./Components/Dark";
import { Header } from "./Components/Header";
import ToggleButton from "./Components/Light";
import Light, { myElement } from "./Components/Light";
import Toggle from "./Components/Toggle";

import "./style.css";
// function App() {
//   return <h1>hello suraj</h1>;
// }

const AppLayout = () => {
  return (
    <>
      <Header />
      <Toggle />
    </>
  );
};

export default AppLayout;
