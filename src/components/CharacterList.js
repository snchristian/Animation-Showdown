import React, {useContext} from "react"
import {FighterContext} from "../context/fighter"
import VersusItem from "./VersusItem"
import FighterForm from "./FighterForm"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function CharacterList () {
    const [fighters]=useContext(FighterContext)

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin:"10px"
      }));
      
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
    
  </main>
    )
}

export default CharacterList
