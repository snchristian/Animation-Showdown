import React, {useContext,useState } from "react"
import {FighterContext} from "../context/fighter"
import VersusItem from "./ShowDownItem"
import FighterForm from "./FighterForm"

function Versus(){
    const [fighters]=useContext(FighterContext)
   
    const displayFighters= fighters.map(fighter =>
         <VersusItem
                key={fighter.id}
                fighter={fighter.handle}
                battleCry={fighter.battleCry}
                image={fighter.image}
                />   
        )
    return(
        <main>
            <FighterForm/>
            {displayFighters}
        </main>
    )
}

export default Versus