import {SHOW_COMPANY} from '../CompanyConstants'

const initialState = {
    company:{},
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case SHOW_COMPANY:
            return {
                ...state,
                loading:false,
                company:action.payload
            }

            default:
                return state
    }
}

