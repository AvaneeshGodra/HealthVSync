import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@mui/material'
import {Grid} from '@mui/material';
import './style1.css';
// import { Line } from 'react-chartjs-2';



 function MultiActionAreaCard({data}) {


  const chartData = {
    bloodPressure: [120, 122, 118, 125, 121, 123],
    hemoglobin: [14.5, 14.7, 15.1, 14.9, 14.6, 14.8],
    sugarLevel: [110, 115, 112, 108, 120, 118],
    heartbeat: [78, 80, 76, 82, 79, 81]
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];


  const questionsAndAnswers = [
    {
      question: 'Do you engage in regular physical exercise?',
      answer: 'Yes, I exercise 3 times a week for 30 minutes each session.'
    },
    {
      question: 'Do you smoke or use tobacco products?',
      answer: 'No, I do not smoke or use any tobacco products.'
    },
    {
      question: 'How many servings of fruits and vegetables do you consume daily?',
      answer: 'I consume at least 5 servings of fruits and vegetables daily.'
    },
    {
      question: 'How often do you consume sugary beverages or snacks?',
      answer: 'I try to limit my consumption of sugary beverages and snacks to once a week.'
    },
    // Add more questions and answers as needed
  ];

  return (

    
<>

<Grid container spacing={2} >

  <Grid item xs={8} >
  <Paper style={{ minHeight: '700px', maxHeight: '1000px', overflow: 'auto' , backgroundColor:'#E9FFFF'}} >

<h4 className='' style={{margin:'20px' , fontWeight : 'bold'}}>User Profile</h4>
<hr></hr>
<div className='text-center'>
<img
              style={{ height: "200px", borderRadius :'50px'}}
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Doctor"
              
            />
</div>


        
<h2 className='text-center' style={{margin:'20px'}}><b>{data.name}</b></h2>




<div className='border border-dark shadow rounded' style={{margin :'5px 150px' , padding :'5px' , backgroundColor: "#ffff"}} >
<p className='text-center'>Age:   <b style={{fontSize : '20px'}}>35</b></p>
<p className='text-center'>Height:   <b style={{fontSize : '20px'}}>175cm</b></p>
<p className='text-center'>Blood Group:   <b style={{fontSize : '20px'}}>B+</b></p>
<p className='text-center'>Phone Number:   <b style={{fontSize : '20px'}}>{data.phone}</b></p>
<p className='text-center'>MID:   <b style={{fontSize : '20px'}}>{data.Mid}</b></p>
</div>

<h5 className='text-center mt-5'><b><u>QR Code</u></b> </h5>
<div className='mt-1  d-flex' style={{alignItems :'center' , justifyContent : 'center'}}>


<img 
              className='text-center border border-dark rounded  shadow'
              // style={{ height: "180px",marginLeft:'24rem'  }}
              src="https://static.vecteezy.com/system/resources/thumbnails/017/441/744/small/qr-code-icon-qr-code-sample-for-smartphone-scanning-isolated-illustration-vector.jpg"
              alt="Doctor"
            />
</div>


</Paper>
  </Grid>

  <Grid item xs={4} >
  <Paper style={{ minHeight: '700px', maxHeight: '1000px', overflow: 'auto', }} >

{/* <h1>Lifestyle and Dietary Habits</h1>
      <ul>
        {questionsAndAnswers.map((item, index) => (
          <li key={index} >
            <strong>Question:</strong> {item.question}<br />
            <strong>Answer:</strong> {item.answer}
          </li>
          
        ))}
      </ul> */}

<div className="lifestyle-diet-container">
      <h1>Lifestyle and Dietary Habits</h1>
      <ul className="question-answer-list">
        {questionsAndAnswers.map((item, index) => (
          <li key={index} className="question-answer-item">
            <strong>Question:</strong> {item.question}<br />
            <strong>Answer:</strong> {item.answer}
          </li>
        ))}
      </ul>
    </div>
      
</Paper>
  </Grid>

</Grid>









</>
    )
}

export default MultiActionAreaCard;