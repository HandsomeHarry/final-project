import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videoData",
  initialState: [],
  reducers: {
    addVideoData: (state, action) => state.concat(action.payload),
    removeVideoData: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { addVideoData, removeVideoData } = videoSlice.actions;
export default videoSlice.reducer;
