import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { isCartVisible : false },
    reducers : {
        toggle(state){
            state.isCartVisible = !state.isCartVisible
        }
    }
});
export default uiSlice;
export const uiActions = uiSlice.actions;
