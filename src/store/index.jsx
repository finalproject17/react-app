import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './Slices/FetchJobsSlice';
import formReducer from './Slices/FormJobsSlice';
import userReducer from './Slices/usersSlice' ;
import companiesReducer from './Slices/companiesSlice'
const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        jobForm: formReducer,
        users: userReducer,
        companies : companiesReducer,
    },
  });
  
  export default store;
  