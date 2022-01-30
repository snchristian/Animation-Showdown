
import React from 'react'
import ShowDownItem from './ShowDownItem'

function Winners({winnerArray,fighter}){
    const displayWinners = winnerArray.map(winner=>
        <ShowDownItem 
        key={winner.id}
         fighter={winner}
         />

        )

    return(
        <div>{displayWinners}</div>
    )

}

export default Winners
