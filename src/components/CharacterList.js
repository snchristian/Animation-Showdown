import React, {useContext} from "react"
import {FighterContext} from "../context/fighter"
import VersusItem from "./ShowDownItem"
import FighterForm from "./FighterForm"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';





function CharacterList () {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      


    const [fighters]=useContext(FighterContext)
    console.log(fighters)
    
   
    const displayFighters= fighters.map(fighter => 
         <Grid key={fighter.id} item xs={2}>
         <Item> <VersusItem
               fighter={fighter}
                />   
            </Item>
        </Grid>   

     
                
        )
    return (
    <main>
        <FighterForm/>
        <Box sx={{ marginTop:"20px" }}>
      <Grid container spacing={1}>
          {displayFighters}
      </Grid>
    </Box>
    {/* flexGrow: 0.5, */}
  </main>
    )
}

export default CharacterList
