import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Stack,
    Typography
  } from '@mui/material';
  
  
  
  import { useEffect, useState } from 'react';
  import axios from 'axios'
import { useLocation } from "react-router-dom";


const PatientInfo = (props) => {
    const idPatient = props.idPatient
    const location = useLocation();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adresse:"",
        state:""
      });

    

  useEffect(()=>{

    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    console.log("token from profil", token)
    var username = localStorage.getItem('username')
    username=username.substring(1,username.length-1)
    axios.get(`http://localhost:9191/service-auth/users/patient/${idPatient}`,{
      headers:{
        ContentType:'application/json',
        Authorization: token 
      }
    })
    .then((response)=>{
      var data=response.data
      console.log("patient response from dossier medical",data);
      setValues({
         firstName: data.prenom,
         lastName: data.nom,
          email: '',
          phone: data.telephone,
          adresse:data.adresse,
          state:"ACTIVE"

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
      <Typography>from histyory</Typography>
     
    <form style={{marginTop:"1%"}}
      autoComplete="off"
      noValidate
    >
      <Card>
        <CardHeader
          title="Informations"
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
                disabled
                fullWidth
                label="last name"
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
              disabled
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
              disabled
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
              disabled
                fullWidth
                label="Address"
                name="Address"
                onChange={handleChange}
                required
                value={values.adresse}
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
     
        </Box>
      </Card>
    </form>
        </Box>        
    );

 
};

export default PatientInfo;