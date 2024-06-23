import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AddNewProduct } from "../redux-toolkit/crudSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.products);

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = {
        name: productName,
        color,
        category,
        price,
      };

      // Check if product with the same details already exists
      const isDuplicate = products.some(
        (product) =>
          product.name === productName &&
          product.color === color &&
          product.category === category &&
          product.price === price
      );

      if (isDuplicate) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Product",
          text: "This product already exists in the database.",
        });
        return;
      }

      const response = await dispatch(AddNewProduct(userCredential));

      if (response.payload) {
        Swal.fire({
          title: "Success!",
          text: "Your Product Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/view-product");
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error Adding Product",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ADD YOUR PRODUCT HERE
        </h2>
        <form onSubmit={handleAddProduct}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Loading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
