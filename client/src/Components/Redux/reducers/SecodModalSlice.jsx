import { createSlice } from "@reduxjs/toolkit";

const SecomdModalData = createSlice({
  initialState: {},
  name: "SecondModal",
  reducers: {
    SecomdModal: (state, action) => {
      return action.payload;
    },
  },
});

// export the reducers and the action.. these are the actions
export const { SecomdModal } = SecomdModalData.actions;
export default SecomdModalData.reducer;
