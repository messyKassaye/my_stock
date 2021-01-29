import {combineReducers} from "redux";
import HomeLoanReducer from "../loan/state/reducers/HomeLoanReducer";
import CompanyCategoryReducer from "./reducers/CompanyCategoryReducer";
import RegistrationReducer from "./reducers/RegistrationReducer";
import SignUpAndLoginReducer from "./reducers/SignUpAndLoginReducer";

export default combineReducers({
 companyCategoryReducer:CompanyCategoryReducer,
 registrationReducer:RegistrationReducer,
 signUpLoginReduer:SignUpAndLoginReducer,
 homeLoanReducer:HomeLoanReducer
})