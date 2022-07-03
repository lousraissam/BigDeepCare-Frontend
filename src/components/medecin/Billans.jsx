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
  
  
  
  import { useEffect, useState, useRef } from 'react';
  import axios from 'axios'
import { useLocation } from "react-router-dom";


const Billans = (props) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adresse:"",
        state:""
      });
    
    

    

      var d = new Date
      var month = d.getMonth()+1
      var day = d.getDate()
      if (month<10){month = '0' + month}
      if(day<10){day= '0'+day}
      
      var date = [d.getFullYear(),
               month,
              day,
             ].join('-')


   
      const [creatinine, setCreatinine] = useState('')
      const [triglycerides, setTriglycerides] = useState('')
      const [cholesterolTotal, setCholesterolTotal] = useState('')
      const [hdlCholesterol, setHdlCholesterol] = useState('')
       const [ldlCholesterol, setLdlCholesterol] = useState('')

        const [glycemie_a_jeun, setGlycemie_a_jeun] = useState('')
        const [hemoglobine_glyquee, setHemoglobine_glyquee] = useState('')

        const [pH, setPH] = useState('')
        const [densite, setDensite] = useState('')
        const [glucose, setGlucose] = useState('')
        const [corps_cetoniques, setCorps_cetoniques] = useState('')
        const [proteines, setProteines] = useState('')
        const [sang, setSang] = useState('')
        const [leucocytes, setLeucocytes] = useState('')
        const [nitrites, setNitrites] = useState('')
        const [urobilinogene, setUrobilinogene] = useState('')
        const [bilirubine, setBilirubine] = useState('')

        // bilan gloabal

        var nomMedecin = localStorage.getItem('username')
        nomMedecin=nomMedecin.substring(1, nomMedecin.length-1)

        const [lipidique, setLipidique]= useState({
          createDate:date,
          dtype:"BillanLipidique",
          patientName:"",
          patientAge:"",
          doctorName: nomMedecin,
          titre:'Billan lipidique',
          creatinine,
          triglycerides,
          cholesterolTotal,
          hdlCholesterol,
          ldlCholesterol
        })

        const[hba, setHba] = useState({
          createDate:date,
          dtype:'HbA1c',
          patientName:"",
          patientAge:"",
          doctorName: nomMedecin,
          titre:'Billan Hba',
          glycemie_a_jeun,
          hemoglobine_glyquee

        })

        const [renal, setRenal]=useState({
          createDate:date,
          dtype:"rénal",
          patientName:"",
          patientAge:"",
          doctorName: nomMedecin,
          titre:'Billan renal',
          pH,
          densite,
          glucose,
          corps_cetoniques,
          proteines,
          sang,
          leucocytes,
          nitrites,
          urobilinogene,
          bilirubine

        })

        useEffect(()=> {
          const idPatient=props.idPatient
    
        var token = localStorage.getItem('token')
        token = token.substring(1,token.length-1)
    
        axios.get(`http://localhost:9191/service-auth/users/patient/${idPatient}`,{
          headers:{
            ContentType:'application/json',
            Authorization: token 
          }
        })
        .then((response)=>{
          let data=response.data
          console.log('data from billan', data)

          // nom.current=data.nom
          // age.current=data.age
          setLipidique({...lipidique, patientName: data.nom, patientAge: data.age })
          setHba({...hba, patientName: data.nom, patientAge: data.age })
          setRenal({...renal, patientName: data.nom, patientAge: data.age })

        })
        .catch((err)=>console.log("error", err))
      },[])




console.log('rénal', renal)

const saveHba = ()=>{
  axios.post('http://localhost:9004/addHbA1c', hba)
  .then((response)=>console.log('respone hba', response))
  .catch((err)=>console.log(err))
}

const saveLipidique = ()=>{
  axios.post('http://localhost:9004/addBL', lipidique)
  .then((response)=>console.log('respone hba', response))
  .catch((err)=>console.log(err))
}

const saveRenal = ()=>{
  axios.post('http://localhost:9004/addRénal', hba)
  .then((response)=>console.log('respone hba', renal))
  .catch((err)=>console.log(err))
}





  const changeLipidique = (event) => {
    setLipidique({
      ...lipidique,
      [event.target.name]: event.target.value
    });
  };

  const changeRenal = (event) => {
    setRenal({
      ...renal,
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
                onChange={changeLipidique}
              
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
                label="triglycerides"
                name="triglycerides"
             
                onChange={changeLipidique}
                // required
                // value={values.firstName}
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
               
                onChange={changeLipidique}
                // required
                // value={values.email}
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
                
                onChange={changeLipidique}
                // type="number"
                // value={values.phone}
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
                onChange={changeLipidique}
               
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
          onClick={saveLipidique}
            color="primary"
            variant="contained"
          >
            Save Lipidique
          </Button>
        </Box>
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
                onChange={(event)=>{
                  setGlycemie_a_jeun(event.target.value)
                  setHba({...hba, glycemie_a_jeun:event.target.value })
                }}
                // onChange={handleChange}
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
                label="hemoglobine glyquee"
                name="hemoglobine_glyquee"
                onChange={(event)=>{
                  setHemoglobine_glyquee(event.target.value)
                  setHba({...hba, hemoglobine_glyquee:event.target.value })
                }}
                // onChange={handleChange}
                // required
                // value={values.firstName}
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
          onClick={saveHba}
            color="primary"
            variant="contained"
          >
            Save HBA
          </Button>
        </Box>



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
                onChange={changeRenal}
               
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
                onChange={changeRenal}
               
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
                onChange={changeRenal}
               
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
                onChange={changeRenal}
              
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
                onChange={changeRenal}
               
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
                onChange={changeRenal}
                
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
                onChange={changeRenal}
              
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
                onChange={changeRenal}
               
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
                onChange={changeRenal}
                type="number"
                
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
                onChange={changeRenal}
               
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
            onClick={saveRenal}
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