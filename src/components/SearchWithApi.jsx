import React,{useState} from "react";
function SearchWithApi(){
    const[query,setQuery]=useState("")
    return <main>
    <h2>Search With API</h2>
    <div>
<input value={query}/>
    </div>
    </main>
}

export default SearchWithApi;