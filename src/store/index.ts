import { configureStore } from '@reduxjs/toolkit';
import slideReducer from './slideSlice';

export default configureStore({
    reducer: {
        slide: slideReducer
    }
})