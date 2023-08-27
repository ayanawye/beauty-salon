import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMemberId {
  memberId: number | null;
  changeDate: any[];
}

const initialState: IMemberId = {
  memberId: null,
  changeDate: [],
};

export const memberIdSlice = createSlice({
  name: "member-id",
  initialState,
  reducers: {
    changeMemberId(state, action: PayloadAction<number>) {
      state.memberId = action.payload;
    },
    addDate(state, action: PayloadAction<any>) {
      state.changeDate.push(action.payload);
    },
    deleteDate(state, action: PayloadAction<number>) {
      state.changeDate = state.changeDate.filter((item: any) =>
        item?.id !== action.payload
      );
    },
    updateDate(state)  {
      state.changeDate = []
    }
  },
});

export default memberIdSlice.reducer;
