import { configureStore } from '@reduxjs/toolkit';
import wordDayReducer from './slices/wordDaySlice'; 

const store = configureStore({
  reducer: {
    wordDay: wordDayReducer,  
  },
});

export default store;