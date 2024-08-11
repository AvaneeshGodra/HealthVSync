import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Buttons from '../../../shared/Buttons';
import { useRef } from "react";
import { Button } from '@mui/material';
import { networkOperations } from '../../../shared/services/api-client';
import { useEffect } from 'react';

const Userregister = () => {
  const [message,setMessage]=useState('');
  
  const emailRef=useRef();
  const passwordRef=useRef();
  const nameRef=useRef();
  const phoneRef=useRef();
  const [mid,setMid]=useState('');
  const addressRef=useRef();
  const [print,setPrint]=useState('');
  
  function func(){
    var d = new Date().getTime();
    return d;
  }

  const Register=async()=>{
    const midd=func();
    console.log(midd);
    setMid(midd);
    
    const userInfo={
      'name':nameRef.current.value,
      'email':emailRef.current.value,
      'password':passwordRef.current.value,
      'Mid':midd,
      'phone':phoneRef.current.value
    }
    try{
      const response=await networkOperations.post(process.env.REACT_APP_REGISTER,userInfo);
      setMessage(response.data.message) // printing message registered 
      
      console.log('response is ', response);
      console.log('user info',userInfo);
      
    }
    catch(err){
      setMessage('Registered failed');
    }
  }

  useEffect(()=>{
    if(message == 'register sucessesfully') {
      setPrint(`Registered sucessfully  YOUR MID IS: ${mid}`)
    }
    else if(message==''){
      setPrint('');
    }
    else{
      setPrint('Registered failed');
    }
  },[Register])

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

  return (
    <div style={containerStyle}>
      <Buttons/>
      <div style={formStyle}>
        <TextField id="user_register_name" inputRef={nameRef} label="Name" variant="standard" fullWidth margin="normal" />
        <TextField id="user_register_email" inputRef={emailRef}  label="Email" variant="standard" fullWidth margin="normal" />
        <TextField id="user_register_password" inputRef={passwordRef} type="password" label="Password" variant="standard" fullWidth margin="normal" />
        <TextField id="user_register_phone" inputRef={phoneRef} label="Phone" variant="standard" fullWidth margin="normal" />
        <Button variant="contained" onClick={Register} style={buttonStyle}> REGISTER</Button>
      </div>
      {print && <p>{print}</p>}
    </div>
  )
}

export default Userregister;