import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDashboardStatistics } from "api/requests";

const initialState = {
  isProfitLoading: false,
  cleanProfit: 0,
  totalProfit: 0,
  lastPayments: [],
  adminsBalance: 0,
  operatorsBalance: 0,
};

export const getProfitStats = createAsyncThunk(
  "dashboard/getProfitdata",
  getDashboardStatistics
);

export const dashboardReducer = createSlice({
  name: "dashboard/getStatistics",
  initialState,
  extraReducers: {
    [getProfitStats.pending]: (state) => {
      state.isProfitLoading = true;
    },
    [getProfitStats.fulfilled]: (state, { payload }) => {
      state.isProfitLoading = false;
      state.cleanProfit = payload?.profit;
      state.totalProfit = payload?.totalProfit;
      state.lastPayments = payload?.payments;
      state.adminsBalance = payload?.adminBalance;
      state.operatorsBalance = payload?.operatorBalance;
    },
    [getProfitStats.rejected]: (state) => {
      state.isProfitLoading = false;
    },
  },
});

export default dashboardReducer.reducer;
