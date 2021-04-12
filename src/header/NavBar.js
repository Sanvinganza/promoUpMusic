import React from 'react';
import { AppBar, Button, Typography, Toolbar, makeStyles, Link, useMediaQuery } from '@material-ui/core';

export default function navBar() {
  const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'black',
      justifyContent: 'space-between',
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
    abStatic: {
      border: "solid blue 2px"
    },
    IconButton: {

    },
    ButtonContacts: {
      borderRadius: '80px',
      backgroundColor: 'white',
      color: 'black',
      fontSize: '12px',
      fontFamily:'bold',
      paddingLeft: '15px',
      paddingRight: '15px',
      "&:hover":{
        backgroundColor: '#898989',
        color: 'white'
      } 
    },
    logo: {
      textAlign: 'center',
      maxWidth: '80px',
      maxHeight: '80px',
    },
    logoHorizontallyCenter: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    menuItems: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    menuItem: {
      color: 'white',
      marginLeft: '12px',
      marginRight: '12px',
      "&:hover": {
        textDecorationLine: 'none',
        color: '#797997'
      }
    }
  }))();

  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className="classes.logoHorizontallyCenter">
            <img src={'./promoUpMusic/image/logoPromoUp.png'} className={classes.logo} alt="logo" />
          </div>
          
          <Typography className={classes.menuItems}>
            <Link href="#" className={classes.menuItem} onClick={preventDefault}>
              What we do
          </Link>
            <Link href="#" className={classes.menuItem} onClick={preventDefault}>
              Cases
          </Link>
            <Link href="#" className={classes.menuItem} onClick={preventDefault}>
              Services
          </Link>
            <Link href="#" className={classes.menuItem} onClick={preventDefault}>
              Why us
          </Link>
            <Link href="#" className={classes.menuItem} onClick={preventDefault}>
              Pricing
          </Link>
          </Typography>

          <Button color="inherit" className={classes.ButtonContacts}>contacts</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}