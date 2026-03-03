import React,{useEffect,useState} from "react";

function useDebounce(value,delay){
   const[debouncedQuery,setDebouncedQuery]=useState(value)
     useEffect(()=>{
           const timer=setTimeout(()=>{
               setDebouncedQuery(value)
           },delay)
           return ()=>clearTimeout(timer)
       },[value])
    return debouncedQuery
}

export default useDebounce