import React, { useEffect, useState } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar';
import Sidebar from './sidebarAideS';

import { useLocation } from "react-router-dom";

import axios from 'axios'


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Nom', width: 130 },
    { field: 'lastName', headerName: 'Prénom', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    { field: 'medecin', headerName: 'Medcin du patient', width: 160 },

    {
      field: 'DateCreation',
      headerName: 'Date de création du dossier',
      type:"date",
        
      width: 150,
      
    },
  
     
  ];
  


const AllPatients = () => {
    const navigate = useNavigate()

    const [patients, setPatients]=useState([])
    const [medecinOfPatient, setMedecinOfPatient]=useState([])
    const [selected, setSelected] = useState(null);


    const handleOnCellClick = (params) => {
      setSelected(params);
   
    };
  
  

    const rows=[]
 
    for(let i=0;i<patients.length ;i++){
        let patient = {id: i, lastName: patients[i].prenom, firstName: patients[i].nom,  age:patients[i].age, medecin:"" }
       rows.push(patient)
    }




    useEffect(()=>{
        let token= localStorage.getItem("token")
        let id= localStorage.getItem("id")
        token = token.substring(1,token.length-1)  
        axios.get(`http://localhost:9191/service-auth/aideS/patients`, {
            headers:{
                ContentType:'application/json',
                Authorization: token         
               }
        })
        .then((response)=>{
            var data=response.data
            setPatients(data)
            console.log('data from all patients', data)

            // for(let i=0; i<data.length;i++){
            //   let id = data[i].id
            //   var meds=[]
            //   axios.get(`http://localhost:9191/service-auth/users/${id}/medecin`, {
            //     headers:{
            //         ContentType:'application/json',
            //         Authorization: token         
            //        }
            // })
            // .then((response)=>{
            //   let data = response.data
            //   meds.push(data)
            //   setMedecinOfPatient(meds)
              
            // })
            
            // }
            
        })

        .catch((err)=>{
            console.log('erroe',err)
        
      
          })

    },[])

    // console.log('medecin of patient', medecinOfPatient)




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

export default AllPatients;