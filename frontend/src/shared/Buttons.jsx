import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';

// LOGIN REGISTER ORGANISATION BUTTONS 
const Buttons = () => {
  return (
    <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group"  >
    <Link to ='/userlogin'>
    <Button><b>User Login</b></Button>
    </Link>
    
    <Link to ='/usersignup'>
    <Button ><b>REGISTER</b></Button>
    </Link>
    
    <Link to ='/organisationlogin'>
    <Button><b>Organisation Login</b></Button>
    </Link>
    
    
  </ButtonGroup><br/>
  </>
  )
}

export default Buttons