import { combineReducers } from "@reduxjs/toolkit";
import UserInputData from "./User";
import SecondModalData from "./SecodModalSlice";

const rootReducers = combineReducers({
  // this is user here the state which will handle all the logic of storeLoginUser reducers
  userdata: UserInputData,
  secondmodal: SecondModalData,
});
export default rootReducers;
