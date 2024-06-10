import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axioseConfig/instance";

export const fetchUser = createAsyncThunk('/users/fetchUser', async (userId) => {
    const res = await axiosInstance.get(`/users/${userId}`);
    return res.data;
});
export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const res = await axiosInstance.get('/users');
     console.log(res);
    return res.data;
});
export const registerUser = createAsyncThunk('/users/registerUser', async (user) => {
    const res = await axiosInstance.post('/users/register', user);
    return res.data;
});

export const loginUser = createAsyncThunk('/users/loginUser', async (userData) => {
    const res = await axiosInstance.post('/users/login', userData);
    return res.data;
});

export const updateUser = createAsyncThunk('/users/updateUser', async (updatedUser) => {
    const res = await axiosInstance.put('/users', updatedUser);
    return res.data;
});
const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetchUser
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Handle fetchUsers
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
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
                state.user = action.payload;
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
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});




export default userSlice.reducer;
