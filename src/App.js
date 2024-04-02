import { Header, Toggle } from "./Components/Header/Header";
import { Cards } from "./Components/Cards/Cards";
import "./style.css";
// function App() {
//   return <h1>hello suraj</h1>;
// }

const AppLayout = () => {
  return (
    <>
      <Header />
      <Toggle />
      <div className="cardsList">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default AppLayout;
