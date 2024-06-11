import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axioseConfig/instance";

// Register user
export const registerUser = createAsyncThunk(
  "/users/registerUser",
  async (user) => {
    const res = await axiosInstance.post("/users/register", user);
    return res.data;
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "/users/loginUser",
  async (userData) => {
    const res = await axiosInstance.post("/users/login", userData);
    return res.data;
  }
);

// Update user
export const updateUser = createAsyncThunk(
  "users/updateUser", // Action type string
  async (updatedUser) => {
  
      const res = await axiosInstance.put(
        `/users/66659f993aa76347cff49653`,
        updatedUser
      );
      return res.data;

    }
  
);





// Get all users
export const getAllUsersAction = createAsyncThunk(
  "/users/getAllUsers",
  async () => {
    const res = await axiosInstance.get("/users");
    return res.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle registerUser
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [action.payload];
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle getAllUsersAction
      .addCase(getAllUsersAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsersAction.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsersAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;



