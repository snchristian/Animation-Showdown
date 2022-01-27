import React,{createContext,useState,useEffect} from "react";

const FighterContext = createContext()

function FighterProvider({children}){
    const [fighter,setFighters] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:4000/fighters")
        .then((res)=> res.json())
        .then((data)=> setFighters(data))
    },[])

    const value=[fighter,setFighters]

    return(
        <FighterContext.Provider value={value}>
            {children}
        </FighterContext.Provider>
    )
}

export {FighterProvider,FighterContext}