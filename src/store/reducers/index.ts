import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const reducers = combineReducers({
	taskReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;