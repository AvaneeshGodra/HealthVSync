import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style1.css';

 function Prescription({data}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const prescriptions = [
    {
      medicine: 'Medicine A',
      date: '2023-09-25',
      doctor: 'Dr. Ramesh'
    },
    {
      medicine: 'Medicine B',
      date: '2023-09-26',
      doctor: 'Dr. Puneet'
    },
    {
      medicine: 'Medicine C',
      date: '2023-09-27',
      doctor: 'Dr. Munna'
    }
  ];


  return (
    <>
    
      <div >
        <TextField
          label="Medicine Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">mg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Dosage</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Timings</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">info</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>

      <div>
      <h2>Prescribed Medicines</h2>
      <div className="prescription-table">
        <div className="prescription-row header">
          <div className="prescription-cell">Medicine</div>
          <div className="prescription-cell">Date</div>
          <div className="prescription-cell">Doctor</div>
        </div>
        {prescriptions.map((prescription, index) => (
          <div className="prescription-row" key={index}>
            <div className="prescription-cell">{prescription.medicine}</div>
            <div className="prescription-cell">{prescription.date}</div>
            <div className="prescription-cell">{prescription.doctor}</div>
          </div>
       ))}
       </div>
     </div>

</>
  );
}

export default Prescription