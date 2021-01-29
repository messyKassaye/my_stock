import {ME} from '../AuthConnstant'

const initialState = {
    loading:true,
    user:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case ME:
            return {
                ...state,
                loading:false,
                user:action.payload
            }

            default:
                return state
    }
}