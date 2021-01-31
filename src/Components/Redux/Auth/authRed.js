const initState={
    err : null,
    suc : null,
    isAuth : false,
    user : {}
}

export default function(state=initState,action){
    switch(action.type){
        case "ON_LOGSUC":
            return{
                ...state,
                isAuth : true,
                user : action.payload,
            }
        case "ON_LOGFAIL":
            return{
                ...state,
                err : action.payload
            }
        default:
            return state;
    }
}