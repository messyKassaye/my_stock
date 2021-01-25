import {STORE_COMPANY,SELECT_REGIONS,FETCH_COMPANY} from '../HomeConstants'

const initialState = {
    response:{
        status:false,
        message:''
    },
    regions:{},
    regionsLoading:true,
    company:[],
    companyLoading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_COMPANY:
            return {
                ...state,
                response:action.payload
            }

            case FETCH_COMPANY:
                return {
                    ...state,
                    company:action.payload,
                    companyLoading:false
                }

            case SELECT_REGIONS:
                return {
                    ...state,
                    regions:action.payload,
                    regionsLoading:false
                }

            default:
                return state
    }
}