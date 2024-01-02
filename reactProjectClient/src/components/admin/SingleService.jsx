
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import money3 from '../../assets/money3.jpg';
import { red } from '@mui/material/colors';

export default function SingleService({ service }) {
 const { id, price, duration, name, img } = service;
  const [likes, setLikes] = React.useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Card variant="soft" sx={{ width: 320 }} color="success">
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={img} srcSet={img} loading="lazy" alt="" />
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              borderRadius: '4px',
              padding: '4px 8px',
            }}
          >
            <IconButton onClick={handleLikeClick} size="small"   color="danger">
              <Favorite style={{ marginRight: '4px'}} />
            </IconButton>
            <Typography level="caption" >{likes}</Typography>
          </div>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          {name}
          <p> </p>
        </Typography>
        <Typography level="body-sm"></Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">price: {price}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">duration: {duration}</Typography>
          </CardContent>
        </CardOverflow>
       </Card>
   );
 }


