import React, { useRef, useState } from 'react';
import './NoteCard/NoteCard.css'
import './style1.css';
import { networkOperations } from '../../../shared/services/api-client';
import { Button, TextField } from '@mui/material';


const SearchComponent = ({data}) => {
  const symptomRef=useRef('')
  const [arrNote,setArr]=useState([]);
  const [output,setOutput]=useState([]);
  const consultation = {
    mid: data.Mid,
  };
  const onclick=async()=>{
    try {
   
      const response = await networkOperations.post(
        process.env.REACT_APP_DISPLAY_CONSULTATION,
        consultation
      ); //backend
       
        const arr=response.data.message;
        setArr(arr);

       

    } catch (err) {
      console.log(err);
    }
  
    var print=arrNote.reduce((a,n)=>
      a+n.note
   ,'')
    
    const send={
      symptoms:symptomRef.current.value,
      diagnosis:print
    }
    console.log(send);
    try {
      const response = await networkOperations.post(
        process.env.REACT_APP_AI_MODEL,
        send
      ); //backend
        setOutput(response.data[0].candidates[0].output);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>

<h1>AI Doctor</h1>
    <label for="symptoms">Symptoms:</label>
    <TextField id="systum" rows="4" cols="50" inputRef={symptomRef}></TextField>
    <button id="generateButton" onClick={onclick}className='btn btn-primary'>Generate Response</button>
    <div id="response"></div>
    <br/><br/>
    <label for="diagnosis">Diagnosis:</label>
    <div id="diagnosis" rows="4" cols="50" className='NoteCard w-75'><pre>{output}</pre> </div><br/><br/>
   
    
 
    </>

  );
};

export default SearchComponent;
