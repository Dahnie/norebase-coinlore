import { createSlice } from "@reduxjs/toolkit";
import { EmptyPaginatedData } from "../../constants/EmptyPaginatedData";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  allCoinTickers: EmptyPaginatedData,
};

const CoinTickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    getAllCoinTickersSlice: (
      state = initialState,
      action: { payload: any }
    ) => {
      state.allCoinTickers = action.payload;
    },
  },
});

export default CoinTickersSlice.reducer;
export const { getAllCoinTickersSlice } = CoinTickersSlice.actions;
