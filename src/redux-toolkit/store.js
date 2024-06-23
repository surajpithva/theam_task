import { configureStore } from "@reduxjs/toolkit";
import {
  AddProductSliceReducer,
  EditProductSliceReducer,
  productSliceSliceReducer,
} from "./crudSlice";
import { deleteProductSliceReducer } from "./crudSlice";

const store = configureStore({
  reducer: {
    allProducts: productSliceSliceReducer,
    deleteProduct: deleteProductSliceReducer,
    AddProduct: AddProductSliceReducer,
    EditProduct: EditProductSliceReducer,
  },
});

export default store;
