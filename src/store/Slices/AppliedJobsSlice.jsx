import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axioseConfig/instance';


export const fetchAppliedJobsByJobSeeker = createAsyncThunk(
  'appliedJobs/fetchAppliedJobsByJobSeeker',
  async ({ userId, page, limit }) => {
      const response = await axiosInstance.get(`/appliedJobs/get/${userId}`, { params: { page, limit } });
      console.log(response.data.data);
      return response.data.data;

  }
);
export const applyForJob = createAsyncThunk(
    'appliedJobs/applyForJob',
    async ({ userId, jobId }) => {
     
        const response = await axiosInstance.post('/appliedJobs', { userId, jobId });
        console.log(response.data.data._id);
        return response.data.data._id;
    
    }
  );
  

  
  export const deleteAppliedJob = createAsyncThunk(
    'appliedJobs/deleteAppliedJob',
    async (applicationId) => {
        const response = await axiosInstance.delete(`/appliedJobs/${applicationId}`);
        return response.data.data;
    
    }
  );
  
  const appliedJobsSlice = createSlice({
    name: 'appliedJobs',
    initialState: {
      appliedJobs: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(applyForJob.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(applyForJob.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.appliedJobs.push(action.payload);
        })
        .addCase(applyForJob.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(fetchAppliedJobsByJobSeeker.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAppliedJobsByJobSeeker.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.appliedJobs = action.payload; // Update appliedJobs with fetched data
        })
        .addCase(fetchAppliedJobsByJobSeeker.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message; // Handle error state if needed
        })
        .addCase(deleteAppliedJob.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(deleteAppliedJob.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.appliedJobs = state.appliedJobs.filter(
            (job) => job._id !== action.meta.arg
          );
        })
        .addCase(deleteAppliedJob.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });
  
  export default appliedJobsSlice.reducer;