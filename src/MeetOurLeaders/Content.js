import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const style = makeStyles(() => ({
    root: {

    },
}));

export default function Content() {
    const classes = style();

    return (
        <>
            <div className={classes.root}>
                1
            </div>
        </>
    );
}
