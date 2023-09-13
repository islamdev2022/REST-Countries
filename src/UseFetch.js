import { useState,useEffect } from "react";
const UseFetch =(url)=>{
    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [Error,setError]=useState(null)

    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if (!res.ok){
                    throw Error('Error: Could not fetch Data')
                }
                return res.json();
            }).then(data=>{
                setData(data)
                setIsPending(false)
                setError(null)
            }).catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    },[url])
    return {data,isPending,Error};
}

export default UseFetch;