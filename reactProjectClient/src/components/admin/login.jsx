
import { useState } from "react";
import axios from 'axios';
import Main2 from "./main2";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import discount from './discont.jpg';
import Swal from 'sweetalert2';
import './login.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isOkAdmin, setIsOkAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  function sweetalert() {
    let timerInterval;
    Swal.fire({
      title: "SUCCESS!",
      html: "Transfers to the manager's access <b></b> milliseconds",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 300);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  function checkAdmin() {
    console.log(userName, password);
    axios.post("http://localhost:8787/login", {
      name: userName,
      password: password
    }).then((res) => {
      sweetalert();
      setTimeout(() => {
        setIsOkAdmin(true);
      }, 3000);
    }).catch((error) => {
      setUserName('');
      setPassword('');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have access permission",
      });
    });
  }

  return (
    <>
      {
        isOkAdmin ? <Main2 /> :
          <div className="loginPage">
            <div className="login">
            
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>  <HttpsOutlinedIcon  sx={{ fontSize: 55, cursor: 'pointer', fontWeight: 'light' }} />
          <p>      </p>  </div>
       
              <Box
                sx={{
                  width: 260,
                  maxWidth: '100%',
                }}
              >
                <TextField fullWidth label="UserName" id="fullWidth" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <br></br>
                <br></br>
                <TextField
        type={showPassword ? "text" : "password"}
        fullWidth
        label="Password"
        id="fullWidth"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
                <br></br>
                <br></br>
              </Box>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>   <Stack direction="row" spacing={2}>
                
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => { checkAdmin() }}>
                  login
                </Button>
              </Stack>
          <p>      </p>  </div>
            
            </div>
            <div className="container">
              <img src={discount} className="img" alt="Background" />
            </div>
          </div>
      }
    </>
  );
}
