import { ButtonBase, Card, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display:"flex",
            flexGrow: 1,
            marginTop: theme.spacing(2),
            justifyContent:'left'
        },
        paper: {
            flex:1,
            padding: theme.spacing(2),
            // margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);


export const DashboardPage = () => {
    const classes = useStyles();
    return (
        <Container component={"div"} className={`${classes.root}`}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm style={{display:'flex'}} justifyContent={'center'}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} src={'/images/pic.png'} alt={'Test Image'} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                <Typography variant="subtitle2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        Firstname Lastname
                                    </Typography>
                                    <Typography variant="body2" color="secondary" >
                                        25yrs. 5 ft 4 in/162 cm,
                                    </Typography>
                                    <Typography variant="body2" color="secondary" gutterBottom>
                                        Baroda, Gujarat, India
                                    </Typography>
                                </Grid>
                                {/* <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Typography>
                                </Grid> */}
                            </Grid>
                            {/* <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Paper>
        </Container>
    )
}