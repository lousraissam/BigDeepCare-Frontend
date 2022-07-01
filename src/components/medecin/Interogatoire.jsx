import React from 'react';
import { useState, useEffect } from 'react';
import {Box, Container, Stack, createTheme, ThemeProvider, Typography} from "@mui/material"
import { useLocation } from "react-router-dom";

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const Interogatoire = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (

        <Box>

    <Stack>
      <FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="Douleur torasique" />
   <FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="dyspne" />

<FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="hypotimie" />
 </Stack>

<Stack>
<FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="palpitations" />

<FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="sedantarite" />

<FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="syncope"
  />

<FormControlLabel control={<Checkbox checked={checked}
 onChange={handleChange}
 inputProps={{ 'aria-label': 'controlled' }} />} label="colestrol"
  />    

</Stack>

    </Box>




     
    );
};

export default Interogatoire;