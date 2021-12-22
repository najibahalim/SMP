import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from '../styles';

export const ProfilePage = () => {
    const classes = useStyles();
    return (
        <Container component={"div"} className={`${classes.smpContainer} ${classes.smpProfile}`}>
               Profile
        </Container>
    )
}