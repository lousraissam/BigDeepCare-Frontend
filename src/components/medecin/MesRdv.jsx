import React, { useEffect, useState } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar';
import Sidebar from './SideBarMedecin';

import { useLocation } from "react-router-dom";

import axios from 'axios'


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'firstName', headerName: 'Nom', width: 130 },
    // { field: 'lastName', headerName: 'Prénom', width: 130 },

    { field: 'patientName', headerName: 'Nom du patient', width: 70 },

 

    {
      field: 'Date',
      headerName: 'Date du rendez-vous',
      type:"date",
        
      width: 200,
      
    },
    {
        field: 'Time',
        headerName: 'time',
        type:"date",
          
        width: 80,
        
      },
    { field: 'state', headerName: 'statu', width: 80 },
    { field: 'description', headerName: 'description', width: 300 },


  
     
  ];
  


const MesRdv = () => {
    const navigate = useNavigate()

    const [mespatients, setMesPatients]=useState([])
    const [idP,setIdP]=useState([])
    const [idCons,setIdCons]=useState([])

    const [mesConsultations, setMesConsultations] = useState([])
    // const [medecinOfPatient, setMedecinOfPatient]=useState([])
    const [selected, setSelected] = useState(null);

    const [consultations, setConsultations]= useState([])

    const [patient, setPatient] = useState()


    const handleOnCellClick = (params) => {
      setSelected(params);
   
    };


   
    const rows=[]
    const [noms, setNoms]=useState([])

    for(let i=0;i<consultations.length ;i++){
         let date = consultations[i].appointmentDate
         let time = consultations[i].appointmentDate
         date = date.toString().substring(0,10)
         time = time.toString().substring(11,16)
         

         let idPatien = consultations[i].dm.patientId
         var token = localStorage.getItem('token')
         token = token.substring(1,token.length-1)
         axios.get(`http://localhost:9191/service-auth/users/patient/${idPatien}`,{
           headers:{
             ContentType:'application/json',
             Authorization: token 
           }
         })
         .then((response)=>{
            // setNoms(response.data.nom)
        //    var data=
         })
        //  console.log("patient response from consultation",noms);


        //  for(let j=0; j<noms.length; j++){

         

          
        let consultation = {id: consultations[i].id, patientName:'', Date: date, Time:time, state: consultations[i].state,  description:consultations[i].dm.description }
       rows.push(consultation)
    // }
}




    useEffect(()=>{

        let token= localStorage.getItem("token")
        let id= localStorage.getItem("id")
        token = token.substring(1,token.length-1)  
        const IdPatient = []
        const Idcons=[]
        axios.get(`http://localhost:9191/service-dm/Consultation/`)
        .then((response)=>{
            var data=response.data
            console.log('consultaion', response)
            // setPatients(data)
            setConsultations(data)
            for (let i=0; i<consultations.length; i++){
                Idcons.push(consultations[i].dm.patientId)
                setIdCons(Idcons)
            }
            axios.get(`http://localhost:9191/service-auth/users/medecin/${id}/patients`, {
                headers:{
                    ContentType:'application/json',
                    Authorization: token         
                   }
            })
            
            .then((response)=>{
                var data1=response.data
                setMesPatients(data1)
                for(let i=0; i<data1.length; i++){
                    IdPatient.push(data1[i].id)
                }
                setIdP(IdPatient)

                for(let i=0; i<idP.length; i++){
                    if(idCons.indexOf(idP[i]) !== -1){

                    }
                }

    
            })


            
        })

        .catch((err)=>{
            console.log('erroe',err)
        
      
          })

    },[])

    // console.log('medecin of patient', medecinOfPatient)

    console.log('consultations', consultations)
    // console.log('id de mes patiens', idP)
    // console.log('id de tous les consultation', idCons)





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

export default MesRdv;