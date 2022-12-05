import React from 'react'
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography'
import  { Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom:"20px"
})


export const Add = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
    <Tooltip 
        onClick={e=>setOpen(true)}
        title="Delete" 
        sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", sm:30}}}
    >
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor="white" borderRadius={5} p={3}>
                <Typography variant="h6" color="gray" textAlign="center">
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar 
                        src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg"
                        sx={{width: 30, height: 30}}
                    />
                    <Typography fontWeight={500}>
                        Jordan Wilia
                    </Typography>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color="primary"/>
                    <ImageIcon color="secondary"/>
                    <VideocamIcon color="success"/>
                    <PersonAddIcon color="error"/>
                </Stack>
                <ButtonGroup 
                    fullWidth
                    variant="contained" 
                    aria-label="outlined primary button group"
                >
                    <Button>Post</Button>
                    <Button><CalendarMonthIcon/></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
  </>
  )
}
