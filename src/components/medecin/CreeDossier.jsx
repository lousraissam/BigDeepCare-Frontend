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
  Stack,
    MenuItem
} from '@mui/material';

import Navbar from '../Navbar';
import Sidebar from '../AideS/sidebarAideS';
import { useEffect } from 'react';
import axios from 'axios'



 const CreeDossier = () => {
    const sexes = [
        {
          value: 'HOMME',
          label: 'homme'
        },
        {
          value: 'FEMME',
          label: 'femme'
        },
      
      ];
    
  const [values, setValues] = useState({
    nom: '',
    prenom: '',
    username: '',
    password:'',
    dateNaissance:"",
    adresse:"",
    sexe:"",
    telephone: '',
    state:"ACTIVE"
  });

//   useEffect(()=>{

//     var token = localStorage.getItem('token')
//     token = token.substring(1,token.length-1)
//     console.log("token from profil", token)
//     var username = localStorage.getItem('username')
//     username=username.substring(1,username.length-1)
//     axios.get(`http://localhost:9191/service-auth/users/get/${username}`,{
//       headers:{
//         ContentType:'application/json',
//         Authorization: token 
//       }
//     })
//     .then((response)=>{
//       var data=response.data
//       console.log("profil response",data);
//       setValues({
//          firstName: data.username,
//          lastName: '',
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

  console.log('values', values)
  const createAcoount = ()=> {
    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    axios.post("http://localhost:9191/service-auth/registerPatient", values, {
              headers:{
                ContentType:'application/json',
                Authorization: token 
              }
            })
            .then((response)=>{
              console.log("response",response);
            })
            .catch((err)=>console.log("error",err))

  }

//   useEffect(()=>{
    

//   },[])

  return (
    <Box>
    <Navbar  />
    <Stack direction="row" spacing={30} justifyContent="space-between">
        <Sidebar>

            
        </Sidebar>
        {/* <Typography variant="body1" color="initial">Dossier medical</Typography> */}
        <form style={{marginTop:"3%"}}
      autoComplete="off"
      noValidate
    //   {...props}
    >
      <Card>
        <CardHeader
          title="Créer un compte pour un patient"
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
                label="Nom"
                name="nom"
                onChange={handleChange}
                required
                value={values.nom}
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
                label="Prénom"
                name="prenom"
                onChange={handleChange}
                required
                value={values.prenom}
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
                label="username"
                name="username"
                onChange={handleChange}
                required
                value={values.username}
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
                label="password"
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
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
                // label="Date de naissance"
                name="dateNaissance"
                onChange={handleChange}
                required
                type="date"
                value={values.dateNaissance}
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
                label="Sexe"
                name="sexe"
                onChange={handleChange}
                required
                select
                // SelectProps={{ native: true }}
                value={values.sexe}
                variant="outlined"
              >
                {sexes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                
                ))}
              </TextField>


            </Grid>


                        

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="telephone"
                onChange={handleChange}
                required
                type="number"
                value={values.telephone}
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
                name="adresse"
                onChange={handleChange}
                required
                value={values.adresse}
                variant="outlined"
              />
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
            onClick={createAcoount}
          >
            Créer  compte
          </Button>
        </Box>
      </Card>
    </form>

        
    </Stack>
    </Box>
      );
};
 export default CreeDossier