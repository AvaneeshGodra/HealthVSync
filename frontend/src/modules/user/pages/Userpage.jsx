import React from 'react'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'
const Userpage = ({data,fn}) => {
  return (
    <div>
    
      <Navbar/>

      
        <Profile data={data} num='2' fn={fn}/>
    </div>
  )
}

export default Userpage