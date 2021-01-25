import {combineReducers} from "redux";
import StockReducer from "./reducer/StockReducer";


export default combineReducers({
    stockReducer:StockReducer
})