import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";


const initialState = {
  categoryData: null,
  isLoading: true,
  isError: false,
  error: null,
};

export const getCategory = createAsyncThunk(
  "CategorySlice",
  async (token, { rejectWithValue }) => {
    console.log("🚀 ~ token:", token)
    try {
      const url = `/api/category`;
      const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({token:token})  
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }
      const result = await response.json();
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const category = createSlice({
  name: 'getCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categoryData = action.payload;
      })
      .addCase(getCategory.rejected, (state, action:any) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload ;
      });
  },
});

export default category.reducer;