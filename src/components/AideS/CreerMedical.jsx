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
import Sidebar from './sidebarAideS';
import { useEffect } from 'react';
import axios from 'axios'



 const CreerMedical = () => {
//  to get liste of medecins and patients
    const [patients, setPatients]=useState([])
    const [medecins, setMedecins]=useState([])
//  to affect patient to medecin
const [patient, setPatient]=useState()
const [medecin, setMedecin]=useState()

    
  const [valuesMed, setValuesMed] = useState({
   selectedMed:'',
  });
  const [valuesPat, setValuesPat] = useState({
    selectedPat:''
   });

   const [medical, setMedical] = useState({
    patientId: "",
    createDate: "",
    description: "",
    antecedents: []
   })


  const handleChangeMedecin = (event) => {
    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    setValuesMed({
      ...valuesMed,
      [event.target.name]: event.target.value

    });

    axios.get(`http://localhost:9191/service-auth/aideS/users/${valuesMed.selectedMed}`, {
        headers:{
          ContentType:'application/json',
          Authorization: token 
        }
      })
      .then((response)=>{
        let data = response.data
        setMedecin(data)
        console.log('medecin data', data)
      })
      .catch((err)=>console.log('error',err))
    

  };
  console.log('valus of medecins', valuesMed)

  const handleChangePatient = (event) => {
    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    setValuesPat({
      ...valuesPat,
      [event.target.name]: event.target.value

    });

    axios.get(`http://localhost:9191/service-auth/aideS/users/${valuesPat.selectedPat}`, {
        headers:{
          ContentType:'application/json',
          Authorization: token 
        }
      })
      .then((response)=>{
        let data = response.data
        setPatient(data)

        // to create ampty medical record
        var d = new Date
        var month = d.getMonth()+1
        var day = d.getDate()
        if (month<10){month = '0' + month}
        if(day<10){day= '0'+day}
        
        var date = [d.getFullYear(),
                 month,
                day,
               ].join('-')
             
          // date = date.toString()
          console.log("date", date)

        setMedical({
          patientId:valuesPat.selectedPat,
          createDate: "2022-07-01",
          description: "un nouveau Patient avec des signes...",
          antecedents: []

        })
        console.log('patients data', data)
      })
      .catch((err)=>console.log('error',err))
   
   


  };
  console.log('valus of patients', valuesPat)
  console.log("valueMed", valuesMed)

  console.log("medical", medical)




  const affectPatientToMedecin = ()=> {
    medecin.children.push(patient)

    console.log("medecin ready", medecin)
    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    axios.put(`http://localhost:9191/service-auth/aideS/update/${valuesMed.selectedMed}`, medecin,  {
              headers:{
                ContentType:'application/json',
                Authorization: token 
              }
            })
            .then((response)=>{
                let data=response.data
                console.log("patient added to medecin",data);
            })
            .catch((err)=>console.log("error",err))

        axios.post("http://localhost:9191/service-dm/DM/add", medical,  {
          headers:{
            ContentType:'application/json',
            Authorization: token 
          }
        })
        .then((response)=>{
            let data=response.data
            console.log("empty medical record created",data);
        })
        .catch((err)=>console.log("error",err))


    

  }

  useEffect(()=>{
    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    axios.get("http://localhost:9191/service-auth/aideS/patients",  {
              headers:{
                ContentType:'application/json',
                Authorization: token 
              }
            })
            .then((response)=>{
                let data=response.data
                setPatients(data)
                console.log("response patients from state",patients);
            })
            .catch((err)=>console.log("error",err))

            axios.get("http://localhost:9191/service-auth/aideS/medecins",  {
                headers:{
                  ContentType:'application/json',
                  Authorization: token 
                }
              })
              .then((response)=>{
                let data=response.data
                setMedecins(data)
                 

                console.log("response medecins from state",medecins);
              })
              .catch((err)=>console.log("error",err))

  },[])
// list of tables for medecins
  var meds =[]
  if(medecins.length==0){
     meds.push({
        value:'',
        label : ''
        })

  }else{
  for(let i=0; i<medecins.length; i++){
      meds.push(
        {
        value:medecins[i].id,
        label : 'Dr. ' + medecins[i].nom + ' ' + medecins[i].prenom
        }
        
        )
    
  }
}
  console.log("meds", meds)

//  liste of tables for patients

var pats =[]
if(patients.length==0){
   pats.push({
      value:'',
      label : ''
      })

}else{
for(let i=0; i<patients.length; i++){
    pats.push(
      {
      value:patients[i].id,
      label : patients[i].nom + ' ' + patients[i].prenom
      }
      
      )
  
}
}
console.log("meds", pats)


    


  return (
    <Box>
    <Navbar  />
    <Stack direction="row" margin={"auto"} spacing={10} justifyContent="space-between">
        <Sidebar>

            
        </Sidebar>
        {/* <Typography variant="body1" color="initial">Dossier medical</Typography> */}
        <form style={{marginTop:"3%", marginRight:"13%"}}
      autoComplete="off"
      noValidate
    //   {...props}
    >
      <Card>
        <CardHeader
          title="Créer un Dossier medicale pour un patient et affecté à un medecin"
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
                label="Patients"
                name="selectedPat"
                onChange={handleChangePatient}
                required
                select
                // SelectProps={{ native: true }}
                value={valuesPat.selectedPat}
                variant="outlined"
              >
                {pats.map((option) => (
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
                label="Medecins"
                name="selectedMed"
                onChange={handleChangeMedecin}
                required
                select
                // SelectProps={{ native: true }}
                value={valuesMed.selectedMed}
                variant="outlined"
              >
                {meds.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                
                ))}
              </TextField>


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
            onClick={affectPatientToMedecin}
          >
            Créer compte
          </Button>
        </Box>
      </Card>
    </form>

        
    </Stack>
    </Box>
      );
};
 export default CreerMedical