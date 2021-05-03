import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import { Carousel } from 'react-responsive-carousel';
// import useMediaQuery from '../useMediaQuery';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const style = makeStyles(() => ({
    root: {

    },
    block: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    discribe: {
        textAlign: 'center',
        width: '40vw',
        color: 'white',
    },
    picture: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '1.5em',
    },
    pictureName: {
        color: 'white',
        fontSize: '0.8em',
    },
}));

export default function Content() {
    const classes = style();

    return (
        <>
            <div className={classes.root}>
                <dic className={classes.block}>
                    <div className={classes.discribe}>
                        Our main goal here was t find a trustworthy, reliable source for all our promo, songs, social media, everything. promoUPmusic provided flexible and tailored package deals that had been greatly appreciated. We are now still working together after 2 years and discussing custom promo ideas, campaigns for THEMXXNLIGHT.
                    </div>
                    <div className={classes.picture} style={{ backgroundImage: 'url(https://thumb.tildacdn.com/tild6437-3762-4365-b434-316663666439/-/cover/100x100/center/center/-/format/webp/photo538675351072235.jpg)' }}> </div>
                    <div className={classes.pictureName}>
                        <span style={{ fontWeight: '600' }}>R&B Duo Artists</span>
                        <br />
                        THEMXXNLIGHT
                    </div>
                </dic>

            </div>
        </>
    );
}
