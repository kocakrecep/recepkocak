import { combineReducers } from "redux";
import listContractReducer from "./listContractReducer";
import listNewContractReducer from "./listNewContractReducer";
import splitChangeReducer from "./splitChangeReducer";
const rootReducer = combineReducers({
  listContractReducer,
  listNewContractReducer,
  splitChangeReducer,
});

export default rootReducer;
