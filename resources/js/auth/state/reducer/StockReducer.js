import {STORE_STOCK,FETCH_STOCKS} from '../AuthConnstant'

const initialState ={
    response:{},
    stocks:[],
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_STOCK:
            return {
                ...state,
                response:action.payload
            }
       case FETCH_STOCKS:
                return{
                    ...state,
                    loading:false,
                    stocks:action.payload
                }


            default:
                return state
    }
}