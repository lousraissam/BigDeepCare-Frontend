
import React, { useEffect, useState } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


import { useLocation } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from './SideBarMedecin';
import axios from 'axios'


const columns = [
    { field: 'N', headerName: 'N', width: 70 },
    { field: 'idConsultation', headerName: 'ID Consultation', width: 70 },
    {
      field: 'DateCreation',
      headerName: 'Date du rendez-vous',
      type:"date",
        
      width: 150,
      
    },


    { field: 'id', headerName: 'ID', width: 70 },



    { field: 'firstName', headerName: 'Nom', width: 130 },
    { field: 'lastName', headerName: 'Prénom', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
  
      {
        field: 'NumdDeMachine',
        headerName: 'Num de machine',
        type: 'number',
        width: 40,
      },
  ];
  


const Mypatients = () => {
    const navigate = useNavigate()

    const [patients, setPatients]=useState([])
    const [selected, setSelected] = useState(null);
    const [consultations, setConsultations]= useState([])
    const [idCons,setIdCons]=useState([])




    const handleOnCellClick = (params) => {
      setSelected(params);

      // for addData to add after 
      // if (selected!==is)
      var diveceKey = params.row.NumdDeMachine
      // console.log('device',diveceKey )

      // navigate("/dashboard-medecin/ecg", { state: { NumDeMachine: diveceKey } })
      let idPatient = params.row.id
      // navigate("/dashboard-medecin/dossier-medical", { state: { idPatient: idPatient } })
      navigate("/dashboard-medecin/patient", { state: { idPatient: idPatient,NumDeMachine: diveceKey } })

      


    };
    // console.log("patients", patients);

    // console.log("selected",selected)
  

    const rows=[]
 
    for(let i=0;i<consultations.length ;i++){
        let patient = {N:i, idConsultation: consultations[i].consultation.id,DateCreation:consultations[i].consultation.createDate , id:consultations[i].patient.id , lastName: consultations[i].patient.prenom, firstName: consultations[i].patient.nom, age: consultations[i].patient.age, NumdDeMachine:consultations[i].patient.deviceKey }
       rows.push(patient)
    }
 


    useEffect(()=>{
        let token= localStorage.getItem("token")
        let id= localStorage.getItem("id")
        token = token.substring(1,token.length-1)  
        axios.get(`http://localhost:9191/service-auth/users/medecin/${id}/patients`, {
            headers:{
                ContentType:'application/json',
                Authorization: token         
               }
        })
        .then((response)=>{
            var data=response.data
            setPatients(data)
            // setNom(response.data[0].nom)
            // setPrenom(response.data[0].prenom)
            // setAge(response.data[0].age)



        })

        .catch((err)=>{
            console.log('erroe',err)
        
      
          })
          

    },[])

    useEffect(()=>{

      let token= localStorage.getItem("token")
      let idMedecin= localStorage.getItem("id")
      token = token.substring(1,token.length-1)  
      const IdPatient = []
      const Idcons=[]
      axios.get(`http://localhost:9191/service-dm/Consultation/medecin/${idMedecin}/all`,{ 
      headers:{
        ContentType:'application/json',
        Authorization: token 
      }
    })
      .then((response)=>{
          var data=response.data
          console.log('consultaion', response)
          // setPatients(data)
          setConsultations(data)
          // for (let i=0; i<consultations.length; i++){
          //     Idcons.push(consultations[i].dm.patientId)
          //     setIdCons(Idcons)
          // }
          // axios.get(`http://localhost:9191/service-auth/users/medecin/${id}/patients`, {
          //     headers:{
          //         ContentType:'application/json',
          //         Authorization: token         
          //        }
          // })
          
          // .then((response)=>{
          //     var data1=response.data
          //     setMesPatients(data1)
          //     for(let i=0; i<data1.length; i++){
          //         IdPatient.push(data1[i].id)
          //     }
          //     setIdP(IdPatient)

          //     for(let i=0; i<idP.length; i++){
          //         if(idCons.indexOf(idP[i]) !== -1){

          //         }
          //     }

  
          // })


          
      })

      .catch((err)=>{
          console.log('erroe',err)
      
    
        })

  },[])



    return (
        <Box>
        <Navbar  />
        <Stack direction="row" spacing={30} justifyContent="space-between">
            <Sidebar>

                
            </Sidebar>
            <div style={{ height: 500, width: '100%', marginTop:"3%", marginBottom:"3%", marginRight:"3%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        onRowClick={handleOnCellClick}
      />
  
    </div>
        </Stack>
       
        </Box>
        
    );
};

export default Mypatients;




// ///////////////////////
