import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const fetchToken = createAsyncThunk(
  "token/fetchToken",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${URL}token`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = response.json();

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,

    status: null,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(fetchToken.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = "resolved";
        state.token = action.payload.token;
        state.loading = false;
      });
  },
});

export const {} = tokenSlice.actions;
export default tokenSlice.reducer;
