import {STORE_COMPANY_FINANCE} from '../AuthConnstant'

const initialState = {
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_COMPANY_FINANCE:
            return {
                ...state,
                response:action.payload
            }
            default:
               return state
    }
}