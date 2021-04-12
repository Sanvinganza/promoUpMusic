import React, { Fragment } from 'react';
import BackgroundSlider from 'react-background-slider';
import NavBar from './NavBar'
// import HeaderItem from './HeaderItems/HeaderItem';
// import Slider from './backgroundSlider/backgroundSlider';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import { AppBar,Toolbar,IconButton,Typography,InputBase,Badge,MenuItem } from '@material-ui/core';
// import { MenuIcon,Menu,SearchIcon,AccountCircle,MailIcon,
//          NotificationsIcon,MoreIcon } from '@material-ui/icons/Menu';
export default function TopBar() {
    const images = [
        // './header/slider1.jpg',
        './promoUpMusic/image/header/slider1.jpg',
        './promoUpMusic/image/header/slider2.jpg'
    ];
    
    return (
        <>
            <NavBar />
            <BackgroundSlider
            images={images}
            duration={2} transition={2} />
        </>
    );
}