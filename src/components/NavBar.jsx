import React from 'react'
import { useState } from 'react';
import { Box, AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Mail from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
}))

export const NavBar = () => {

    const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                MUI Project
            </Typography>
            <DeviceHubIcon sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder="search..."/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar 
                    sx={{width:30, height:30}} 
                    src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg"
                    onClick={e=>setOpen(true)}
                    />
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Typography variant="span">
                    Jordan
                </Typography>
                    <Avatar 
                        sx={{width:30, height:30}} 
                        src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg"
                    />
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
