import { createSlice } from "@reduxjs/toolkit";

const UserInputData = createSlice({
  initialState: {},
  name: "UserData",
  reducers: {
    FirstModal: (state, action) => {
      return action.payload;
    },
  },
});

// export the reducers and the action.. these are the actions
export const { FirstModal } = UserInputData.actions;
export default UserInputData.reducer;
