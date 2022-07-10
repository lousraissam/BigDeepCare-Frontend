import React, { useEffect, useState } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


import { useLocation } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from './SidebarAdmin';
import axios from 'axios'


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'username', width: 70 },

    { field: 'firstName', headerName: 'Nom', width: 130 },
    { field: 'lastName', headerName: 'Prénom', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'statue', headerName: 'statue', width: 130 },


   
  ];
  


const   AllUsers = () => {
    const navigate = useNavigate()

    const [users, setUsers]=useState([])
    const [selected, setSelected] = useState(null);


    const handleOnCellClick = (params) => {
      setSelected(params);
    };
    console.log("all users", users);

    console.log("selected",selected)
  

    const rows=[]
 
    for(let i=0;i<users.length ;i++){
        let user = {id: users[i].id, lastName: users[i].prenom, firstName: users[i].nom, username: users[i].username,
        email: users[i].email,
        role: users[i].role,
        statue:users[i].state
        }
       rows.push(user)
    }

    

    useEffect(()=>{
        var token= localStorage.getItem("token")
        token = token.substring(1,token.length-1)  
        axios.get("http://localhost:9191/service-auth/users", {
            headers:{
                ContentType:'application/json',
                Authorization: token         
               }
        })
        .then((response)=>{
            var data=response.data
            setUsers(data)

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
        rowsPerPageOptions={[8]}
        checkboxSelection
        onRowClick={handleOnCellClick}
      />
  
    </div>
        </Stack>
       
        </Box>
        
    );
};

export default AllUsers;