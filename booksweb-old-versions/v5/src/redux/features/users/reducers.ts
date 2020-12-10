
import * as ACTIONS from './actions';

interface Action{
    type:string,
    payload?:any;
}

export const currentUserReducer=(initialState:string|null=null,action:Action)=>{

    switch(action.type){
        case ACTIONS.ACTION_USER_LOGIN_SUCCESS:
            return action.payload;
        case ACTIONS.ACTION_USER_LOGIN_FAILED:
        case ACTIONS.ACTION_USER_LOGOUT:
            return null;
        default:
            return initialState; //return same object you received. this tells redux reducer has not changed anything
    }
}
