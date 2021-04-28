import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Describe from './Describe';
import Content from './Content';

const style = makeStyles(() => ({
    root: {
        backgroundImage: 'white',
        height: '850px',
    },
}));

export default function OurClientsLiveUs() {
    const classes = style();

    return (
        <>
            <div className={classes.root}>
                <Describe />
                <Content />
            </div>
        </>
    );
}
