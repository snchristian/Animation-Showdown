import React from "react"

function VersusItem ({fighter,battleCry,image}){

 
    return(
        <>
        <h1>Figther: {fighter}</h1>
        <img src={image} alt={fighter}/>
        <h3>Battle Cry: {battleCry}</h3>
        </>
    )
}

export default VersusItem;