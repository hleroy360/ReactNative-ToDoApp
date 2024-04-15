import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";
import locationReducer from "./LocationReducer";

const rootReducer = combineReducers({
    todoReducer,
    locationReducer
})

export default rootReducer