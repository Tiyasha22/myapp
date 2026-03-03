
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
function SearchWithApi() {
    const [query, setQuery] = useState("")
    
    const [result, setResult] = useState([])
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null)

    const debouncedQuery=useDebounce(query.trim(),500)
    useEffect(() => {
        
         if (debouncedQuery.length<2) {setResult([]); setLoading(false);setError(null);
            return;};
         const controller=new AbortController();

         const fetchData=async()=>{
             setLoading(true);setError(null);
            try{ const res=await  fetch( `https://dummyjson.com/users/search?q=${debouncedQuery}`,{signal:controller.signal});
            const data=await res.json();
           
            setResult(data);}
           catch(err){
            if(err.name !=="AbortError"){
                setError("Failed to fetch results");
            }
           }finally{
            setLoading(false)
           }
         }
      fetchData();
      return ()=>controller.abort()
    }, [debouncedQuery]

    )
    return <main>
        <h2>Search With API</h2>
        <div>
            <input value={query} placeholder="Enter your query" onChange={(e) => setQuery(e.target.value)} />
        </div>
        {loading && <p>Loading...</p> }
        {error && <p>{error}</p>}
         {!loading && result.length === 0 && debouncedQuery && (
        <p>No results</p>
      )}

        {result.map((item)=><div key={item.id}>{item.name}</div>)}
    </main>
}

export default SearchWithApi;