import React from 'react';
import Card from '@mui/material/Card';
import FlourLogo from '../../Images/joyflo-bites-v3.png';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CgInstagram } from 'react-icons/cg';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card className="mr-5 ml-4 mt-5">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={FlourLogo}
          alt="Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name of Product
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
        Share 
        </Button><CgInstagram/>
      </CardActions>
    </Card>
  );
}
