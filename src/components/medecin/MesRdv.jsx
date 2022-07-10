
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
  


const MesRdv = () => {
    const navigate = useNavigate()

    const [patients, setPatients]=useState([])
    const [selected, setSelected] = useState(null);


    const handleOnCellClick = (params) => {
      setSelected(params);

   
      var diveceKey = params.row.NumdDeMachine
      
      let idPatient = params.row.id
      
      navigate("/dashboard-medecin/patient/consultations", { state: { idPatient: idPatient,NumDeMachine: diveceKey } })

      


    };
 
  

    const rows=[]
 
    for(let i=0;i<patients.length ;i++){
        let patient = {N:i, id: patients[i].id, lastName: patients[i].prenom, firstName: patients[i].nom, age: patients[i].age, NumdDeMachine:patients[i].deviceKey }
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

export default MesRdv;