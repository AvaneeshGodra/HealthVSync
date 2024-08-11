import React from 'react'
import Organisationlogin from '../modules/firstpage/components/Organisationlogin.jsx';
import Usersignup from '../modules/firstpage/components/Usersignup.jsx';
import Userlogin from '../modules/firstpage/components/Userlogin.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../modules/firstpage/components/Home.jsx';
import Userinfo from '../modules/user/components/Userinfo.js' 
import UploadDoc from '../modules/user/components/UploadDoc.js'; 
import Medi from '../modules/user/components/Medi.js';
import Prescription from '../modules/user/components/Prescription.js'; 

const Firstpagerouts = () => {
  return (
    <>
        <Router>
        <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/userlogin/*" element= {<Userlogin/>}/>
          <Route path="/usersignup/*" element= {<Usersignup/>}/>
          <Route path="/organisationlogin/*" element= {<Organisationlogin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Firstpagerouts