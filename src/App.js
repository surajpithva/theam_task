// import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddProduct from "./pages/AddProduct";
import GetProducts from "./pages/product";
import EditProduct from "./pages/EditProduct";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product" element={<GetProducts />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
