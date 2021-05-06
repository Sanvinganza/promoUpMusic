import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import useMediaQuery from '../useMediaQuery';

const style = makeStyles(() => ({
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(./image/header/bgHeader.jpg)',
        height: '70vw',
        backgroundColor: 'rgba(0,0,0,.3)',
        minHeight: '700px',
        backgroundRepeat: 'round',
        fontWeight: '600',
        color: 'white',
        fontSize: '36px',
    },
    text: {
        textShadow: '1px 2px 2px black, 0 0 1em grey',
    },
    minText: {
        fontSize: '24px',
    },
    buttonGroup: {
        marginTop: '13vw',
    },
    button: {
        color: 'white',
        fontWeight: '600',
        borderRadius: '5vw',
        padding: '0.55em 2em 0.55em 2em',
        fontSize: '24px',
        textShadow: '1px 2px 2px black, 0 0 1em grey',
    },
    minButton: {
        fontSize: '14px',
        color: 'white',
        fontWeight: '600',
        borderRadius: '20px',
    },
}));

export default function TopBar() {
    const classes = style();
    const matches = useMediaQuery('(min-width: 700px)');

    return (
        <>
            <NavBar />
            <div className={classes.body}>
                <div className={matches ? classes.text : classes.minText}>
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
                        <span style={{ fontSize: '0.5em' }}>Strategic and consistent approach to your music brand organic growth</span>
                        <div className={classes.buttonGroup}>
                            <Button className={matches ? classes.button : classes.minButton} style={{ backgroundColor: 'rgb(30, 185, 85)', marginRight: '1.4vw' }}>LET`S GO!</Button>
                            <Button className={matches ? classes.button : classes.minButton} style={{ border: '2px solid #4CAF50', marginLeft: '1.4vw' }}>CONTACT</Button>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
}
