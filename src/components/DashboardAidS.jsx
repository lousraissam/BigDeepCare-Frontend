import React from 'react'
import Sidebar from './AideS/sidebarAideS'
import Navbar from './Navbar'
import {Box, Container, Stack, createTheme, ThemeProvider} from "@mui/material"
import { useLocation } from "react-router-dom";
export const DashboardAidS = ()=>{
    const location = useLocation();

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