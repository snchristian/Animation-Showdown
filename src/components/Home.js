import React from "react";
import {useNavigate} from "react-router-dom"

function Home(){

    const history=useNavigate()

    function handleRedirect(){
        history("/showdown")
    }


    return(
        <main className="home">
            <div className="image">
            <h1 className="title">Animation Showdown</h1>
            <h3>Who do you think would win when we pit your favorite characters from different animated shows against each other. After 5 rounds, a Random Winner will be picked. Do you think you have the wit to select all 5 Winners</h3>
            <button className="begin" onClick={handleRedirect}>Start</button>
            </div> 
        </main>

    )
}
export default Home;