import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const style = makeStyles(() => ({
    root: {

    },
}));

export default function Describe() {
    const classes = style();

    return (
        <>
            <div className={classes.root}>
                1
            </div>
        </>
    );
}
