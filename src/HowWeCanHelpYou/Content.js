import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const style = makeStyles(() => ({
    body: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap',
        marginTop: '7em',
        marginLeft: '8.5vw',
        marginRight: '8.5vw',
        alignContent: 'flex-start',
        marginBottom: '3em',
    },
    block: {
        display: 'flex',
        width: '24em',
        height: '286px',
        padding: '1em',
        boxShadow: '0 0 15px black, 0 0 2px grey',
        margin: '20px',
        alignItems: 'center',
    },
    icon: {
        flex: '1',
        width: '100%',
        height: '110px',
        backgroundRepeat: 'no-repeat',
    },
    describe: {
        flex: '2',
        fontSize: '0.85em',
    },
    text: {
        textAlign: 'justify',
    },
}));

export default function MainBlocks() {
    const classes = style();

    return (
        <>
            <div className={classes.body}>

                <div className={classes.block}>
                    <div className={classes.icon} style={{ backgroundImage: 'url(image/WhatWeDo/progress.svg)' }} />
                    <div className={classes.describe}>
                        <h2 className={classes.title}>STRATEGY</h2>
                        <div className={classes.text}>A digital marketing strategy helps your music brand achieve specific goals through carefully selected online marketing channels. We'll discuss these channels, goals and help to align them with your business objectives. Without your individual goals, there is no way to measure success and return on investment (ROI).</div>
                    </div>
                </div>

                <div className={classes.block}>
                    <div className={classes.icon} style={{ backgroundImage: 'url(image/WhatWeDo/video.svg)' }} />
                    <div className={classes.describe}>
                        <h2 className={classes.title}>CREATIVE</h2>
                        <div className={classes.text}>Creative thinking can be a powerful tool in marketing and business in general. It has always been a key factor in standing out, as well as in traditional marketing. We help to diagnose content performance problems and make strategic decisions based on audience feedback — and brainstorm new creative concepts that you can use right away.</div>
                    </div>
                </div>

                <div className={classes.block}>
                    <div className={classes.icon} style={{ backgroundImage: 'url(image/WhatWeDo/social_networks.svg)' }} />
                    <div className={classes.describe}>
                        <h2 className={classes.title}>SOCIAL MEDIA ADVERTISING</h2>
                        <div className={classes.text}>Let's grow, engage, and turn your social media & music streaming platforms' following into real fans. Our team of content and ad specialists will manage your campaigns using official ad accounts on Instagram, Facebook, YouTube, Spotify, TikTok with your specific goals and targeting in mind.</div>
                    </div>
                </div>

                <div className={classes.block}>
                    <div className={classes.icon} style={{ backgroundImage: 'url(image/WhatWeDo/3st_man.svg)' }} />
                    <div className={classes.describe}>
                        <h2 className={classes.title}>INFLUENCER MARKETING</h2>
                        <div className={classes.text}>It works because of the high amount of trust that social influencers have built up with their following, and recommendations from them serve as a form of social proof to your music fans. We assess the potential of this marketing channel for your music brand and get you connected with bloggers from the needed music genre, match your budget and run checks of thier organic engagement metrics.</div>
                    </div>
                </div>

            </div>
        </>
    );
}
