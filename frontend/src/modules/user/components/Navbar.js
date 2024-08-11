// import React from 'react'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { Avatar } from '@mui/material';
import {default as NavLogo} from './navlogo.png'


const appBarStyle = {
  backgroundColor: '#CBF1F5', // Specify your desired color
  margin:'10px',
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () =>{

  const iconStyle = {
    fontSize: '3.5rem',
    color:'black' 
  };

  const user = {
    name: 'Avaneesh',
    profilePicture: 'path_to_profile_picture.jpg'
  };


  return (
    <Box sx={{ flexGrow: 1, paddingRight: '1rem' ,  }}>
      <AppBar sx={{borderRadius:'10px', padding:'0.4rem 0rem'}} position="static" style={appBarStyle}>
        <Toolbar >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}

            style={{color:'black'}}
          >
          <img src={NavLogo} style={{height:'3.5rem'}} />
          </Typography>

          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={user.name} src={user.profilePicture} style={{background:'#28aadc'}}/>
            <Typography variant="subtitle1" style={{ marginLeft: '10px', color:'black' }}>
              {user.name}
            </Typography>
          </div>


        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
