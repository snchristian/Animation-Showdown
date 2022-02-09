import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function VersusItem ({fighter}){

return (
<>
<Card sx={{ maxWidth: 345, marginBottom:"20px", marginTop:"30px", textAlign:"center"
}}>
      <CardActionArea>
        <Typography gutterBottom variant="h4" component="div" >
            {fighter.handle}
          </Typography>
        <CardMedia
          component="img"
          height="240"
          image={fighter.image} 
          alt={fighter.handle}
          
        />
        <CardContent>
          <Typography variant="h6" color="text.primary">
            Battle Cry: {fighter.battleCry}
          </Typography>
          <Typography variant="h6" color="text.primary" >
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
</>
    )
}

export default VersusItem;
