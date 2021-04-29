import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const style = makeStyles(() => ({
    body: {
        marginTop: '8em',
        color: 'black',
    },
    title: {
        fontWeight: '600',
        fontSize: '5.5vw',
    },
    describe: {
        marginTop: '2em',
        fontSize: '1.4em',
    },
}));

export default function Describe() {
    const classes = style();

    return (
        <>
            <center id='HowWeCanHelpYou'>
                <div className={classes.body}>
                    <div className={classes.title}>How we can help you</div>
                    <div className={classes.describe}>
                        We are digital marketers, not hackers, therefore we
                        <br />
                        believe in transparency and fair play results
                    </div>
                </div>
            </center>
        </>
    );
}
