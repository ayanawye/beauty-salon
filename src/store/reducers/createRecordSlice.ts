import { INewRecord } from './createRecordSlice';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface INewRecord {
  record: {
    address: number;
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
    addSpecialistId(state, action: PayloadAction<number>){
      state.record.specialist_id = action.payload
    },
    addDate(state, action: PayloadAction<string>){
      state.record.date = action.payload
    },
    addService(state, action: PayloadAction<string>){
      state.record.service = action.payload
    }
  },
});

export default createRecordSlice.reducer;
