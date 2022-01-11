import React,{createContext,useState,useEffect} from "react";

const FighterContext = createContext()

function FighterProvider({children}){
    const [fighters,setFighters]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/fighters")
        .then((res)=> res.json())
        .then((data)=> setFighters(data))
    },[])

    const value=[fighters,setFighters]

    return(
        <FighterContext.Provider value={value}>
            {children}
        </FighterContext.Provider>
    )
}

export {FighterProvider,FighterContext}