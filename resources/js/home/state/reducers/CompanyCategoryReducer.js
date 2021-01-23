import {FETCH_COMPANY_CATEGORY} from '../HomeConstants'
const initialState = {
    categories:[],
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_COMPANY_CATEGORY:
            return {
                ...state,
                categories:action.payload,
                loading:false
            }

            default:
                return state
    }
}