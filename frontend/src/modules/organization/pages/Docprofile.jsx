import React from 'react'
import DoctorDescription from "../components/DoctorDescription";
import { Grid } from '@mui/material';
import {Paper} from '@mui/material';

const Docprofile = ({data}) => {

  return (
    <>
          <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper id='doctor_img_info'>
            <img
              style={{ height: "200px" }}
              src="https://img.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_276184-31.jpg"
              alt="Doctor"
            />
            <h2 className="text-center">{data.docname}</h2>
            <h5 className="text-center fw-light  font-monospace p-2">{data.orgname}</h5>

          </Paper>
        </Grid>
        <Grid item xs={10}>
          
          <DoctorDescription/>
            
        </Grid>
      </Grid>
    
    </>
  )
}

export default Docprofile