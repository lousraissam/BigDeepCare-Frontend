import React from 'react'
import {Box, Container, Stack, createTheme, ThemeProvider} from "@mui/material"
import { useLocation } from "react-router-dom";
import { AccountProfileDetails } from './Profile';

import Navbar from './Navbar'
import Sidebar from './medecin/SideBarMedecin'

export const DashboardMedecin = ()=>{
    const location = useLocation();
    // console.log("new test", location.state.username)

    return(
        <div>
            <Box>
            <Navbar username={location.state.username}/>
            <Stack direction="row" spacing={30} justifyContent="space-between">
                <Sidebar></Sidebar>
                {/* <AccountProfileDetails></AccountProfileDetails> */}
            </Stack>
            </Box>

        </div>
    )
}