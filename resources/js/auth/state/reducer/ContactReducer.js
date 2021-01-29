import {STORE_CONTACT} from '../AuthConnstant'

const initialState = {
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_CONTACT:
            return {
                response:action.payload
            }

            default:
                return state
    }
}