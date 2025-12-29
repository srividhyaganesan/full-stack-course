import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CardComponent({info}) {
  const weatherImages = {
  hot: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80",
  cold: "https://images.unsplash.com/photo-1608889175123-66f7e3e49c8f?auto=format&fit=crop&w=800&q=80",
  rainy: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  humid: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  windy: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  foggy: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
};
    
  return (
    <div className='Infobox'>
        <br></br>
      <Card >
        <CardMedia
          component="img"
          height="180"
          image={info.humidity>80?weatherImages.humid: info.temp>30?weatherImages.hot:info.temp_min>15 && info.temp_max<30 ? weatherImages.windy:
          weatherImages.rainy
          }
          alt={info.city}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            
                <p>temparature: {info.temp}</p>
                <p>temp_max: {info.temp_max}</p>
                <p>temp_min: {info.temp_min}</p>
                <p>humidity: {info.humidity}</p>
                <p>The weather is {info.weather} and feels like :{info.feels_like}</p>
            

          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}