import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box, Stack, AppBar} from '@mui/material';
import Navbar from '../Navbar';
import Sidebar from './SideBarMedecin';
import DossierMedical from './DossierMedical'
import ExamenClinique from './ExamenClinique';
import Antecedent from './Antecedent';
import PatientInfo from './PatientInfo';
import Interogatoire from './Interogatoire';
import Examens from './Examens';
import Billans from './Billans';
import Papiers from './Papiers';


import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
           {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AllAboutPatient() {
    const location = useLocation();
    const idPatient=location.state.idPatient
    const [idConsultation, setIdconsultation] = useState()
    const NumDeMachine=location.state.NumDeMachine
    const [value, setValue] = useState(0);

    axios.get(`http://localhost:9191/service-dm/DM/patient/${idPatient}`)
    .then((response)=>{
      let idDm = response.data.id
      console.log('DM id', idDm)
      axios.get(`http://localhost:9191/service-dm/Consultation/DM/${idDm}`)
      
      .then((response)=>{
        let idCons =  response.data[0].id
        setIdconsultation(idCons)
        console.log('consultation from dm', response.data[0].id)}
        )
    })

    

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
         <Navbar  />
         <Stack direction="row" spacing={30} >
        <Sidebar>
            
        </Sidebar>
        <Stack direction='column'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop:"1%" }}>

        

        <Tabs sx={{position:'static'}}  centered  value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Informations" {...a11yProps(0)} />
          <Tab label="Antécédents" {...a11yProps(1)} />
          <Tab label="Intérogatoire" {...a11yProps(2)} />

          <Tab label="Examens clinique & paraclinique" {...a11yProps(3)} />
          <Tab label="Billans" {...a11yProps(4)} />
          <Tab label="Couriers" {...a11yProps(5)} />

        </Tabs>

        </Box>
        <Box>

     
      <TabPanel value={value} index={0}>
        <PatientInfo idPatient={idPatient}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Antecedent idPatient={idPatient}></Antecedent>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Interogatoire idConsultation={idConsultation}></Interogatoire>
      </TabPanel>
      <TabPanel  value={value} index={3}>
        <Examens NumDeMachine={NumDeMachine}/>

      </TabPanel>

      <TabPanel value={value} index={4}>
        <Billans idPatient={idPatient}/>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Papiers/>
      </TabPanel>
      </Box>
      </Stack>
      </Stack>
      
    </Box>
  );
}
