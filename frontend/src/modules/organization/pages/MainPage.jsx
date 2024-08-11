import { Button, Grid, Paper, Container } from "@mui/material";
import SearchAppBar from "../components/Search";
import React from "react";
import {Routes,Route, useNavigate} from 'react-router-dom'
import UserSearchPage from "../pages/UserSearchPage.jsx";
import Docprofile from "./Docprofile";
import DoctorDescription from "../components/DoctorDescription";


const MainPage = ({orgdata,fn}) => {
  const logout=()=>{
    fn();
  }
  // org data ocal storage vala 
  const navigate = useNavigate();
  return (
    <>
    
    
 
      <SearchAppBar />

      <Button onClick={()=>{navigate('*/organisationprofile/')}}className='m-3' variant="contained">Profile</Button>
      <Button onClick={()=>{navigate('*/search-user')}} className='m-3' variant="contained">Search for user</Button>
      <Button variant="contained" onClick={logout}> logout </Button>
      <Routes>
              
              <Route element={<Docprofile data={orgdata}/>} path='*/organisationprofile/'/>
              <Route element={ <UserSearchPage data={orgdata}/>} path='*/search-user/*'/>
        </Routes>
      


    </>
  );
};

export default MainPage;
