export const onLogin=(data,history)=>{
    return(dispatch)=>{
        const token=JSON.parse(localStorage.getItem("user"));
        if(data.password===token.password){
            dispatch(onLogSuc(data));
            history.push("/")
        }
        else{
            dispatch(onLogFail("Incorrect Username or Password"));
            history.push("/login")
        }
    }
}

export const onLogSuc=(data)=>{
    return{
        type:'ON_LOGSUC',
        payload:data
    }
}

export const onLogFail=(msg)=>{
    return{
        type:'ON_LOGFAIL',
        payload:msg
    }
}