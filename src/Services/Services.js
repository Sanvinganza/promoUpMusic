import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Describe from './Describe';
import Content from './Content';

const style = makeStyles(() => ({
    root: {
        backgroundImage: 'white',
        height: '600px',
    },
}));

export default function Services() {
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
