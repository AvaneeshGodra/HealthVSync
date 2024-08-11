import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { NavLink } from 'react-router-dom';
import { Paper } from '@mui/material'
import {Link} from 'react-router-dom';
import './style1.css';
import { useState } from 'react';
import Icon from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
// import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';

const ResponsiveDrawer = ({fn,num}) => {

  const click=()=>{
    fn();
  }

  
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const isButtonActive = (buttonId) => {
    return activeButton === buttonId;
  };
  
    
    
if(num==2){
  return (
    <>
       <Paper style={{ minHeight: '700px', maxHeight: '1000px', overflow: 'auto',marginLeft:'10px',borderRadius:'7px' , textAlign:'center'}}>
      <div>    


        <Link to ='*/userinfo/*'>
    <Button startIcon={<ContactsRoundedIcon/>}  style={{
          backgroundColor: isButtonActive(1) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'20px',
          fontWeight:'bold',
          // marginRight:'20px',
          fontSize:'0.9rem',

          width:"200px"
        }}
        onClick={() => handleButtonClick(1)}>Userinfo</Button>
    </Link>

      </div>

      <div>
      
      <Link to ='*/medi/*'>
    <Button startIcon={<RecordVoiceOverOutlinedIcon/>}  style={{
          backgroundColor: isButtonActive(2) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(2)}>Consultation</Button>
    </Link>
      </div>

      <div>

      <Link to ='*/uploadDoc/*'>
    <Button startIcon={<BackupOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(3) ? '#71C9CE' : 'white',
          color:'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(3)}>Reports</Button>
    </Link>
     
      </div>

      <div>
      <Link to ='*/Prescription/*'>
    <Button  startIcon={<MedicationOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(4) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(4)}>Prescription</Button>
    </Link>
        
      </div>

      <div>
      <Link to ='*/PatientHistory/*'>
    <Button  startIcon={<MedicationOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(5) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(5)}>Patient History</Button>
    </Link>
        
      </div>

      <div>
      <Link to ='*/Aiconsult/*'>
    <Button  startIcon={<MedicationOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(6) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(6)}>AI consultation</Button>
    </Link>
        
      </div>
      <Button variant="contained" style={{
          backgroundColor: '#E32636',
          color: 'white',
          padding: '10px 20px',
          marginTop:'16.7rem',
          fontWeight:'bold',
          fontSize:'1rem',
          width:"200px",
          borderRadius:'3rem'
        }}onClick={click}>LOGOUT</Button>
    </Paper>

    </>
  )
}
else{
  return (
    <>
       <Paper style={{ minHeight: '700px', maxHeight: '1000px', overflow: 'auto',marginLeft:'10px',borderRadius:'7px' ,border : '0px solid aqua', textAlign:'center'}}>
      <div>    

        <h2>QUICK LINKS</h2>    

        <Link to ='*/userinfo/*'>
    <Button startIcon={<ContactsRoundedIcon/>}  style={{
          backgroundColor: isButtonActive(1) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(1)}>Userinfo</Button>
    </Link>

      </div>

      <div>
      
      <Link to ='*/medi/*'>
    <Button startIcon={<RecordVoiceOverOutlinedIcon/>}  style={{
          backgroundColor: isButtonActive(2) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(2)}>Consultation</Button>
    </Link>
      </div>

      <div>

      <Link to ='*/uploadDoc/*'>
    <Button startIcon={<BackupOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(3) ? '#71C9CE' : 'white',
          color:'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(3)}>Reports</Button>
    </Link>
     
      </div>

      <div>
      <Link to ='*/Prescription/*'>
    <Button  startIcon={<MedicationOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(4) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(4)}>Prescription</Button>
    </Link>
        
      </div>

      <div>
      <Link to ='*/PatientHistory/*'>
    <Button  startIcon={<MedicationOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(5) ? '#71C9CE' : 'white',
          color:  'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(5)}>Patient History</Button>
    </Link>
        
      </div>

      <div>
      <Link to ='*/Aiconsult/*'>
    <Button  startIcon={<MedicationOutlinedIcon/>} style={{
          backgroundColor: isButtonActive(6) ? '#71C9CE' : 'white',
          color: 'black',
          padding: '10px 20px',
          marginTop:'1rem',
          fontWeight:'bold',
          fontSize:'0.9rem',
          width:"200px"
        }}
        onClick={() => handleButtonClick(6)}>AI consultation</Button>
    </Link>
        
      </div>
      
    </Paper>

    </>
  )
}
 
}

export default ResponsiveDrawer
