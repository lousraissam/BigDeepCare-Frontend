import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Stack
} from '@mui/material';


import Navbar from './Navbar';
import Sidebar from './medecin/SideBarMedecin';
import { useEffect } from 'react';
import axios from 'axios'




export const AccountProfileDetails = (props) => {
  const states=[]
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state:""
  });

  useEffect(()=>{

    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    console.log("token from profil", token)
    var username = localStorage.getItem('username')
    username=username.substring(1,username.length-1)
    axios.get(`http://localhost:9191/service-auth/users/get/${username}`,{
      headers:{
        ContentType:'application/json',
        Authorization: token 
      }
    })
    .then((response)=>{
      var data=response.data
      console.log("profil response",data);
      setValues({
         firstName: data.username,
         lastName: data.nom,
          email: '',
          phone: data.telephone,
          state:""

      })

    })
    .catch((err)=>console.log("error", err))
      
   

  },[])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  

  return (
    <Box>
    <Navbar  />
    <Stack direction="row" spacing={30} justifyContent="space-between">
        <Sidebar>
            
        </Sidebar>
        {/* <Typography variant="body1" color="initial">Dossier medical</Typography> */}
        <form 
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="Address"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>

        
    </Stack>
    </Box>
      );
};
