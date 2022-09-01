import React from 'react';

import { Grid, TextField, Typography, Button, } from '@material-ui/core';
import { Box } from '@mui/material';

import { Link } from 'react-router-dom';

import './SignUp.css';

function SignUp() {

    return (
        <>
            <Grid container>

                <Box className="container">

                    <Box className="box">

                        <Box className="box-image">

                            <img className="img" src="https://cdn.discordapp.com/attachments/710276943592816720/1014999749453172838/video-conferencing-concept-landing-page_52683-20174.png" alt="register-image" />

                        </Box>

                        <Box className="signup">

                            <Box className="signup-container">

                                <Box className="title-box">
                                    <Typography className="title" variant="h3"> Join Us</Typography>
                                </Box>

                                <Box className="input-container">

                                    <Box className="input-box">
                                        <TextField
                                            className="input"
                                            id="name"
                                            name="name"
                                            label="Name"
                                            variant="filled"
                                        />
                                    </Box>

                                    <Box className="input-box">
                                        <TextField
                                            className="input"
                                            id="username"
                                            name="username"
                                            label="Username"
                                            type="email"
                                            variant="filled"
                                        />
                                    </Box>

                                    <Box className="input-box">
                                        <TextField
                                            className="input"
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            variant="filled"
                                        />
                                    </Box>

                                    <Box className="input-box" id="confirmpass-box">
                                        <TextField
                                            className="input"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            variant="filled"
                                        />
                                    </Box>

                                </Box>

                                <Box className="links-container">
                                    <Link to='/login' className="links">I already have an account</Link>
                                </Box>

                                <Link className="btn" to='/login'>
                                    <Button type="submit" className="button">REGISTER</Button>
                                </Link>

                            </Box>

                        </Box>

                    </Box>

                </Box>

            </Grid>
        </>
    )
}

export default SignUp;