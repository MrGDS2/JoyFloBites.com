import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { GrFavorite, GrShareOption, GrShop } from 'react-icons/gr';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {

   let history = useHistory();
      //pass a state to item page
   const onItemClick = () => { 
    history.push({pathname:"/Item",state: { name: props.name, img: props.img , ingredients: props.des}});
  }


  return (

    <Card className="mr-5 ml-4 mt-5" sx={{ maxWidth: 200 }} >
      <CardActionArea>
    
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="Product" 
          onClick={onItemClick} 
          /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" onClick={onItemClick}>
           {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button size="large" color="primary" className="like_btn">
            <GrFavorite/>
        </Button>
    </Card>
  );
}