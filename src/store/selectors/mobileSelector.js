import { createSelector } from "@reduxjs/toolkit";

const selectMobileStore = (state) => state.mobile;

export const selectMobileSales = createSelector(selectMobileStore, (state) => state.sales);