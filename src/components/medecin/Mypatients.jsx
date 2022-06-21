import React, { useEffect, useState } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


import { useLocation } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from './SideBarMedecin';
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
    {
      field: 'DateCreation',
      headerName: 'Date de création du dossier',
      type:"date",
        
      width: 150,
      
    },
    {
        field: 'DateModification',
        headerName: 'Date du dernière modification',
        type:"date",
       
        width: 150,
        
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


    const handleOnCellClick = (params) => {
      setSelected(params);
      var diveceKey = selected.row.NumdDeMachine
      console.log('device',diveceKey )

      navigate("/dashboard-medecin/ecg", { state: { NumDeMachine: diveceKey } })
    };
    console.log("patients", patients);

    console.log("selected",selected)
  

    const rows=[]
 
    for(let i=0;i<patients.length ;i++){
        let patient = {id: i, lastName: patients[i].prenom, firstName: patients[i].nom, age: patients[i].age, NumdDeMachine:patients[i].deviceKey }
       rows.push(patient)
    }

    const rows1 = [
        { id:2,  lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      for(let i=0; i<rows1.length; i++){
        rows.push(rows1[i])

      }


    useEffect(()=>{
        var token= localStorage.getItem("token")
        token = token.substring(1,token.length-1)  
        axios.get("http://localhost:9191/service-auth/users/medecin/4/patients", {
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onRowClick={handleOnCellClick}
      />
  
    </div>
        </Stack>
       
        </Box>
        
    );
};

export default Mypatients;