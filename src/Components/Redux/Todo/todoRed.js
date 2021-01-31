const initState={
    todo : null,
    err : null,
    suc : null
}

export default function(state=initState,action){
    switch(action.type){
        case "FETCH_SUCCESS":
            return{
                ...state,
                todo : action.payload,
                suc : true,
            }
            case "FETCH_FAILURE":
                return{
                    ...state,
                    err : action.payload,
                }
        default:
            return state;
    }
}