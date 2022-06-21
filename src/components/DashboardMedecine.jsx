import React from 'react'
import {Box, Container, Stack, createTheme, ThemeProvider} from "@mui/material"
import { useLocation } from "react-router-dom";
import { AccountProfileDetails } from './Profile';
import { BrowserRouter as Router, Routes, Route,Switch, Navigate, Link  } from 'react-router-dom';

import Mypatients from './medecin/Mypatients';
import CreeDossier from './medecin/CreeDossier';
import DossierMedical from './medecin/DossierMedical';
import ExamenClinique from './medecin/ExamenClinique';
import MesRdv from './medecin/MesRdv';

import Navbar from './Navbar'
import Sidebar from './medecin/SideBarMedecin'
import PersistentDrawerLeft from './medecin/testside';
export const DashboardMedecin = ()=>{
    const location = useLocation();
    // console.log("new test", location.state.username)

    return(
        <div>
            <Box>
            <Navbar  username={location.state.username}/>
            <Stack direction="row" spacing={30} justifyContent="space-between">
                <Sidebar  >

                        {/* <Routes>
                        <Route  path="/mes-patients" element={<Mypatients />} />
                        <Route exact={true} path="/dashboard-medecin/Créer-dossier" element={<CreeDossier />} />
                        <Route exact={true} path="/dashboard-medecin/dossier-medical" element={<DossierMedical />} />
                        <Route exact={true} path="/dashboard-medecin/examen-clinique" element={<ExamenClinique />} />
                        <Route exact={true} path="/dashboard-medecin/mes-rdv" element={<MesRdv />} />
                        <Route exact={true} path="/dashboard-medecin/mon-profil" element={<AccountProfileDetails />} />

                        
                        </Routes> */}



                </Sidebar>
                {/* <AccountProfileDetails></AccountProfileDetails> */}
            </Stack>
            </Box>

        </div>
    )
}