import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import './MuiCard.scss';


export default function MultiActionAreaCard(props) {

  let history = useHistory();
  //pass a state to item page
  const onItemClick = () => {
    history.push({ pathname: "/item", state: { name: props.name, img: props.img, ingredients: props.des, price: props.price, isCookie: props.isCookie } });
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
        <CardContent className="card-bg">
          <Typography gutterBottom variant="h5" component="div" className="card-text" onClick={onItemClick}>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}