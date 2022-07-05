import { React } from 'react';
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
    MenuItem, 
    TextareaAutosize
} from '@mui/material';

import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import ClockIcon from '@mui/icons-material/AccessTime';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import Navbar from '../Navbar';
import Sidebar from './sidebarAideS';
import { useEffect, useState } from 'react';
import axios from 'axios'

  


 const AddRdv = () => {
//  to get liste of medecins and patients
    const [patients, setPatients]=useState([])
    // const [medecins, setMedecins]=useState([])
//  to affect patient to medecin
const [patient, setPatient]=useState()
// const [medecin, setMedecin]=useState()

    
//   const [valuesMed, setValuesMed] = useState({
//    selectedMed:'',
//   });
  const [valuesPat, setValuesPat] = useState({
    selectedPat:''
   });

   const [medical, setMedical] = useState({
    patientId: "",
    createDate: "",
    description: "",
    antecedents: []
   })

   var d = new Date
   var month = d.getMonth()+1
   var day = d.getDate()
   if (month<10){month = '0' + month}
   if (day<10){day = '0' + day}
   
   var date = [d.getFullYear(),
            month,
            day,
          ].join('-')
        

   const [dossierMed, setDossierMed] = useState()
   const [consultation, setConsultation] = useState({
    interrogatoir: null,
    createDate: "2022-07-06",
    appointmentDate: "",
    ecId: null,
    bpId: [],
    state: "EN_ATTENTE",
    dm: null

   })

   const [value, setValue] = useState(new Date());

  const handleChangePatient = (event) => {
    var token = localStorage.getItem('token')
    token = token.substring(1,token.length-1)
    setValuesPat({
      ...valuesPat,
      [event.target.name]: event.target.value

    });

    axios.get(`http://localhost:9191/service-auth/aideS/users/${event.target.value}`, {
        headers:{
          ContentType:'application/json',
          Authorization: token 
        }
      })
      .then((response)=>{
        let data = response.data
        setPatient(data)

        axios.get(`http://localhost:9191/service-dm/DM/patient/${event.target.value}`)
        .then((response)=>{
            setDossierMed(response.data)
    console.log('dossier medical patient selected',response.data)
    
    
        })
        .catch((err)=>console.log('err',err))

        // to create ampty medical record
        // var d = new Date
        // var month = d.getMonth()+1
        // if (month<10){month = '0' + month}
        
        // var date = [d.getFullYear(),
        //          month,
        //         d.getDate()
        //        ].join('-')
             
        //   // date = date.toString()
        //   console.log("date", date)

        // setMedical({
        //   patientId:valuesPat.selectedPat,
        //   createDate: date,
        //   description: "un nouveau Patient avec des signes...",
        //   antecedents: []

        // })
        console.log('patients data', data)
      })
      .catch((err)=>console.log('error',err))
   

  };
  console.log('valus of patients', valuesPat)
//   console.log("valueMed", valuesMed)




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

  },[])

  const creerRdv = () =>{
    setConsultation({...consultation, dm:dossierMed, appointmentDate:value})
    console.log("consultation", consultation)
    
    axios.post('http://localhost:9191/service-dm/Consultation/add', consultation)
    .then((response)=>console.log(response))
    .catch((err)=>console.log(err))
  }


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
console.log("pats", pats)

console.log("date", value)
    


  return (
    <Box>
    <Navbar  />
    <Stack direction="row" margin={"auto"} spacing={30} justifyContent="space-between">
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
          title="Créer un rendez-vous pour une consultation"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
        
            <Grid
              item
              md={12}
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
              md={12}
              xs={12}
            >
                 <LocalizationProvider dateAdapter={AdapterDateFns}>

                    
<DateTimePicker
  disableFuture
  hideTabs
  openTo="hours"
  value={value}
  onChange={(newValue) => {
    setValue(newValue);
  }}
  minDate={new Date()}
  components={{
    LeftArrowIcon: AlarmIcon,
    RightArrowIcon: SnoozeIcon,
    OpenPickerIcon: ClockIcon,
  }}
  minTime={new Date(0, 0, 0, 9)}
  maxTime={new Date(0, 0, 0, 20)}
  renderInput={(params) => (
    <TextField {...params} helperText="Date et time" />
  )}
/>
</LocalizationProvider>
           
                
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >

            <TextareaAutosize
  aria-label="minimum height"
  minRows={5}
  placeholder="Une remarque ou description sur le patient"
  style={{ width: 500 }}
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
            onClick={creerRdv}
          >
            Créer
          </Button>
        </Box>
      </Card>
    </form>

        
    </Stack>
    </Box>
      );
};
 export default AddRdv