import React from 'react';

import { Grid, Box, TextField, Typography, Button, } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './signUp.css'

function SignUp() {

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
                                            label="Username"
                                            variant="filled"
                                        />

                                        <TextField
                                            className="input"
                                            id="filled-password-input"
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
                                        <Button className="button">LOGIN</Button>
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

export default SignUp;