import React from 'react';

import { Grid, TextField, Typography, Button, } from '@material-ui/core';
import { Box } from '@mui/material';

import { Link } from 'react-router-dom';

import './SignIn.css';

function SignIn() {

    return (
        <>
            <Grid container>
                
                    <Box className="container">

                        <Box className="box">

                            <Box className="signin">

                                <Box className="signin-container">

                                    <Typography className="title" variant="h3"> Welcome</Typography>

                                    <Box className="input-container">
                                        <TextField
                                            className="input"
                                            id="username"
                                            name="username"
                                            label="Username"
                                            type="email"
                                            variant="filled"
                                        />

                                        <TextField
                                            className="input"
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="filled"
                                        />
                                    </Box>

                                    <Box className="links-container">
                                        <Link to='' className="links">I forgot my password</Link>
                                        <Link to='/register' className="links">I don't have an account</Link>
                                    </Box>

                                    <Link className="btn" to='/home'>
                                        <Button className="button" type="submit">LOGIN</Button>
                                    </Link>

                                </Box>

                            </Box>

                            <Box className="box-image">

                                <img className="img" src="https://cdn.discordapp.com/attachments/710276943592816720/1014292458202484756/signup-img.png" alt="login-image" />

                            </Box>

                        </Box>

                    </Box>
                
            </Grid>
        </>
    )
}

export default SignIn;