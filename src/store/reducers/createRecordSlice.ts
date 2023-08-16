import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface INewRecord {
  record: {
    address: number | null;
    specialist_id: number | null;
    date: string;
    service: number | null;
  };
  isLoading: boolean,
  error: string
}

const initialState: INewRecord = {
  record: {
    address: null,
    specialist_id: null,
    date: '',
    service: null,
  },
  isLoading: false,
  error: '',
};

export const createRecordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<number>) {
      state.record.address = action.payload
    },
    addSpecialistId(state, action: PayloadAction<number>){
      state.record.specialist_id = action.payload
    },
    addDate(state, action: PayloadAction<string>){
      state.record.date = action.payload
    },
    addService(state, action: PayloadAction<number>){
      state.record.service = action.payload
    },
    deleteExpert(state) {
      state.record.specialist_id = null
    }
  },
});

export default createRecordSlice.reducer;
