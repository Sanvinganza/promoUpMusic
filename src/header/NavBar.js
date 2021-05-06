import React from 'react';
import {
    AppBar, Typography, Toolbar, Link,
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BurgerMenu from './BurgerMenu';
import useMediaQuery from '../useMediaQuery';

const style = makeStyles(() => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black',
        justifyContent: 'space-between',
    },
    title: {
        flexGrow: 1,
    },
    abStatic: {
        border: 'solid blue 2px',
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
        transform: 'translate(-50%, -50%)',
    },
    menuItems: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    },
    menuItem: {
        color: 'white',
        marginLeft: '12px',
        marginRight: '12px',
        fontSize: '1.4vw',
        '&:hover': {
            textDecorationLine: 'none',
            color: '#797997',
        },
    },
    menu: {
        height: '30px',
        backgroundColor: 'color',
    },
}));

export default function NavBar() {
    const classes = style();

    const preventDefault = (event) => event.preventDefault();
    const matches = useMediaQuery('(min-width: 600px)');

    return (
        <>
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <div className='styleNavbar.logoHorizontallyCenter'>
                        <img src='./image/logoPromoUp.png' className={classes.logo} alt='logo' />
                    </div>

                    {matches
                        ? (
                            <Typography className={classes.menuItems}>
                                <Link href='#WhatWeDo' className={classes.menuItem} onClick={preventDefault}>
                                    What we do
                                </Link>
                                <Link href='#Cases' className={classes.menuItem} onClick={preventDefault}>
                                    Cases
                                </Link>
                                <Link href='#Services' className={classes.menuItem} onClick={preventDefault}>
                                    Services
                                </Link>
                                <Link href='#WhyUs' className={classes.menuItem} onClick={preventDefault}>
                                    Why us
                                </Link>
                                <Link href='#Pricing' className={classes.menuItem} onClick={preventDefault}>
                                    Pricing
                                </Link>
                                <Link href='#Contacts' className={classes.menuItem} onClick={preventDefault}>
                                    Contacts
                                </Link>
                            </Typography>
                        )
                        : <BurgerMenu />}

                </Toolbar>
            </AppBar>
        </>
    );
}
