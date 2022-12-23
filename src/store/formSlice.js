import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const fetchPositions = createAsyncThunk(
  "form/fetchPositions",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${URL}positions`);

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

export const postUser = createAsyncThunk(
  "users/postUsers",
  async function ({ user, token }, { rejectWithValue, dispatch,  }) {
    try {
      const response = await fetch(`${URL}users`, {
        method: "POST",
        body: user,
        headers: {
          Token: token,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    positions: [],
    isSuccess: false,

    status: null,
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPositions.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(fetchPositions.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.status = "resolved";
        state.positions = action.payload.positions;
        state.loading = false;
      })

      .addCase(postUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.loading = false;
        state.isSuccess = true;
      });
  },
});

export const {} = formSlice.actions;
export default formSlice.reducer;
