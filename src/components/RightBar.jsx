import React from 'react'
import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={7}>
            <Avatar sx={{ bgcolor: "red" }} alt="Remy Sharp" src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg" />
            <Avatar sx={{ bgcolor: "blue" }} alt="Travis Howard" src="https://avatars.dicebear.com/api/adventurer/your-cuastom-seed.svg" />
            <Avatar sx={{ bgcolor: "green" }} alt="Cindy Baker" src="https://avatars.dicebear.com/api/adventurer/youar-cuastom-seed.svg" />
            <Avatar sx={{ bgcolor: "yellow" }} alt="Agnes Walker" src="https://avatars.dicebear.com/api/adventurer/youar-caZuastom-seed.svg" />
            <Avatar sx={{ bgcolor: "grey" }} alt="Trevor Henderson" src="https://avatars.dicebear.com/api/adventurer/youar-caZuasatom-seed.svg" />
            <Avatar sx={{ bgcolor: "red" }} alt="Trevor Henderson" src="https://avatars.dicebear.com/api/adventurer/youar-caZuaasatom-seed.svg" />
            <Avatar sx={{ bgcolor: "red" }} alt="Trevor Henderson" src="https://avatars.dicebear.com/api/adventurer/youar-caaZuaasatom-seed.svg" />
            <Avatar sx={{ bgcolor: "red" }} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        <Typography variant="h6" fontWeight={100}  mt={2} mb={2}>Popular Posts</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img 
                src='https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg'
                alt='friends'
              />
            </ImageListItem>
            <ImageListItem>
              <img 
                src='https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072__340.jpg'
                alt='friends'
              />
            </ImageListItem>
            <ImageListItem>
              <img 
                src='https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234__340.jpg'
                alt='friends'
              />
            </ImageListItem>
          </ImageList>
        <Typography variant="h6" fontWeight={100}  mt={2} mb={2}>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
      </Box>
    </Box>
  )
}
