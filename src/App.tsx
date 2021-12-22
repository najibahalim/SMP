import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Hidden, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, CssBaseline, Container, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AboutUsPage } from './pages/AboutUs';
import './App.scss';
import { useStyles } from './styles';
import { Dashboard, InfoRounded, Person, PersonRounded } from '@material-ui/icons';
import { ProfilePage } from './pages/Profile';
import { DashboardPage } from './pages/Dashboard';

const menu = [
  { title: 'Dashboard', link: '/',component:<DashboardPage/>, icon: <Dashboard /> },
  { title: 'Profile', link: '/profile', component:<ProfilePage/>,icon: <Person /> },
  { title: 'About Us', link: '/about', component:<AboutUsPage/>,icon: <InfoRounded /> }]

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const App = ({ window }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <AppBar position="fixed" className={classes.appBarDrawer}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          SMP
        </Typography>
      </Toolbar>
      </AppBar>
      <Divider />
      <div className={classes.toolbar} />
      <List>
        {menu.map((item, index) => (
          <ListItem component={Link} onClick={handleDrawerToggle} to={item.link} button key={item.title}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smUp implementation="css">
            <Typography variant="h6" noWrap>
              SMP
            </Typography>
          </Hidden>
        </Toolbar> 
        </AppBar>
      <Router>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        {/* {React.createElement(menu[0].component)} */}
          <Switch>
            {menu.map((item,index) => 

               <Route exact key={index} path={item.link} render={() => item.component}></Route>              
                )}
          </Switch>
        </main>
      </Router>

    </div>
  );
}

export default App;