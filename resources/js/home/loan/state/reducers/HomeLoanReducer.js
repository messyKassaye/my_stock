import {FETCH_HOME_LOAN} from '../HomeLoanConstants'

const initialState = {
    loans:{},
    loading:true

}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_HOME_LOAN:
            return {
                ...state,
                loans:action.payload,
                loading:false
            }

            default:
                return state
    }
}