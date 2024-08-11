import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Buttons from '../../../shared/Buttons';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import { networkOperations } from '../../../shared/services/api-client.js';
import MainPage from '../../organization/pages/MainPage';

const Organisationlogin = () => {
  const [mess,setMess]=useState('');
  const [org,setOrgdata]=useState("");

  const emailRef=useRef();
  const passwordRef=useRef();
  
  const submit=async()=>{
    const userInfo={
      'password':passwordRef.current.value,
      'email':emailRef.current.value
    }
    
    try{
      const response= await networkOperations.post(process.env.REACT_APP_ORGLOGIN,userInfo);//backend

      if(response.data.message=='invalid userid or password'){
        setMess(response.data.message);
      }
      else{
        setOrgdata(response.data.orgdata);
        localStorage.setItem('temp', JSON.stringify(response.data.orgdata));
        localStorage.setItem("flag",'true');
      }
    }
    catch(err){
      console.log(err);
      setMess('login fails');
    }
  }
  const logout=()=>{
      localStorage.setItem('flag','false');
      localStorage.removeItem('temp')
      window.location.reload();
  }

  const containerStyle = {
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '100%',
    maxWidth: '400px',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    marginTop: '20px',
    width: '100%',
  };

  if(localStorage.getItem("flag")=='true'){
    return(
      <>
        <MainPage orgdata={JSON.parse(localStorage.getItem('temp'))} fn={logout}/>
      </>
    )
  }
  else{
    return (
      <div style={containerStyle}>
        <Buttons/>
        <div style={formStyle}>
          <TextField id="organisation_email" inputRef={emailRef} label="Email" variant="standard" fullWidth margin="normal" />
          <TextField id="organisation_password" inputRef={passwordRef} label="Password" variant="standard" fullWidth margin="normal" />
          <Button variant="contained" onClick={submit} style={buttonStyle}> LOGIN </Button>
        </div>
        {mess && <p>{mess}</p>}
      </div>
    )
  }
}

export default Organisationlogin;