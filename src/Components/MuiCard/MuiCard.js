import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { GrFavorite, GrShareOption, GrShop } from 'react-icons/gr';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {

  return (
    <Card className="mr-5 ml-4 mt-5" sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
