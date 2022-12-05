import React from 'react'
import { Card, CardHeader, Avatar, IconButton, CardMedia, Typography, CardContent, CardActions, Checkbox } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Jordan Wilia"
          subheader="December 05, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://cdn.pixabay.com/photo/2022/11/28/23/28/mountains-7623362_960_720.jpg"
          alt="Mountain Scenary"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Loved exploring the mountain side of Asgard. Thank you Thor! Till next time ol' friend. 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post;
