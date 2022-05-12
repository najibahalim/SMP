import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    smpToolbar:{
      color:'#ffffff',
      backgroundColor:'#00af80',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBarDrawer: {
      right: 'auto',
      maxWidth:240,
    },
    appBar: {
      color:'#ffffff',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
    },
    smpContainer:{
      padding: theme.spacing(2),
    },
    smpAboutUs:{
      display:'flex',
      justifyContent:'center',
      direction: 'rtl',
      flexDirection:"column",
      textAlign: 'justify',
      '& .MuiTypography-root' : {
        fontFamily: "Urdu Typesetting, sans-serif",
        fontSize: 25,
        marginTop:theme.spacing(2)
      },
      '& .heading' :{
        color: theme.palette.primary.main,
        textAlign: 'center',
        fontSize: 30,
        marginTop:0
      }
    },
    
  smpProfile:{

  }  }),
);