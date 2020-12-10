

export const ACTION_USER_LOGIN_SUCCESS='ACTION_USER_LOGIN_SUCCESS';
export const ACTION_USER_LOGIN_FAILED='ACTION_USER_LOGIN_FAILED';
export const ACTION_USER_LOGOUT='ACTION_USER_LOGOUT';


export const login=(username:string,password:string)=>{
    if(username.length===password.length && username!==password)
        return {type:ACTION_USER_LOGIN_SUCCESS, payload:username};
    else
        return {type:ACTION_USER_LOGIN_FAILED};
}


export const logout=()=>{
    
    return {type:ACTION_USER_LOGOUT};
}