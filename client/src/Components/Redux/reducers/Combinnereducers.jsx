import { combineReducers } from "@reduxjs/toolkit";
import UserInputData from "./User";
import SecomdModalData from "./SecodModalSlice";
import ThirdModalData from "./ThridModalslice";
const rootReducers = combineReducers({
  // this is user here the state which will handle all the logic of storeLoginUser reducers
  userdata: UserInputData,
  secondmodal: SecomdModalData,
  thridmodal: ThirdModalData,
});
export default rootReducers;
