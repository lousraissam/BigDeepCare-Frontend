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
    Typography, 
    ListItemButton,
    ListItemIcon,
    IconButton
  } from '@mui/material';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
  import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation } from "react-router-dom";


const Antecedent = (props) => {
    const location = useLocation();
    const idPatient = props.idPatient

    const [antecedents, setAntecedents] = useState()
    const [antecedent, setAntecedent] = useState({})
    //   // med:'',
    //   // cher:"",
    //   // fam:"",
    //   // hab:''
    // // }])

    const[medical, setMedical]=useState()
    // const [medicaux, setMedicaux] = useState("");
    const [inputMed, setInputMed] = useState([{
       id: uuidv4(), 
       medic: ''
       },

    ]);
    useEffect(()=>{
      axios.get(`http://localhost:9191/service-dm/DM/patient/${idPatient}`)
      .then((response)=>{
        setMedical(response.data)
      //   setAntecedent( {
      //     med:response.data.antecedents[0],
      //     cher:response.data.antecedents[1],
      //     fam:response.data.antecedents[2],
      //     hab:response.data.antecedents[3],
      // })
      })
      .catch((err)=>console.log(err))
    },[])

    console.log("reeeeeeeeeest anntttttttt", medical?.antecedents[0]?.nom)

    const addInputMed =()=>{
      setInputMed([...inputMed, { id: uuidv4(), medic: '' }])
    }
    
    const removeInputMed =(index) => {
      if (inputMed.length>1) {
      const values = [...inputMed]
      values.splice(index, 1)
      setInputMed(values)
      }
    }
    const [cherigicaux, setCherigicaux] = useState("");
    const [inputCher, setInputCher] = useState([
      { id: uuidv4(), cher: '' },

    ]);
    const addInputCher =()=>{
      setInputCher([...inputCher, { id: uuidv4(), cher: '' }])
    }
    
    const removeInputCher =(index) => {
      if (inputCher.length>1) {
      const values = [...inputCher]
      values.splice(index, 1)
      setInputCher(values)
      }
    }
    const [familiaux, setFamiliaux] = useState("");
    const [inputFam, setInputFam] = useState([
      { id: uuidv4(), fam: '' },

    ]);
    const addInputFam =()=>{
      setInputFam([...inputFam, { id: uuidv4(), fam: '' }])
    }
    
    const removeInputFam =(index) => {
      if (inputFam.length>1) {
      const values = [...inputFam]
      values.splice(index, 1)
      setInputFam(values)
      }
    }
    const [habitude, setHabitude] = useState("");
    const [inputHab, setInputHab] = useState([
      { id: uuidv4(), hab: '' },

    ]);
    const addInputHab =()=>{
      setInputHab([...inputHab, { id: uuidv4(), hab: '' }])
    }
    
    const removeInputHab=(index) => {
      if (inputHab.length>1) {
      const values = [...inputHab]
      values.splice(index, 1)
      setInputHab(values)
      }
    }


  
    const [values, setValues] = useState({
      
      });

      

    

 
  // const handleChangeCher= (event) => {
  //   setCherigicaux({
  //     ...cherigicaux,
  //     type:0,
  //     [event.target.name]: event.target.value
  //   });
  // };
  // const handleChangeFam = (event) => {
  //   setFamiliaux({
  //     ...familiaux,
  //     type: 1,
  //     [event.target.name]: event.target.value
  //   });
  // };
  // const handleChangeHab = (event) => {
  //   setHabitude({
  //     ...habitude,
  //     type:3,
  //     [event.target.name]: event.target.value
  //   });
  // };

  

  // useEffect(()=>{
  //   let ant = []
  //   ant.push(medicaux, cherigicaux, familiaux, habitude)

  //   setAntecedents(ant)
  // },[medicaux, cherigicaux, familiaux, habitude])


  // const handleChange = (event) => {
  //   setMedicaux({
  //     ...medicaux,
  //     type:2,
  //     [event.target.name]: event.target.value
  //   });
  //   setMedical({
  //     ...medical,
  //     [event.target.name]: event.target.value

  //   })
  // };


 
  
    return (

    <Box >
     
    <form style={{marginTop:"1%"}}
      autoComplete="off"
      noValidate
    >

      <Card sx={{marginBottom:'2%'}}>
        <CardHeader
          title="Antécédents médicaux  "
        />
        <Divider />
        <CardContent>
        {inputMed.map((inputMed, index) => (

          <Stack direction="row" gap={0}>

          
          <Grid
            container
            spacing={3}
            key={index}
          >

         
            <Grid
            // key={index}
              item
              md={12}
              xs={12}
              sx={{marginTop:"2%"}}
            
            >
          
              <TextField
              disabled
                fullWidth
                // label="ex HTA..."
                name="nom"
                // onChange={handleChange}
                // onChange={e=>
                //   setMedicaux(...medicaux, e.target.value)
                // }
                
                value={medical?.antecedents[0]?.nom}
                
                variant="outlined"
              />
             
            </Grid>

          </Grid>
          <IconButton onClick={addInputMed} style={{marginTop:"5px"}}> <AddCircleIcon/></IconButton>
          <IconButton onClick={()=>removeInputMed(index)} style={{marginTop:"5px"}}> <RemoveCircleIcon/></IconButton>

          
         
         
          </Stack>
            ))}


          
          
  
        </CardContent>
        <Divider />
      </Card>
  
      <Card sx={{marginBottom:'2%'}}>
        <CardHeader
          title="Antécédents chérigicaux "
        />
        <Divider />
        <CardContent>
        {inputCher.map((inputCher, index) => (


        <Stack direction="row" gap={0}>

          <Grid
            container
            spacing={3}
            key={index}
          >
         
            <Grid
              item
              md={12}
              xs={12}
              sx={{marginTop:"2%"}}
            >
              <TextField
              disabled
                fullWidth
                // label="ex opétation..."
                name="nom"
                // onChange={handleChangeCher}
                
                value={medical?.antecedents[1]?.nom}
                variant="outlined"
              />
            </Grid>
          
          </Grid>
          <IconButton onClick={addInputCher} style={{marginTop:"5px"}}> <AddCircleIcon/></IconButton>
          <IconButton onClick={()=>removeInputCher()} style={{marginTop:"5px"}}> <RemoveCircleIcon/></IconButton>
          </Stack>
        ))}
          
        </CardContent>
        <Divider />
      </Card>


      <Card sx={{marginBottom:'2%'}}>
        <CardHeader
          title="Antécédents familiaux "
        />
        <Divider />
        <CardContent>
        {inputFam.map((inputFam, index) => (

        <Stack direction="row" gap={0}>

          <Grid
            container
            spacing={3}
            key={index}
          >
         
            <Grid
              item
              md={12}
              xs={12}
              sx={{marginTop:"2%"}}

            >
              <TextField
              disabled
                fullWidth
                name="nom"
                // onChange={handleChangeFam}
                
                value={medical?.antecedents[2]?.nom}
                variant="outlined"
              />
            </Grid>
          
          </Grid>
          <IconButton onClick={addInputFam} style={{marginTop:"5px"}}> <AddCircleIcon/></IconButton>
          <IconButton onClick={()=>removeInputFam(index)} style={{marginTop:"5px"}}> <RemoveCircleIcon/></IconButton>
          </Stack>
        ))}
        </CardContent>
        <Divider />
      </Card>

      <Card sx={{marginBottom:'2%'}}>
        <CardHeader
          title="Habitudes "
        />
        <Divider />
        <CardContent>
        {inputHab.map((inputHab, index) => (

        <Stack direction="row" gap={0}>

          <Grid
            container
            spacing={3}
          >
         
            <Grid
              item
              md={12}
              xs={12}
              sx={{marginTop:"2%"}}

            >
              <TextField
              disabled
                fullWidth
                name="nom"
                // onChange={handleChangeHab}
                value={medical?.antecedents[3]?.nom}
           
                    variant="outlined"
              />
            </Grid>
          
          </Grid>
          <IconButton onClick={addInputHab} style={{marginTop:"5px"}}> <AddCircleIcon/></IconButton>
          <IconButton onClick={()=>removeInputHab(index)} style={{marginTop:"5px"}}> <RemoveCircleIcon/></IconButton>
          </Stack>
        ))}
        </CardContent>
        <Divider />
      </Card>
    </form>

          <Box>
          <form style={{marginTop:"1%"}}
      autoComplete="off"
      noValidate
    >
       
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
        </Box>
    </form>


          </Box>



        </Box>
        

       
        
    );

 
};

export default Antecedent;