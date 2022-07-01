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


const Billans = () => {
    const location = useLocation();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adresse:"",
        state:""
      });

    

//   useEffect(()=>{

//     var token = localStorage.getItem('token')
//     token = token.substring(1,token.length-1)
//     console.log("token from profil", token)
//     var username = localStorage.getItem('username')
//     username=username.substring(1,username.length-1)
//     axios.get(`http://localhost:9191/service-auth/users/patient/${idPatient}`,{
//       headers:{
//         ContentType:'application/json',
//         Authorization: token 
//       }
//     })
//     .then((response)=>{
//       var data=response.data
//       console.log("patient response from dossier medical",data);
//       setValues({
//          firstName: data.prenom,
//          lastName: data.nom,
//           email: '',
//           phone: data.telephone,
//           state:""

//       })

//     })
//     .catch((err)=>console.log("error", err))
      
   

//   },[])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };





    return (

        <Box >
     
    <form style={{marginTop:"1%"}}
      autoComplete="off"
      noValidate
    >
      <Typography variant='h5' style={{marginBottom:'2%'}}>Résultat des billans</Typography>
      <Card>
        <CardHeader
          title="Bilan lipidique"
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
                label="creatinine"
                name="creatinine"
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
                label="triglycerides"
                name="triglycerides"
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
                label="cholesterolTotal"
                name="cholesterolTotal"
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
                label="hdlCholesterol"
                name="hdlCholesterol"
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
                label="ldlCholesterol"
                name="ldlCholesterol"
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
      </Card>

      <Card>
        <CardHeader
          title="Billan HBA"
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
                label="glycemie a jeun"
                name="glycemie_a_jeun"
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
                label="hemoglobine glyquee"
                name="hemoglobine_glyquee"
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
            
           
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>

      <Card>
        <CardHeader
          title="Billan rénal"
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
                label="PH"
                name="pH"
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
                label="densite"
                name="densite"
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
                label="glucose"
                name="glucose"
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
                label="corps cetoniques"
                name="corps_cetoniques"
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
                label="proteines"
                name="proteines"
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
              <TextField
                fullWidth
                label="sang"
                name="sang"
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
                label="leucocytes"
                name="leucocytes"
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
                label="nitrites"
                name="nitrites"
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
                label="urobilinogene"
                name="urobilinogene"
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
                label="bilirubine"
                name="bilirubine"
                onChange={handleChange}
                required
                value={values.adresse}
                variant="outlined"
              />
            </Grid>x  
         

            
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
        </Box>
        
    );

 
};

export default Billans;