import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

export interface INewRecord {
  address: number | null;
  members: number[];
  free_time_id: number[];
  services: number[];
  fio: string;
  email: string;
  phone_number: string;
  comment: string;
}

const initialState: INewRecord = {
  address: null,
  members: [],
  free_time_id: [],
  services: [],
  fio: "",
  email: "",
  phone_number: "",
  comment: "",
};

export const postRecord = createAsyncThunk(
  "record/postRecord",
  async (data: INewRecord, { rejectWithValue }) => {
    try {
      const res = await axios.post("https://kudryashka.pythonanywhere.com/bookings/create/", data);
      return res.data;
    } catch (error) {
      return rejectWithValue("Не удалось создать запись");
    }
  }
);


export const createRecordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<number>) {
      state.address = action.payload;
    },
    addSpecialistId(state, action: PayloadAction<number>) {
      state.members.push(action.payload);
    },
    addDate(state, action: PayloadAction<number>) {
      state.free_time_id.push(action.payload);
    },
    addService(state, action: PayloadAction<number>) {
      state.services.push(action.payload);
    },
    addFio(state, action: PayloadAction<string>) {
      state.fio = action.payload;
    },
    addEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    addNumber(state, action: PayloadAction<string>) {
      state.phone_number = action.payload;
    },
    addComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    deleteExpert(state, action: PayloadAction<number>) {
      state.members = state.members.filter((el) => el !== action.payload);
    },
    deleteService(state, action: PayloadAction<number>) {
      state.services = state.services.filter((el) => el !== action.payload);
    },
    deleteDate(state, action: PayloadAction<number>) {
      state.free_time_id = state.free_time_id.filter((el) => el !== action.payload);;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postRecord.fulfilled, () => {
      return { ...initialState };
    });    
  },
  
});

export default createRecordSlice.reducer;