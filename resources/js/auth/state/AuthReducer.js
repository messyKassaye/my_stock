import {combineReducers} from "redux";
import DialogReducer from "../../state/reducers/DialogReducer";
import CompanyReducer from "../company/state/CompanyReducer";
import CompanyFinanceReducer from "./reducer/CompanyFinanceReducer";
import ContactReducer from "./reducer/ContactReducer";
import StockReducer from "./reducer/StockReducer";
import UserData from "./reducer/UserData";


export default combineReducers({
    stockReducer:StockReducer,
    userData:UserData,
    contactReducer:ContactReducer,
    companyFinanceReducer:CompanyFinanceReducer,
    dialogReducer:DialogReducer,
    companyReducer:CompanyReducer
})