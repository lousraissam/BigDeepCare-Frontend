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
    Typography,
    styled
  } from '@mui/material';
  
  
  import bgEcg from '../../../images/consulteECG.jpg'
  import ecgimg from '../../../images/ec.png'
  import { useEffect, useState } from 'react';
  import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color:'#1F1F1F'
}));


const Examens = (props) => {
    const location = useLocation();
    const NumDeMachine=props.NumDeMachine
    const idCons = props.idConsultation
    console.log('from hist', idCons)
    const navigate = useNavigate()

    var d = new Date
    var month = d.getMonth()+1
    var day = d.getDate()
    if (month<10){month = '0' + month}
    if(day<10){day= '0'+day}
    
    var date = [d.getFullYear(),
             month,
            day,
           ].join('-')

    const [examen, setExamen] = useState({
      createDate: date,
       taille: '',
       poid: '',
        tension: '',
        oscultation: '',
        // ordonnance:"",
        // rapport:"",
        // certificat:"",
        // evacuation:"",
        // orientation:"",
        palpitation_pouls:""
        
      });

      const [examenclinique, setExamenclinique]=useState({})

const showEcg = () =>{
    navigate("/dashboard-medecin/ecg", { state: { NumDeMachine: NumDeMachine } })

}

  const handleChange = (event) => {
    setExamen({
      ...examen,
      [event.target.name]: event.target.value
    });
  };

useEffect(()=>{
  axios.get(`http://localhost:9191/service-dm/Consultation/${idCons}`)
  .then((response)=>{
    axios.get(`http://localhost:9191/service-ec/EC/${response.data.ecId}`)
    .then((response)=>setExamenclinique(response.data))
    .catch((err)=>console.log(err))
    
  
  })
},[])


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
                // label="Poind"
                name="poid"
                value={examenclinique?.poid}
                disabled
                
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
                // label="taille"
                name="taille"
                value={examenclinique?.taille}
                disabled
                variant="outlined"
              />
            </Grid>
       
      
     
          
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
    </Box>
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
                // label="palpitation pouls"
                name="palpitation_pouls"
                value={examenclinique?.palpitation_pouls}
                disabled
               
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
                // label="oscultation"
                name="oscultation"
                value={examenclinique?.oscultation}
                disabled
                
              
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
                // label="tension"
                name="tension"
                value={examenclinique?.tension}
                disabled
               
                variant="outlined"
              />
            </Grid>
           
       
      
     
          
         
          </Stack>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          {/* <Button
          onClick={saveExamen}
            color="primary"
            variant="contained"
          >
            Save
          </Button> */}
        </Box>
      </Card>
    </form>
    </Box>
    
    </Stack>

    
     {/* <Stack  style={{marginTop:'4%'}} direction="row" spacing={15} >

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
    <StyledNavLink to= '/dashboard-medecin/ecg_img'>

<Card sx={{ width: 250, height: 160 }} onDoubleClick={showEcg}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="100"
      width='350'
      image={ecgimg}
      alt="ECG"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Consulter ECG via image 
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</StyledNavLink>
</Box>
</Stack>
 */}


        </Box>
        

       
        
    );

 
};

export default Examens;