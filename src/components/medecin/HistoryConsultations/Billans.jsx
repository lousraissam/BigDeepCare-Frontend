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


const Billans = (props) => {
  const idPatient=props.idPatient
  const [billan, setBillan]=useState()
   
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
          setLipidique({...lipidique, patientName: data.nom, patientAge: data.age })
          setHba({...hba, patientName: data.nom, patientAge: data.age })
          setRenal({...renal, patientName: data.nom, patientAge: data.age })

        })
        .catch((err)=>console.log("error", err))
      },[])



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

  useEffect(()=>{
    axios.get(`http://localhost:9191/service-dm/Consultation/Patient/${idPatient}/BP`)
    .then((response)=>{
      setBillan(response.data[0])
    })
    .catch((err)=>console.log('err bilan', err))

  },[])

  console.log('response bilaaaaaaaaan', billan)





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
              disabled
                fullWidth
                // label="creatinine"
                name="creatinine"
                value={billan?.creatinine}
               
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
                // label="triglycerides"
                name="triglycerides"
                value={billan?.triglycerides}
             
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
                // label="cholesterolTotal"
                value={billan?.cholesterolTotal}

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
              disabled
                fullWidth
                // label="hdlCholesterol"
                value={billan?.hdlCholesterol}

                name="hdlCholesterol"
                
               
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
                // label="ldlCholesterol"
                value={billan?.ldlCholesterol}

                name="ldlCholesterol"
                // onChange={changeLipidique}
               
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
              disabled
                fullWidth
                // label="glycemie a jeun"
                name="glycemie_a_jeun"
                value={billan?.glycemie_a_jeun}

               
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
                // label="hemoglobine glyquee"
                value={billan?.hemoglobine_glyquee}
                name="hemoglobine_glyquee"
              
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
              disabled
                fullWidth
                name="pH"
                value={billan?.ph}

               
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
                // label="densite"
                name="densite"
                value={billan?.densite}
                // onChange={changeRenal}
               
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
                // label="glucose"
                name="glucose"
                // onChange={changeRenal}
                value={billan?.glucose}

               
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
                // label="corps cetoniques"
                name="corps_cetoniques"
                // onChange={changeRenal}
                value={billan?.corps_cetoniques}
              
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
                // label="proteines"
                name="proteines"
                // onChange={changeRenal}
                value={billan?.proteines}

               
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
                // label="sang"
                name="sang"
                // onChange={changeRenal}
                value={billan?.sang}

                
                
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
                // label="leucocytes"
                name="leucocytes"
                // onChange={changeRenal}
                value={billan?.leucocytes}

              
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
                // label="nitrites"
                name="nitrites"
                value={billan?.nitrites}

                // onChange={changeRenal}
               
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
                // label="urobilinogene"
                // name="urobilinogene"
                // onChange={changeRenal}
                type="number"
                value={billan?.urobilinogene}

                
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
                // label="bilirubine"
                name="bilirubine"
                value={billan?.bilirubine}

                // onChange={changeRenal}
               
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
        
        </Box>
      </Card>
    </form>
        </Box>
        
    );

 
};

export default Billans;