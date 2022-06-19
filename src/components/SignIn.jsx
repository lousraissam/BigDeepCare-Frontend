import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from './SignUp';
import bg from '../images/1.jpg'
import { DashboardMedecin } from './DashboardMedecine';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route,Switch, Navigate  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { render } from '@testing-library/react';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        CHU SBA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();


export default function SignInSide() {


  const[username, setUsername]=useState('')
  const[password, setPassword]=useState('')
  const [isWrong, setIsWrong]=useState('')
  const wrong = useRef('')

  const [login, setLogin] = useState({
    username:"",
    password:""
  }
    
  )
  const navigate = useNavigate()

  useEffect(()=>{
    setLogin({
      username:username,
      password:password
    })

},[username,password])
//  console.log('this is login', login)
   


const onSubmit = (e) =>{
  e.preventDefault()
  const config = {
    headers :{
      ContentType:'application/json',
      'Access-Controll-Allow-Origin':'*',

    }
  }

  
  axios.post("http://localhost:9191/service-auth/authenticate", login)
  .then((response)=>{
    console.log("response", response)
    var token = "Bearer " + response.data.token

    axios.get(`http://localhost:9191/service-auth/users/get/${username}`, {
      headers:{
          ContentType:'application/json',
          Authorization:token
      }
  })
    .then((response)=>{
      var role=response.data.role
      console.log(role)
      if (response.status===200){
        localStorage.setItem('token', JSON.stringify(token));

        if(role==="ROLE_MEDECIN"){
          console.log("dashbord-medecin")
        
          navigate("/dashboard-medecin", { state: { username: username } })
          
        } else if(role==="ROLE_AIDE_SOIGNANT"){
          navigate("/dashboard-AideS",  { state: { username: username } })
  
  
        } else if (role==="ROLE_ADMIN"){
          navigate("/dashboard-admin",  { state: { username: username } })
  
        } else if (role==="ROLE_PATIENT"){
          navigate("/dashboard-patient",  { state: { username: username } })
  
        }

      } 
    })
    .catch((err)=>{
      console.log('erroe',err)
  

    })
  })
  .catch((err)=>{
    console.log("error",err)
    wrong.current='wrong email or password'
    setIsWrong(wrong.current)
   

  })
}



  return (


    
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
              onChange={e=>
                setUsername(e.target.value)
              }
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus

              />
              <TextField
              onChange={e=>
                setPassword(e.target.value)
              }
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                <Typography variant='h14' sx={{color:"red"}}>{isWrong}</Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  
  );
}