import React from 'react';
import {AppBar, styled,alpha, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const StyledToolbar =styled(Toolbar)({
    display:"flex",
    justifyContent:'space-between'
})

// const Search = styled("div")(({ theme })=>({
//     backgroundColor:"white",
//     padding: "0, 10px",
//     borderRadius: theme.shape.borderRadius,
//     width: "35%"
// }))
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Icons = styled(Box)(({ theme })=>({display:"flex", gap:"20px", alignItems:"center"
}))
const Navbar = (props) => {
    console.log("from props",props.username)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const onLogOut =()=>{
        localStorage.removeItem('token');
        navigate('/')
      
      }

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{display:{xs:"none", sm:'block'}}}>CHU
                </Typography>
                <Pets sx={{display:{xs:"block", sm:"none"}}}></Pets>

                <Search> 
                     <SearchIconWrapper>
                            <SearchIcon />

            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             </Search>

                <Icons>
                {/* <Badge badgeContent={4} color="error">
                </Badge> */}

                {/* <Badge sx={{display:{xs:"none", sm:"block"}}} badgeContent={4} color="error">
                    <Mail/>
                </Badge> */}
                <Badge sx={{display:{xs:"none", sm:"block"}}} badgeContent={2} color="error">
                    <Notifications/>
                </Badge>
                
                <Avatar onClick={e=>setOpen(true)} sx={{with:"20px", hight:"20px"}} alt="lousra issam" src="../images/med1.jpeg" />
                <Typography onClick={e=>setOpen(true)} variant='h6' sx={{display:{xs:"none", sm:'block'}}}> {props.username} </Typography>
                </Icons>
            </StyledToolbar>

            <Menu
        id="basic-menu"
        open={open}
        onClose={e=>setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={onLogOut}>Logout</MenuItem>
      </Menu>


        </AppBar>
      
    );
};

export default Navbar;