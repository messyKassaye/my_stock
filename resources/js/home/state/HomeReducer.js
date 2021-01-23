import {combineReducers} from "redux";
import CompanyCategoryReducer from "./reducers/CompanyCategoryReducer";
import RegistrationReducer from "./reducers/RegistrationReducer";

export default combineReducers({
 companyCategoryReducer:CompanyCategoryReducer,
 registrationReducer:RegistrationReducer
})