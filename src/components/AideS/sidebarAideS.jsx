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

const Sidebar = ({mode, setMode}) => {
    return (
        <Box  flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}}>
          <Box position="fixed">
            <List >
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Rendez vous" />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Créer un dossier" />
            </ListItemButton>
          </ListItem>


      
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
         
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