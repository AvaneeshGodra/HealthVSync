import React from 'react'
import { useRef } from 'react';
import { networkOperations } from '../../../shared/services/api-client';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import  Medi  from './Medi';
const Mediorg = ({orgdata , dat}) => {

    const noteRef=useRef();
    const d=new Date();
    const todaysdate=d.toLocaleDateString();
    const click=async()=>{
     
      const consultation = {
        mid: dat.Mid,
        note: noteRef.current.value,
        docname: orgdata.docname,
        orgname: orgdata.orgname,
        date: todaysdate
      };
      try {
        const response = await networkOperations.post(
          process.env.REACT_APP_ADD_CONSULTATION,
          consultation
        ); //backend
        
  
      } catch (err) {
        console.log(err);
      }
    }
    
  
    return (
      <>
      <Medi data={dat}/>
        <TextField
          id="user_password"
          inputRef={noteRef}
          label="consultation"
          variant="standard"
        />
        <Button variant="contained" onClick={click}> enter </Button>
       
      </>
    );
}

export default Mediorg