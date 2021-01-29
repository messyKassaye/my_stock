import {combineReducers} from "redux";
import CompanyProfileReducer from "./reducer/CompanyProfileReducer";
import LoanReducer from "./reducer/LoanReducer";
import StockReducer from "./reducer/StockReducer";
import CompaniesReducer from "./reducer/CompaniesReducer";

export default combineReducers({
    stockReducer:StockReducer,
    loanReducer:LoanReducer,
    companyProfileReducer:CompanyProfileReducer,
    companyReducer:CompaniesReducer
})