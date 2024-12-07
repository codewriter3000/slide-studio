import { createSlice } from '@reduxjs/toolkit';

const slideSlice = createSlice({
    name: 'slide',
    initialState: {
        currentSlide: 0
    },
    reducers: {
        nextSlide: state => {
            state.currentSlide += 1;
        },
        previousSlide: state => {
            state.currentSlide -= 1;
        },
        goToSlide: (state, action) => {
            state.currentSlide = action.payload;
        }
    }
});

export const { nextSlide, previousSlide, goToSlide } = slideSlice.actions;
export default slideSlice.reducer;