import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
                <div className={classes.containerInnerCarousel}>
                    <div className='slide-container'>
                        <Fade>
                            <div className={classes.block}>
                                <div className={classes.discribe}>
                                    Our main goal here was t find a trustworthy, reliable source for all our promo, songs, social media, everything. promoUPmusic provided flexible and tailored package deals that had been greatly appreciated. We are now still working together after 2 years and discussing custom promo ideas, campaigns for THEMXXNLIGHT.
                                </div>
                                <div className={classes.picture} style={{ backgroundImage: 'url(https://thumb.tildacdn.com/tild6437-3762-4365-b434-316663666439/-/cover/100x100/center/center/-/format/webp/photo538675351072235.jpg)' }}> </div>
                                <div className={classes.pictureName}>
                                    <span style={{ fontWeight: '600' }}>R&B Duo Artists</span>
                                    <br />
                                    THEMXXNLIGHT
                                </div>
                            </div>

                            <div className={classes.block}>
                                <div className={classes.discribe}>
                                    As a fledgeling independent record label, we encounter a lot of organizations that over promise and under deliver. promoUPmusic Team do the diametric opposite- they deliver much more than is initially agreed upon. They are thorough and precise. Their analytics are terrific. I highly recommend promoUPmusic services. ***Shameless plug alert- the band is LUC and the song is "Glowing". Bumping up on 1.6 million YouTube views!***
                                </div>
                                <div className={classes.picture} style={{ backgroundImage: 'url(https://thumb.tildacdn.com/tild6234-3536-4463-b131-353039623265/-/cover/100x100/center/center/-/format/webp/maxresdefault_1.jpg)' }}> </div>
                                <div className={classes.pictureName}>
                                    <span style={{ fontWeight: '600' }}>Record Label</span>
                                    <br />
                                    Number Vun Records
                                </div>
                            </div>

                            <div className={classes.block}>
                                <div className={classes.discribe}>
                                    Since my very first call consultation, I knew I wanted to work with promoUPmusic team. I just had a great feeling about them and I liked their energy. I have taken on everything that guys have recommended and I am trying to remain active on social media. Can't begin to tell you how grateful I am to these guys. You are my heroes!! I'm using you forever!!! Lol.
                                </div>
                                <div className={classes.picture} style={{ backgroundImage: 'url(https://thumb.tildacdn.com/tild6431-3538-4065-b063-343538303162/-/cover/100x100/center/center/-/format/webp/photo538675351072235.jpg)' }}> </div>
                                <div className={classes.pictureName}>
                                    <span style={{ fontWeight: '600' }}>Independent Artist</span>
                                    <br />
                                    Chantelle Tibbs
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}
