import {combineReducers} from "redux";
import AuthReducer from "./auth/state/AuthReducer";
import HomeReducer from "./home/state/HomeReducer";

export default combineReducers({
    homeReducer:HomeReducer,
    authReducer:AuthReducer
})