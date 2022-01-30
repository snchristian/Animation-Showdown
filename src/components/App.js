import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Navbar from "./NavBar"
import CharacterList from "./CharacterList";
import ShowDown from "./ShowDown";
import {FighterContext} from "../context/fighter"
import React, {useContext} from "react"



function App() {

  const [fighters,setFighters] = useContext(FighterContext)

  function removeWinner(winnerToRemove){
    const updatedFighters=fighters.filter(fighter => fighter !== winnerToRemove)
    setFighters(updatedFighters)

  }
  
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/showdown" element={<ShowDown fighters={fighters} removeWinner={removeWinner}/>}/>
       <Route path="/charcterList" element={<CharacterList/>}/>
     </Routes>
    </div>
  );
}

export default App;
