
import React from 'react'
import ShowDownItem from './ShowDownItem'

function Winners({winnerArray,fightersArray}){
    let matches = 0
    const usersWinners = winnerArray.map(winner=>
        <ShowDownItem 
        key={winner.id}
         fighter={winner}
         />)

    const actuallyWinners = fightersArray.map(fighter=>
        <ShowDownItem
        key={fighter.id}
        fighter={fighter}
        />)
   function winnersInCommon (){
       for(let i =0; i < winnerArray.length; i++){
           if(winnerArray[i] === fightersArray[i]){
               matches+=1

           }
       }
   }

   winnersInCommon()


    return(
    <main>
        <h1 className='Winner'>Here Are Your Winners</h1>
        <div className='display'>{usersWinners}</div>
        <h1 className='Winner'> Here Are The Winners Of The Rounds</h1>
        <h3 className='Winner'> You got {matches} correct</h3>
        <div className='display'>{actuallyWinners}</div>
    </main>)

}

export default Winners
