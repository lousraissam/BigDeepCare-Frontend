import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardActionArea,
    CardMedia,
    Divider,
    Grid,
    TextField,
    Stack,
    Typography
  } from '@mui/material';
  
  
  import bgEcg from '../../images/consulteECG.jpg'
  import { useEffect, useState } from 'react';
  import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";


const Examens = (props) => {
    const location = useLocation();
    const NumDeMachine=props.NumDeMachine
    const navigate = useNavigate()

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adresse:"",
        state:""
      });

const showEcg = () =>{
    navigate("/dashboard-medecin/ecg", { state: { NumDeMachine: NumDeMachine } })

}

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
     <Stack direction="row"  >
     <Box>
    <form style={{marginTop:"1%", maxWidth:"70%"}}
      autoComplete="off"
      noValidate
    >
      <Card>
        <CardHeader
          title="Examen Général "
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
                label="Poind"
                name="poid"
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
                label="taille"
                name="taille"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
       
      
     
          
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
    </Box>
    {/* <Box>

    <Card sx={{ maxWidth: 1000 }} onDoubleClick={showEcg}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width='350'
          image={bgEcg}
          alt="ECG"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Consulter ECG du Patient 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box> */}
     <Box>
    <form style={{marginTop:"1%"}}
      autoComplete="off"
      noValidate
    >
      <Card>
        <CardHeader
          title="Examen Clinique "
        />
        <Divider />
        <CardContent>
          <Stack spacing={3} direction='row'>
        
         
            <Grid
              item
              md={8}
              xs={12}
            >
              <TextField
                fullWidth
                label="palpitation pouls"
                name="palpitation_pouls"
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
                label="oscultation"
                name="oscultation"
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
                label="tension"
                name="tension"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
           
       
      
     
          
         
          </Stack>
        </CardContent>
        <Divider />
      </Card>
    </form>
    </Box>
    
    </Stack>

    
     <Stack  style={{marginTop:'4%'}} direction="row" spacing={15} >

             <Box>

    <Card sx={{ width: 250 , height:160}} onDoubleClick={showEcg}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width='30%'
          image={bgEcg}
          alt="ECG"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Consulter ECG du Patient 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>

    <Box>

<Card sx={{ width: 250, height: 160 }} onDoubleClick={showEcg}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="100"
      width='350'
      image={bgEcg}
      alt="ECG"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Consulter ECG du Patient 
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</Box>
</Stack>



        </Box>
        

       
        
    );

 
};

export default Examens;