import {STORE_COMPANY} from '../HomeConstants'

const initialState = {
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_COMPANY:
            return {
                ...state,
                response:action.payload
            }

            default:
                return state
    }
}