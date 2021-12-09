
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


 import "../navbar/navbar.css"
import CartWidget from './CartWidget/CartWidget';

export default function Navbar() {
    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Howl
            </Typography>
            <CartWidget/>
            <button className="buttonCarrito">1</button>
            
          </Toolbar>
        </AppBar>
      </Box>
        
        
    )
}
