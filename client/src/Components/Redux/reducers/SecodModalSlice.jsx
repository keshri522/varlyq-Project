// import { createSlice } from "@reduxjs/toolkit";

// const SecondModalData = createSlice({
//   initialState: {},
//   name: "SecondModalSlice",
//   reducers: {
//     SecondModalSlice: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// // export the reducers and the action.. these are the actions
// export const { SecondModalSlice } = SecondModalData.actions;
// export default SecondModalData.reducer;

import { createSlice } from "@reduxjs/toolkit";

const SecondModalData = createSlice({
  initialState: {},
  name: "SecondModalSlice",
  reducers: {
    setSecondModalData: (state, action) => {
      return action.payload;
    },
  },
});

// export the reducers and the action.. these are the actions
export const { setSecondModalData } = SecondModalData.actions;
export default SecondModalData.reducer;
