import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import Userinfo from "./Userinfo";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import { Link, Route, Routes } from "react-router-dom";
import UploadDoc from "./UploadDoc";
import Medi from "./Medi";
import Prescription from "./Prescription";
import { useNavigate } from "react-router-dom";
import Mediorg from "./Mediorg";
import PatientHistory from "./PatientHistory"
import Aiconsult from "./Aiconsult"

const Profile = ({ data, orgdata = '', num ,fn}) => {

  if (num == 2) {
    // user profile
  
    return (
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        //  alignItems="center"
        //  minHeight="100vh"
      >
        <Grid item xs={2}>
          <ResponsiveDrawer fn={fn} num={num}/>
        </Grid>

        <Grid
          item
          xs={10}
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Routes>
            <Route element={<Userinfo data={data} />} path="*/userinfo/*" />
            <Route element={<UploadDoc data={data} />} path="*/uploadDoc/*" />
            <Route element={<Medi data={data} />} path="*/medi/*" />
            <Route element={<Prescription data={data}/>} path="*/prescription/*" />
            <Route element={<PatientHistory/>} path="*/PatientHistory/*" />
            <Route element={<Aiconsult data={data}/>} path="*/Aiconsult/*" />
          </Routes>
        </Grid>
      </Grid>
    );
  }
  //organisation user profile
  else {
    
    return (
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        //  alignItems="center"
        //  minHeight="100vh"
      >
        <Grid item xs={2}>
          <ResponsiveDrawer fn={fn} num={num}/>
        </Grid>

        <Grid
          item
          xs={10}
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Routes>
            <Route element={<Userinfo data={data} />} path="*/userinfo/*" />
            <Route element={<UploadDoc data={data} />} path="*/uploadDoc/*" />
            <Route
              element={<Mediorg orgdata={orgdata} dat={data} />}
              path="*/medi/*"
            />
            <Route element={<Prescription />} path="*/prescription/*" />
            <Route element={<PatientHistory/>} path="*/PatientHistory/*" />
            <Route element={<Aiconsult data={data}/>} path="*/Aiconsult/*" />
          </Routes>
        </Grid>
      </Grid>
    );
  }
};

export default Profile;
