import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMemberId {
  memberId: number | null;
}

const initialState: IMemberId = {
  memberId: null,
};

export const memberIdSlice = createSlice({
  name: "member-id",
  initialState,
  reducers: {
    changeMemberId(state, action: PayloadAction<number>) {
      state.memberId = action.payload;
    },
  },
});

export default memberIdSlice.reducer;
