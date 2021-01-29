import {FETCH_LOAN_TYPE, STORE_LOAN} from '../CompanyConstants'

const initialState = {
    loanType:[],
    loanTypeLoading:true,
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_LOAN_TYPE:
            return {
                ...state,
                loanType:action.payload,
                loanTypeLoading:false
            }

        case STORE_LOAN:
            return{
                ...state,
                response:action.payload
            }
            default:
                return state
    }
}