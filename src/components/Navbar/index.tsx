import React from 'react'
import { Grid } from '@mui/material';
import NotifyIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import { NavbarWrapper } from './styles';

const Navbar = () => {
  return (
    <NavbarWrapper container flexWrap='nowrap'>
        <Grid item xs={2}>
           <h1><span>H </span>O U R S</h1>
        </Grid>
        <Grid item container xs={4} justifyContent='space-around' alignItems='center'>
            <Grid item>Dashboard</Grid>
            <Grid item>Projects</Grid>
            <Grid item>Team</Grid>
            <Grid item>Clients</Grid>
        </Grid>
        <Grid item container xs={2} justifyContent='space-around' alignItems='center'>
            <NotifyIcon/>
            <Avatar alt="avatar img" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
            <Grid item>Mario</Grid>
        </Grid>
    </NavbarWrapper>
  )
}

export default Navbar