import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axioseConfig/instance';

// Fetch saved jobs for a user
export const getSavedJobs = createAsyncThunk(
  'savedJobs/getSavedJobs',
  async (userId) => {
    const res = await axiosInstance.get(`/savedJobs/${userId}`);
    return res.data;
  }
);

// Save a job
export const postSavedJob = createAsyncThunk(
  'savedJobs/postSavedJob',
  async ({ userId, jobId }) => {
      const res = await axiosInstance.post(`/savedJobs`, { userId, jobId });
      return res.data;
    
  }
);

// Delete a saved job bu saved job id

export const deleteSavedJob = createAsyncThunk(
  'savedJobs/deleteSavedJob',
  async (savedJobId) => {
    const res = await axiosInstance.delete(`/savedJobs/${savedJobId}`);
    return res.data;
  }
);


const savedJobsSlice = createSlice({
  name: 'savedJobs',
  initialState: {
    savedJobs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSavedJobs.fulfilled, (state, action) => {
        state.savedJobs = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getSavedJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSavedJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postSavedJob.fulfilled, (state, action) => {
        state.savedJobs.push(action.payload);
      })
      
      .addCase(postSavedJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteSavedJob.fulfilled, (state, action) => {
        state.savedJobs = state.savedJobs.filter(id => id !== action.payload.jobId);
      })
      .addCase(deleteSavedJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default savedJobsSlice.reducer;
