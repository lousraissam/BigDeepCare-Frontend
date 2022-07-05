import React from 'react';
import { useState, useEffect } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography,  Card,Grid, TextField, Button,
    CardContent,
    CardHeader,
    Divider} from "@mui/material"
import { useLocation } from "react-router-dom";

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';


const Interogatoire = (props) => {
   
    const [douleur_torasique, setDouleur_torasique] = useState(false);
    const [dyspne, setDyspne] = useState(false);
    const [hypotimie, setHypotimie] = useState(false);
    const [palpitations, setPalpitations] = useState(false);
    const [sedantarite, setSedantarite] = useState("");
    const [syncope, setSyncope] = useState(false);
    const [colesterol, setColesterol] = useState("");
    const [autre, setAutre]= useState('')

    const idConsultation = props.idConsultation
    console.log('id cons from intérogtoir', idConsultation)

const [interogatoire, setInterogatoire] = useState({
    douleur_torasique:douleur_torasique,
    dyspne:dyspne,
    hypotimie:hypotimie,
    palpitations:palpitations,
    sedantarite:sedantarite,
    syncope:syncope,
    colesterol:colesterol,
    autre:autre

})
console.log('intérogatoire test', interogatoire)
    const handleChange = (event) => {
    //   setChecked(event.target.checked);
    };

useEffect(()=>{
axios.get()

})

  
    return (

        <Box>

      <Card>
        <CardHeader
          title="Intérogatoire "
        />
        <Divider />
        <CardContent>
        <Stack direction='row' spacing={10}>

        <Stack direction='column' >
      <FormControlLabel control={<Checkbox checked={douleur_torasique}
//  onChange={(event)=>{
//     setDouleur_torasique(event.target.checked)
//     setInterogatoire({...interogatoire,douleur_torasique:event.target.checked })
// }}
 inputProps={{ 'aria-label': 'controlled' }} />} label="Douleur torasique" />

   <FormControlLabel control={<Checkbox checked={dyspne}
//  onChange={(event)=>{
//     setDyspne(event.target.checked)
//     setInterogatoire({...interogatoire,dyspne:event.target.checked })
//  }

// }
 inputProps={{ 'aria-label': 'controlled' }} />} label="dyspne" />

<FormControlLabel control={<Checkbox checked={hypotimie}
//  onChange={(event)=>{setHypotimie(event.target.checked)
//     setInterogatoire({...interogatoire,hypotimie:event.target.checked })

// }}
 inputProps={{ 'aria-label': 'controlled' }} />} label="hypotimie" />

 
      </Stack>

<Stack direction='column' >
<FormControlLabel control={<Checkbox checked={palpitations}
//  onChange={(event)=>{setPalpitations(event.target.checked)
//     setInterogatoire({...interogatoire,palpitations:event.target.checked })

// }}
 inputProps={{ 'aria-label': 'controlled' }} />} label="palpitations" />


  <FormControlLabel control={<Checkbox checked={syncope}
//  onChange={(event)=>{
//     setSyncope(event.target.checked)
//     setInterogatoire({...interogatoire,syncope:event.target.checked })

// }}
 inputProps={{ 'aria-label': 'controlled' }} />} label="syncope"
  />

 

</Stack>

<Stack direction='column' spacing={2}>

 <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="sedantarite"
                name="sedantarite"
                // onChange={(event)=>{setSedantarite(event.target.value)
                // setInterogatoire({...interogatoire,sedantarite:event.target.value })


                // }}

                // required
                // value={values.lastName}
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
                label="colesterol"
                name="colesterol"
                // onChange={(event)=>{setColesterol(event.target.value)
                // setInterogatoire({...interogatoire,colesterol:event.target.value })

                    

                // }}
                // required
                // value={values.lastName}
                variant="outlined"
              />
            </Grid>

</Stack >
<Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="autres"
                name="autre"
                // onChange={(event)=>{setAutre(event.target.value)
                // setInterogatoire({...interogatoire,autre:event.target.value })

                    

                // }}
                // required
                // value={values.lastName}
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
            onClick={save}
            color="primary"
            variant="contained"
          >
            Save details
          </Button> */}
        </Box>
      </Card>

    </Box>




     
    );
};

export default Interogatoire;