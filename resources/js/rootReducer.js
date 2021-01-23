import {combineReducers} from "redux";
import HomeReducer from "./home/state/HomeReducer";

export default combineReducers({
    homeReducer:HomeReducer
})