import {OPEN_DIALOG} from '../Constants'

const initialState = {
    showData:{
        show:false,
        maxWidth:'md',
        fullScreen:false,
        title:'',
        page:null
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case OPEN_DIALOG:
            return{
                ...state,
                showData:action.payload
            }

            default:
                return state
    }
}