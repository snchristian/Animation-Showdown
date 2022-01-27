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
            <h3>Who do think would win when we pit your favortie characters from different animated shows against each other</h3>
            <button className="begin" onClick={handleRedirect}>Start</button>
            </div>
            
        </main>

    )
}
export default Home;