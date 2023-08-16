import { INewRecord } from './createRecordSlice';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface INewRecord {
  record: {
    address: string;
    specialist_id: number;
    date: string;
    service: string;
  };
  isLoading: boolean,
  error: string
}

const initialState: INewRecord = {
  record: {},
  isLoading: false,
  error: '',
};

export const createRecordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<string>) {
      state.record.address = action.payload
    },
  },
});

export default createRecordSlice.reducer;
