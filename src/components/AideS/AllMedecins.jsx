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
      field: 'DateCreation',
      headerName: 'Date de création du dossier',
      type:"date",
        
      width: 150,
      
    },

  ];
  


const AllMedecins = () => {
    const navigate = useNavigate()

    const [medecins, setMedecins]=useState([])
    const [selected, setSelected] = useState(null);


    const handleOnCellClick = (params) => {
      setSelected(params);
   
    };
  
  

    const rows=[]
 
    for(let i=0;i<medecins.length ;i++){
        let patient = {id: i, lastName:medecins[i].prenom, firstName: "Dr ." + medecins[i].nom }
       rows.push(patient)
    }




    useEffect(()=>{
        let token= localStorage.getItem("token")
        let id= localStorage.getItem("id")
        token = token.substring(1,token.length-1)  
        axios.get(`http://localhost:9191/service-auth/aideS/medecins`, {
            headers:{
                ContentType:'application/json',
                Authorization: token         
               }
        })
        .then((response)=>{
            var data=response.data
            setMedecins(data)
        

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

export default AllMedecins;