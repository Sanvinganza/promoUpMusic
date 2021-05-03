import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const style = makeStyles(() => ({
    root: {
        textAlign: 'center',
        color: 'white',
        fontSize: '5.5vw',
        padding: '5vw',
        textShadow: '1px 2px 2px black, 0 0 1em grey',
    },
}));

export default function Describe() {
    const classes = style();

    return (
        <>
            <div className={classes.root}>
                Our clients love us
            </div>
        </>
    );
}
