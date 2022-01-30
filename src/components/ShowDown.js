import React, {useContext,useState,useEffect,useCallback} from "react"
// import {FighterContext} from "../context/fighter"
import ShowDownItem from "./ShowDownItem"
import Winners from "./Winners"



function ShowDown({fighters,removeWinner}){
    // const [fighters] = useContext(FighterContext)
    
    const [winnerArray, setWinnerArray] = useState([])
    
    const [ fighter1Card, setFighter1] = useState({"id": "",
    "handle": "",
    "image": "",
    "battleCry": ""})
    const [ fighter2Card, setFighter2] = useState({"id": "",
    "handle": "",
    "image": "",
    "battleCry": ""})
    
    
    // function getRandomFighter(){
    //     return fighters[Math.floor(Math.random()*fighters.length)]
    // }

    const getRandomFighter = useCallback(
        () => {
            return fighters[Math.floor(Math.random()*fighters.length)]
        },
        [fighters]
    )



    useEffect(() => {
        // if(fighter1Card && fighter2Card === {"id": "", "handle": "", "image": "", "battleCry": ""})
           setFighter1(getRandomFighter())
           setFighter2(getRandomFighter())
         
    },[getRandomFighter])

    function renderFighter2(){
            return <ShowDownItem
                fighter={fighter2Card}
        />
        }        

    function handleWinner1(event){
        const fighterType=event.target.id

        if(fighterType === ""){
            setWinnerArray([...winnerArray,fighter1Card])
        }
        else if ((fighterType === "fighter2"))
        {
            setWinnerArray([...winnerArray,fighter2Card])
        }
        console.log(winnerArray)
        setFighter1(getRandomFighter())
        removeWinner(fighter1Card)
    }

    function handleWinner2(event){
        const fighterType=event.target.id

        if(fighterType === "fighter1"){
            setWinnerArray([...winnerArray,fighter1Card])
        }
        else if ((fighterType === ""))
        {
            setWinnerArray([...winnerArray,fighter2Card])
        }
        console.log(winnerArray)
        setFighter2(getRandomFighter())
        removeWinner(fighter2Card)
    }

    function renderFighter1(){
        if(fighter1Card === fighter2Card){
             setFighter1(getRandomFighter())
            return <ShowDownItem
                    fighter={fighter1Card}
            />
        }
        else{
            return <ShowDownItem
            fighter={fighter1Card}/>    
        } 
    } 
    
    function handleWinnerArray(){
        if(winnerArray.length === 5){
            return <Winners 
            winnerArray={winnerArray}
            />
        }
    }

    function renderFighterButtons(){
        return(
            <div>
            <h1 className="Winner">Pick Your Winner</h1>
            <div className="button" id="fighter1" onClick={handleWinner1}>{renderFighter1()}</div>
            <div className="button1" id="fighter2" onClick={handleWinner2}>{renderFighter2()}</div>
            </div>
            
        )
    }
   
    return(
        <main>
            {/* { !fighter1Card? <h1>Is Loading</h1> : renderFighterButtons() } */}
            {!fighter1Card ? <h1>Is Loading</h1> : winnerArray.length <5 ? renderFighterButtons() : handleWinnerArray() }
            {/* {handleWinnerArray()} */}
            
        </main>
    )
}

export default ShowDown;