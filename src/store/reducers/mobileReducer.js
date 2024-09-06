import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sales: 0
}

const mobileReducer = createSlice({
    name: "mobile",
    initialState: initialState,
    reducers: {
        setSales: (state, action) => {
            state.sales = action.payload;
        },
        increaseSales: (state) => {
            state.sales = state.sales + 1;
        },
        decreaseSales: (state) => {
            state.sales = state.sales - 1;
        }
    }
});

export const {
    setSales,
    increaseSales,
    decreaseSales
} = mobileReducer.actions;

export default mobileReducer.reducer;