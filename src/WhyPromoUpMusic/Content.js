import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '../useMediaQuery';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const style = makeStyles(() => ({
    container: {
        display: 'flex',
        paddingTop: '8vw',
        justifyContent: 'center',
        textShadow: '1px 2px 2px black, 0 0 1em grey',
    },
    containerInner: {
        flexDirection: 'row',
        display: 'flex',
        maxWidth: '1200px',
    },
    block: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 2em 0 2em',
        color: 'white',
    },
    icon: {
        height: '9vw',
        width: '9vw',
    },
    title: {
        paddingTop: '1em',
        fontSize: '1.8vw',
        fontWeight: '500',
    },
    discribe: {
        color: '#ddd',
        paddingTop: '1em',
        fontSize: '1.3vw',
        textAlign: 'center',
        maxWidth: '25vw',
    },
    containerInnerColumn: {
        display: 'flex',
        maxWidth: '600px',
        flexDirection: 'column',
    },
    blockCarousel: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },
    iconCarousel: {
        width: '96px !important',
        height: '96px',
    },
    titleCarousel: {
        fontSize: '1.8em',
        fontWeight: '500',
        padding: '5px',
    },
    discribeCarousel: {
        width: '80vw',
    },
    carousel: {
        maxWidth: '400px',
    },
}));

export default function Content() {
    const matches = useMediaQuery('(min-width: 700px)');

    const classes = style();

    return (
        <>
            <div className={classes.container}>
                {matches
                    ? (
                        <div className={classes.containerInner}>

                            <div className={classes.block}>
                                <img src='image/WhyPromoUpMusic/social-media.png' className={classes.icon} alt='' />
                                <div className={classes.title}>No fraud & No bots</div>
                                <div className={classes.discribe}>Using only official platforms and reporting for extra transparency. With our expertise and network, we gain only real views and organic engagement from your audience.</div>
                            </div>

                            <div className={classes.block}>
                                <img src='image/WhyPromoUpMusic/headphones.png' className={classes.icon} alt='' />
                                <div className={classes.title}>Team of pros</div>
                                <div className={classes.discribe}>We are experienced and certified digital marketers, which means our services don't end up on the Google Search box. Daily updates with the latest news from digital space are what keeps us in the flow.</div>
                            </div>

                            <div className={classes.block}>
                                <img src='image/WhyPromoUpMusic/business-report.png' className={classes.icon} alt='' />
                                <div className={classes.title}>Campaign reporting</div>
                                <div className={classes.discribe}>It's not only about hitting the numbers on your socials but know how to read the result of the reports. Hence, we analyze, compare and contrast, evaluate and plan your next strategic steps.</div>
                            </div>

                        </div>
                    )
                    : (
                        <div className={classes.containerInnerCarousel}>
                            <Carousel
                                autoPlay
                                verticalSwipe
                                showArrows={false}
                                showStatus={false}
                                showIndicators={false}
                                showThumbs={false}
                                infiniteLoop
                                interval='3000'
                                className={classes.carousel}
                            >
                                <div>
                                    <div className={classes.blockCarousel}>
                                        <img src='image/WhyPromoUpMusic/social-media.png' className={classes.iconCarousel} alt='' />
                                        <div className={classes.titleCarousel}>No fraud & No bots</div>
                                        <div className={classes.discribeCarousel}>Using only official platforms and reporting for extra transparency. With our expertise and network, we gain only real views and organic engagement from your audience.</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.blockCarousel}>
                                        <img src='image/WhyPromoUpMusic/headphones.png' className={classes.iconCarousel} alt='' />
                                        <div className={classes.titleCarousel}>Team of pros</div>
                                        <div className={classes.discribeCarousel}>We are experienced and certified digital marketers, which means our services don't end up on the Google Search box. Daily updates with the latest news from digital space are what keeps us in the flow.</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.blockCarousel}>
                                        <img src='image/WhyPromoUpMusic/business-report.png' className={classes.iconCarousel} alt='' />
                                        <div className={classes.titleCarousel}>Campaign reporting</div>
                                        <div className={classes.discribeCarousel}>It's not only about hitting the numbers on your socials but know how to read the result of the reports. Hence, we analyze, compare and contrast, evaluate and plan your next strategic steps.</div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    )}
            </div>
        </>
    );
}
