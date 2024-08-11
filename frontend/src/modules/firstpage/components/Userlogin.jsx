import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Buttons from '../../../shared/Buttons';
import { useState } from 'react';
import { useRef } from "react";
import { Button } from '@mui/material';
import { networkOperations } from '../../../shared/services/api-client';
import Userpage from '../../user/pages/Userpage';

const Userlogin = () => {
  const [message, setMessage] = useState('');
  const [Mid, setMid] = useState(-1);
  const midRef = useRef();
  const passwordRef = useRef();

  const verifylogin = async () => {
    try {
      const data = {
        authtoken: localStorage.getItem("authtoken"),
      };
      const response = await networkOperations.post(process.env.REACT_APP_VERIFY, data);

      if (response.status == 400) {
        return;
      } else {
        setMessage(response.data.data.userdata);
        setMid(response.data.data.Mid);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    verifylogin();
  }, []);

  const submit = async () => {
    const userInfo = {
      password: passwordRef.current.value,
      Mid: midRef.current.value,
    };

    try {
      const response = await networkOperations.post(process.env.REACT_APP_LOGIN, userInfo);
      setMessage(response.data.message);

      if (response.data.message == "invalid userid or password") {
        setMessage(response.data.message);
      } else {
        localStorage.setItem("authtoken", response.data.authtoken);
        verifylogin();
      }
    } catch (err) {
      console.log(err);
      setMessage("login fails");
    }
  };

  const logout = () => {
    localStorage.removeItem("authtoken");
    setMid(-1);
    setMessage(''); // Reset message to empty string
  };

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

  if (Mid != -1) {
    return (
      <>
        <Userpage data={message} fn={logout} />
      </>
    );
  } else {
    return (
      <div style={containerStyle}>
        <Buttons />
        <div style={formStyle}>
          <TextField id="user_mid" inputRef={midRef} label="Mid" variant="standard" fullWidth margin="normal" />
          <TextField id="user_password" inputRef={passwordRef} type="password" label="Password" variant="standard" fullWidth margin="normal" />
          <Button variant="contained" onClick={submit} style={buttonStyle}> SUBMIT</Button>
        </div>
        {typeof message === 'string' && message && <p>{message}</p>}
      </div>
    );
  }
}

export default Userlogin;