import { Paper } from '@mui/material'
import React from 'react'

const DoctorDescription = () => {
  return (
    <>

    <Paper>

    <h2 className='p-3'>Profile</h2>
    <hr></hr>
    <p className='fw-medium p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </Paper>


    <Paper>

    <h2 className='p-3'>Skills</h2>
    <hr></hr>
    <ul className='fw-medium p-3 m-3'>
      <li className='fw-medium '>Knowledge</li>
      <li className='fw-medium '>Strength</li>
      <li className='fw-medium '>Integrity</li>
    </ul>
    </Paper>

    <Paper>

    <h2 className='p-3'>Employment History</h2>
    <hr></hr>
    <ul className='fw-medium p-3 m-3'>
      <li className='fw-medium '>tters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accid</li>
      <li className='fw-medium '>r randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks </li>
      <li className='fw-medium '>r randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks </li>
    </ul>
    </Paper>

    <Paper>

    <h2 className='p-3'>Education</h2>
    <hr></hr>
    
    <ul className='m-3 p-3'>
      <li className='fw-medium' >Hogwarts 2020</li>
      <li className='fw-medium' > AIIMS 2014</li>
      <li className='fw-medium' > MSIT 2323</li>
    </ul>    

    </Paper>

  


    </>
  )
}

export default DoctorDescription