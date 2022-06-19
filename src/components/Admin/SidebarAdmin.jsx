import React from 'react';
import {Box} from "@mui/material"
import { List,ListItem, ListItemIcon, ListItemButton, ListItemText, Switch } from '@mui/material';
import { Home } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';

import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Tous les utilisateurs" />
            </ListItemButton>
          </ListItem>

       

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Ajouter un utilisateur" />
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