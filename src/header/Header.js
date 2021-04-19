import React from 'react';
import NavBar from './NavBar';
// import {makeStyles} from '@material-ui/core/styles';

export default function TopBar() {
    // const classes = makeStyles((theme) => ({
    //     title :{

    //     }
    //   }))();
    return (
        <>
            <NavBar />
            <img alt='' src='./image/header/bgHeader.jpg' width='100%'/>
        </>
    );
}