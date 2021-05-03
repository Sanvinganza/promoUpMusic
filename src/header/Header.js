import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';

const style = makeStyles(() => ({
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(./image/header/bgHeader.jpg)',
        height: '70vw',
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    text: {
        fontWeight: '600',
        color: 'white',
        fontSize: '5.5vw',
        textShadow: '1px 2px 2px black, 0 0 1em grey',
    },
    buttonGroup: {
        marginTop: '13vw',
    },
    button: {
        color: 'white',
        fontWeight: '600',
        borderRadius: '3vw',
        padding: '0.55em 2em 0.55em 2em',
        fontSize: '2.4vw',
    },
    letGo: {
        '&:hover': {
            fontSize: '2.4vw',
        },
    },
    contact: {
        '&:hover': {
            fontSize: '2.4vw',
        },
    },
}));

export default function TopBar() {
    const classes = style();

    return (
        <>
            <NavBar />
            <div className={classes.body}>
                <div className={classes.text}>
                    <center>
                        YOUR
                        {' '}
                        <span style={{ color: 'rgb(30, 185, 85)' }}>
                            MUSIC DIGITAL
                            <br />
                            MARKETING
                        </span>
                        {' '}
                        & SOCIAL MEDIA
                        <br />
                        {' '}
                        MANAGEMENT TEAM
                        <br />
                        <span style={{ fontSize: '0.53em' }}>Strategic and consistent approach to your music brand organic growth</span>
                        <div className={classes.buttonGroup}>
                            <Button className={classes.button} style={{ backgroundColor: 'rgb(30, 185, 85)', marginRight: '1.4vw' }}>LET`S GO!</Button>
                            <Button className={classes.button} style={{ border: '2px solid #4CAF50', marginLeft: '1.4vw' }}>CONTACT</Button>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
}
