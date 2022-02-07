import React,{useState,useContext} from "react";
import { FighterContext} from "../context/fighter";

function FighterForm(){
    const [fighters,setFighters]=useContext(FighterContext)

    function handleAddFighter(newFighter){
        setFighters([...fighters,newFighter].reverse())
    }

    const [newFighterData,setNewFighter]=useState({
        handle:"",
        image:"",
        battleCry:"",
        favoritesNumber:"",

    });

    function handleChange(event){
        setNewFighter({
            ...newFighterData,
            [event.target.name]:event.target.value
        });
    }
    function handleSubmit(event){
        event.preventDefault();
        setNewFighter({
            handle:"",
            image:"",
            battleCry:"",
            favoritesNumber:"",

        })
        const newFighter={
            id:fighters.id+1,
            handle:newFighterData.handle,
            image:newFighterData.image,
            battleCry:newFighterData.battleCry,
            favoritesNumber:newFighterData.favoritesNumber,
        }
        console.log(newFighter)
        fetch("http://localhost:4000/fighters",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newFighter),
        })
        .then((r)=>r.json())
        .then((newFighter)=>handleAddFighter(newFighter))
    }
    return(
        <div>
           
            <h1>New Fighter</h1> 
            <form  className="inline" onSubmit={handleSubmit}>
                <label>Handle:
                    <input
                    type="text"
                    name="handle"
                    value={newFighterData.handle}
                    onChange={handleChange}/>
                </label>
                <label>Image:
                    <input
                    type="text"
                    name="image"
                    value={newFighterData.image}
                    onChange={handleChange}/>
                </label>
                <label>BattleCry:
                    <input
                    type="text"
                    name="battleCry"
                    value={newFighterData.battleCry}
                    onChange={handleChange}/>
                </label>
                <label>FavoritesNumber:
                    <input
                    type="text"
                    name="favoritesNumber"
                    value={newFighterData.favoritesNumber}
                    onChange={handleChange}/>
                </label>
                <button type="submit">Add Fighter</button>
            </form>
        </div>
    )
}

export default FighterForm;