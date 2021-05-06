import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Describe from './Describe';
import Content from './Content';

export default function WhyPromoUpMusic() {
    const classes = makeStyles(() => ({
        root: {
            backgroundImage: 'url(image/WhyPromoUpMusic/background.jpg)',
            height: '75vw',
            minHeight: '480px',
            minWidth: '400px',
        },
    }))();

    return (
        <>
            <div className={classes.root}>
                <Describe />
                <Content />
            </div>
        </>
    );
}
