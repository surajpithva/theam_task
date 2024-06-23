import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct, deleteProducts } from "../redux-toolkit/crudSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const GetProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );
  console.log(products, "products into jsx");

  useEffect(() => {
    dispatch(AllProduct());
  }, [dispatch]);

  const { deleteProd, deleteLoading, deleteError } = useSelector(
    (state) => state.deleteProduct
  );

  const deleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProducts(_id)).then(() => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  // Edit Product
  const handleEditProduct = (_id) => {
    console.log(_id);
    navigate(`/edit-product/${_id}`);
  };

  return (
    <>
      <div>
        {/* Start block */}
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
          <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              {loading && <Loader />}
              {error && <p className="text-red-500">{error}</p>}
              {!loading && !error && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="p-4">
                          Product
                        </th>
                        <th scope="col" className="p-4">
                          Category
                        </th>
                        <th scope="col" className="p-4">
                          Color
                        </th>
                        <th scope="col" className="p-4">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products &&
                        products.map((product) => (
                          <tr
                            key={product._id}
                            className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <div className="flex items-center mr-3">
                                {product.name}
                              </div>
                            </th>
                            <td className="px-4 py-3">
                              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                {product.category}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {product.color}
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {product.price}
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center space-x-4">
                                <button
                                  onClick={() => handleEditProduct(product._id)}
                                  type="button"
                                  className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 -ml-0.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                  onClick={() => deleteProduct(product._id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2 -ml-0.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* End block */}
      </div>
    </>
  );
};

export default GetProducts;
