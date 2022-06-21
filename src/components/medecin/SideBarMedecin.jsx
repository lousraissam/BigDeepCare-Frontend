import React from 'react';
import {Box} from "@mui/material"
import { List,ListItem, ListItemIcon, ListItemButton, ListItemText, Switch, Toolbar,Drawer,Divider, Typography  } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { NavLink, Link } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color:'#1F1F1F'
}));

const Sidebar = ({children}) => {


   
    return (
        <Box  flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}}>
          <Box position="fixed">

            <List >
          <ListItem disablePadding>
            <StyledNavLink to= '/dashboard-medecin'>
            <ListItemButton >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>
          <Divider/>
          <StyledNavLink to='/dashboard-medecin/mes-patients'>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Mes Patients" />
            </ListItemButton>
          </ListItem>
          </StyledNavLink >

          <ListItem disablePadding>
            <StyledNavLink to="/dashboard-medecin/creer-dossier">
            <ListItemButton >
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Créer un dossier" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>

          <ListItem disablePadding>
            <StyledNavLink to="/dashboard-medecin/dossier-medical">
            <ListItemButton >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Dossier medical" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>

          <ListItem disablePadding>
            <StyledNavLink to="/dashboard-medecin/examen-clinique">
            <ListItemButton >
              <ListItemIcon>
                <MonitorHeartIcon/>
              </ListItemIcon>
              <ListItemText primary="Examen clinique" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>

          <ListItem disablePadding>
            <StyledNavLink to="/dashboard-medecin/mes-rdv">
            <ListItemButton >
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Mes rendez vous" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>
          <Divider/>


      
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <StyledNavLink to="/dashboard-medecin/mon-profil">
            <ListItemButton >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            </StyledNavLink>
          </ListItem>
          <Divider/>

         
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