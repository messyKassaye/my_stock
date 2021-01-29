import {SIGN_UP,LOGIN} from '../HomeConstants'

const initialState={
    loginResponse:{},
    signUpResponse:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                loginResponse:action.payload
            }

            case SIGN_UP:
                return{
                    ...state,
                    signUpResponse:action.payload
                }

            default:
                return state
    }
}