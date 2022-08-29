import React from 'react';
import { Grid, Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import './navbar.css'

function navbar() {
  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="toolbar">

        <Box>
          <img src="https://cdn.discordapp.com/attachments/999780979814182942/1013877787439931445/logo_vitor.png" alt="logo" className="logo" />
        </Box>

        <Box className="button">
          <Box>
            <Button variant="contained" className="btn">
              SIGN UP
            </Button>
          </Box>

          <Box>
            <Button variant="contained" className="btn">
              SIGN IN
            </Button>
          </Box>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default navbar;