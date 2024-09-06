import { createSlice } from "@reduxjs/toolkit";
import { decreaseSales, increaseSales } from "./mobileReducer";


const initialState = {
    sales: 0
}

const coverReducer = createSlice({
    name: "cover",
    initialState: initialState,
    reducers: {
        setCoverSales: (state, action) => {
            state.sales = action.payload;
        },
        increaseCoverSales: (state) => {
            state.sales = state.sales + 1;
        },
        decreaseCoverSales: (state) => {
            state.sales = state.sales - 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(increaseSales, (state) => { state.sales++ })
            .addCase(decreaseSales, (state) => { state.sales-- })
    }
});

export const {
    setSales,
    increaseCoverSales,
    decreaseCoverSales
} = coverReducer.actions;

export default coverReducer.reducer;