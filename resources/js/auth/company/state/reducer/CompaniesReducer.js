import {FETCH_COMPANIES} from '../CompanyConstants'

const initialState = {
    company:[],
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_COMPANIES:
            return {
                ...state,
                company:action.payload,
                loading:false
            }

            default:
                return state
    }
}