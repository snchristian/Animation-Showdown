import React, {useContext,useState,useEffect } from "react"
import {FighterContext} from "../context/fighter"
import ShowDownItem from "./ShowDownItem"


function ShowDown(){
    const [fighters]=useContext(FighterContext)
    console.log(fighters)
    const [ fighter1Card, setFighter1] = useState({"id": "",
    "handle": "",
    "image": "",
    "battleCry": ""})
    const [ fighter2Card, setFighter2] = useState({"id": "",
    "handle": "",
    "image": "",
    "battleCry": ""})
    const [winnerArray, setWinnerArray] = useState([])

    function getRandomFighter(){
        return fighters[Math.floor(Math.random()*fighters.length)]
    }

    useEffect(() => {
        console.log(fighter1Card,"in useEffect")
        setFighter1(getRandomFighter())
        setFighter2(getRandomFighter())

    }, [])

    function renderFighter2(){
            return <ShowDownItem
                fighter={fighter2Card}
        />
        }        
    

    function handleWinner(event){
        const fighterType=event.target.id

        if(fighterType === "fighter1"){
            setWinnerArray([...winnerArray,fighter1Card])
        }
        else{
            setWinnerArray([...winnerArray,fighter2Card])
        }
        console.log(winnerArray)
       
        // winnerArray.push(fighters.handle)

        setFighter1(getRandomFighter())
        setFighter2(getRandomFighter())
    }

    console.log(winnerArray)

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
    function renderFighterButtons(){
        return(
            <div>
            <button className="button" id="fighter1" onClick={handleWinner}>{renderFighter1()}</button>
            <button className="button1"  id="fighter2" onClick={handleWinner}>{renderFighter2()}</button>
            </div>
            
        )
    }
    return(
        <main>
            { !fighter1Card? <h1>Is Loading</h1> : renderFighterButtons() } 
        </main>
    )
}

export default ShowDown;