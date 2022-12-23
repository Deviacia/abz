import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (page = 1, { rejectWithValue }) {
    try {
      const response = await fetch(`${URL}users?page=${page}&count=6`);

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

const initialState = {
  list: [],
  page: 1,
  totalPages: null,

  status: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
      state.list.sort((a, b) => (a < b ? 1 : -1));
    },

    nextPage: (state) => {
      state.page += 1;
    },

    resetList: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "resolved";
        state.totalPages = action.payload.total_pages;
        state.loading = false;
        state.list.push(...action.payload.users);
      });
  },
});

export const { nextPage, addUser, resetList } = userSlice.actions;
export default userSlice.reducer;
