import React, {useState,useEffect,useCallback} from "react"
// import {FighterContext} from "../context/fighter"
import VersusItem from "./VersusItem"
import Winners from "./Winners"

function Versus(){
    // const [fighters,setFighters] = useContext(FighterContext)
   
    const [fighters,setFighters] = useState([])
    const [winnerArray, setWinnerArray] = useState([])
    const[round,setRound]=useState(1)
    const [fightersArray, setFightersArray]=useState([])
    let winningValue= Math.floor(Math.random() * 120)
    
    useEffect(()=>{
    fetch("http://localhost:4000/fighters")
    .then((res)=> res.json())
    .then((data)=> setFighters(data))
},[])


  function removeWinner(winnerToRemove){
    const updatedFighters=fighters.filter(fighter => fighter !== winnerToRemove)
    setFighters(updatedFighters)

  }

   
    const [ fighter1Card, setFighter1] = useState({"id": "",
    "handle": "",
    "image": "",
    "battleCry": ""})
    const [ fighter2Card, setFighter2] = useState({"id": "",
    "handle": "",
    "image": "",
    "battleCry": ""})

    const getRandomFighter = useCallback(
        () => {
            return fighters[Math.floor(Math.random()*fighters.length)]
        },
        [fighters]
    )

    useEffect(() => {
    
        setFighter1(getRandomFighter)
        setFighter2(getRandomFighter)
           return()=>{
               setFighter1(getRandomFighter())
               setFighter2(getRandomFighter())
           }
         
    },[getRandomFighter])

    function renderFighter1(){
        if(fighter1Card === fighter2Card){
             setFighter1(getRandomFighter())
            return <VersusItem
                    fighter={fighter1Card}
            />
        }
        else{
            return <VersusItem
            fighter={fighter1Card}/>    
        } 
    } 

    function renderFighter2(){
            return <VersusItem
                fighter={fighter2Card}
        />
        }   

    function handleWinner1(){
         if (fighter1Card.favoritesNumber < winningValue){
            setFightersArray([...fightersArray,fighter1Card]) 
         } else{
             setFightersArray([...fightersArray,fighter2Card])
         }
            setRound(round +1)
            setWinnerArray([...winnerArray,fighter1Card])
            setFighter1(getRandomFighter())
            removeWinner(fighter1Card)           
     }
        
    function handleWinner2(){
        if (fighter2Card.favoritesNumber < winningValue){
           setFightersArray([...fightersArray,fighter2Card]) 
        } else{
            setFightersArray([...fightersArray,fighter1Card])
        }
            setRound(round +1)
            setWinnerArray([...winnerArray,fighter2Card])
            setFighter2(getRandomFighter())
            removeWinner(fighter2Card)    
    }
         function handleWinnerArray(){  
        if(winnerArray.length === 5){
            return<Winners 
            winnerArray={winnerArray}
            fightersArray={fightersArray}
            />         
        }
        
    }

    function renderFighterButtons(){
        return(
            <div>
            <h1 className="Winner">Pick Your Winner</h1>
            <h2 className="Winner">ROUND:{round}</h2> 
            <div className="button" id="fighter1" roll="button" onClick={handleWinner1}>{renderFighter1()}</div>
            <div className="button1" id="fighter2" roll="button" onClick={handleWinner2}>{renderFighter2()}</div>
            </div>   
        )
    }
   
    return(
        <main>
            {!fighter1Card ? <h1>Loading...</h1> : winnerArray.length <5 ? renderFighterButtons() : handleWinnerArray() }
        </main>
    )
}

export default Versus;