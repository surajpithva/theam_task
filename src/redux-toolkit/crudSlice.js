import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// View All Product
export const AllProduct = createAsyncThunk(
  "user/AllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://crudnext.onrender.com/api/products`
      );
      console.log(response, "response");
      return response?.data.result; // return the data directly
    } catch (error) {
      // Provide a custom error message or pass the error object directly
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

//   Delete Perticular Product
export const deleteProducts = createAsyncThunk(
  "user/deleteProduct",
  async (_id) => {
    try {
      await axios.delete(`https://crudnext.onrender.com/api/products/${_id}`);
      return _id; // return the deleted product ID
    } catch (error) {
      throw error;
    }
  }
);

// Edit Perticular product

export const updateProduct = createAsyncThunk(
  "EditProduct/updateProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://crudnext.onrender.com/api/products/${product.id}`,
        product
      );
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Add new Product
export const AddNewProduct = createAsyncThunk(
  "user/AddNew",
  async (userCredential) => {
    console.log(userCredential, " in block");

    try {
      console.log(userCredential, " in block");
      const response = await axios.post(
        `https://crudnext.onrender.com/api/products`,
        userCredential
      );
      console.log(response, "main");
      return response;
    } catch (error) {
      console.log(error, "------------------error here");
      throw error;
    }
  }
);

// View Product Slice
const productSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllProduct.pending, (state) => {
        state.loading = true;
        state.products = null;
        state.error = null;
      })
      .addCase(AllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(AllProduct.rejected, (state, action) => {
        state.loading = false;
        state.products = null;
        state.error = action.payload || "Something went wrong";
      });
  },
});

//   Delete product slice
const deleteproductSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: [], // Include products in the initial state
    deleteProd: null,
    deleteLoading: false,
    deleteError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProducts.pending, (state) => {
        state.deleteLoading = true;
        state.deleteProd = null;
        state.deleteError = null;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.deleteLoading = false;
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.deleteLoading = false;
        state.deleteProd = null;
        state.deleteError = action.error.message || "Something went wrong";
      });
  },
});

// Add New Product Slice

const AddProductSlice = createSlice({
  name: "AddProducts",
  initialState: {
    AddProducts: null,
    AddProductLoading: false,
    AddProductError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddNewProduct.pending, (state) => {
        state.AddProductLoading = true;
        state.AddProducts = null;
        state.AddProductError = null;
      })
      .addCase(AddNewProduct.fulfilled, (state, action) => {
        state.AddProductLoading = false;
        state.AddProducts = action.payload;
      })
      .addCase(AddNewProduct.rejected, (state, action) => {
        state.AddProductLoading = false;
        state.AddProducts = null;
        state.AddProductError = action.payload || "Something went wrong";
      });
  },
});

// Edit Product Slice

const EditProductSlice = createSlice({
  name: "EditProduct",
  initialState: {
    UpdateProducts: null,
    UpdateProductLoading: false,
    UpdateProductError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProduct.pending, (state) => {
        state.UpdateProductLoading = true;
        state.UpdateProducts = null;
        state.UpdateProductError = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.UpdateProductLoading = false;
        state.UpdateProducts = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.UpdateProductLoading = false;
        state.UpdateProducts = null;
        state.UpdateProductError = action.payload || "Something went wrong";
      });
  },
});

export const EditProductSliceReducer = EditProductSlice.reducer;
export const AddProductSliceReducer = AddProductSlice.reducer;
export const deleteProductSliceReducer = deleteproductSlice.reducer;
export const productSliceSliceReducer = productSlice.reducer;
