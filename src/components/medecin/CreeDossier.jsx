import React from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { useLocation } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from './SideBarMedecin';
const CreeDossier = () => {
    const location = useLocation();

    return (
        <Box>
        <Navbar  />
        <Stack direction="row" spacing={10} justifyContent="space-between">
            <Sidebar>

                
            </Sidebar>
            <Typography variant="body1" color="initial">Créer un dossier</Typography>
        </Stack>
        </Box>
        
    );
};

export default CreeDossier;