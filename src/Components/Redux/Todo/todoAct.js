import axios from 'axios';

export const onFetchTodo=()=>{
    return(dispatch)=>{
        return axios.get("http://jsonplaceholder.typicode.com/todos")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuc(res.data))
                return res.data;
            }
            else{
                dispatch(onFetchFail(res.data));
                return false;
            }
         })
        .catch((err)=>{
            console.log(err);
        });
    }
}

export const onFetchSuc=(data)=>{
    return {
        type:"FETCH_SUC",
        payload:data,
    }
}
export const onFetchFail=(msg)=>{
    return {
        type:"FETCH_FAIL",
        payload:msg,
    }
}