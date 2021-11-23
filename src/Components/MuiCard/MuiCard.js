import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemPage from '../ItemPurchase/ItemPurchase';
import { useHistory } from 'react-router-dom';
import { GrFavorite, GrShareOption, GrShop } from 'react-icons/gr';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemPurchase from '../ItemPurchase/ItemPurchase';

export default function MultiActionAreaCard(props) {

   let history = useHistory();
 //pass a state to item page
   const onItemClick = () => { 
    history.push({pathname:"/Item",state: props.name});
  }


  return (

    <Card className="mr-5 ml-4 mt-5" sx={{ maxWidth: 200 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="Product"  
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" onClick={onItemClick}>
           {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button size="large" color="primary">
            <GrFavorite/>
        </Button>
       
    </Card>
  );
}
