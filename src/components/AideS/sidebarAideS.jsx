import React from 'react';
import {Box} from "@mui/material"
import { List,ListItem, ListItemIcon, ListItemButton, ListItemText, Switch } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { Home } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { styled, useTheme } from '@mui/material/styles';

import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'




const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color:'#1F1F1F'
}));

const Sidebar = ({mode, setMode}) => {
    return (
        <Box  flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}}>
          <Box position="fixed">
            <List >   
        

          <StyledNavLink to= "/dashboard-aideS/medecins">
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
              <FontAwesomeIcon icon={faUserDoctor} />
              </ListItemIcon>
              <ListItemText primary="Liste des medecins" />
            </ListItemButton>
          </ListItem>
          </StyledNavLink>
          <StyledNavLink to="/dashboard-medecin/creer-dossier">
          <StyledNavLink to= "/dashboard-aideS/patients">
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Liste des patients" />
            </ListItemButton>
          </ListItem>
          </StyledNavLink>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Créer un compte" />
            </ListItemButton>
          </ListItem>
          </StyledNavLink>

          <ListItem disablePadding>
          <StyledNavLink to="/dashboard-aideS/creer-medical">

            <ListItemButton >
              <ListItemIcon>
                <MedicalInformationIcon />
              </ListItemIcon>
              <ListItemText primary="Créer un dossier" />
              
            </ListItemButton>
            </StyledNavLink>
          </ListItem>

          <ListItem disablePadding>
          <StyledNavLink to="/dashboard-aideS/creer-rdv">

            <ListItemButton >
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Rendez vous" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>
          
          


      
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <StyledNavLink to="/dashboard-aideS/mon-profil">

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          </StyledNavLink>
         
          {/* <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light"? "dark" : "light")}></Switch>
            </ListItemButton>
          </ListItem> */}
        </List>
        </Box>
        </Box>
    );
};

export default Sidebar;