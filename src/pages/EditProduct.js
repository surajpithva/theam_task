import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProduct } from "../redux-toolkit/crudSlice";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state?.allProducts);
  console.log(products, "find product");

  const existingProduct = products?.find((product) => product._id === id);

  const [updateName, setUpdateName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");


  const [loading, setLoading] = useState(false);
  const [isCategoryChanged, setIsCategoryChanged] = useState(false); // To track if the name has been changed
  const [isNameChanged, setIsNameChanged] = useState(false); // To track if the name has been changed
  const [isPriceChanged, setIsPriceChanged] = useState(false); // To track if the name has been changed
  const [isColorChanged, setIsColorChanged] = useState(false); // To track if the name has been changed
  
  useEffect(() => {
    if (existingProduct) {
      setUpdateName(existingProduct.name);
      setCategory(existingProduct.category);
      setColor(existingProduct.color);
      setPrice(existingProduct.price)
    }
  }, [existingProduct]);

  const handleEditProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedProduct = {
        id: existingProduct._id,
        name: updateName,
        color,
        price,
        category
      };

      // Check if name is changed
      if (!isNameChanged) {
        Swal.fire({
          title: "No Changes Made",
          text: "You haven't made any changes to the product name.",
          icon: "info",
          confirmButtonText: "OK",
        });
        return;
      }

      const response = await dispatch(updateProduct(updatedProduct));
      if (response.payload) {
        Swal.fire({
          title: "Success!",
          text: "Product updated successfully",
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
        text: "Error updating product",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!existingProduct) {
    // If product with the given ID is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>
        <form onSubmit={handleEditProduct}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={updateName}
              onChange={(e) => {
                setUpdateName(e.target.value);
                setIsNameChanged(true);               }}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setIsCategoryChanged(true);               }}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                setIsColorChanged(true);               }}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setIsPriceChanged(true);               }}
              className="w-full px-4 py-2 border rounded mt-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Loading..." : "Edit Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
