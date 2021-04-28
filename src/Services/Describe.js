import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const style = makeStyles(() => ({
    container: {
        diplay: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: '3.5em',
        fontWeight: '600',
        padding: '60px 0 60px 0',
    },
    describe: {
        fontSize: '28px',
        color: '#444',
    },
}));

export default function Describe() {
    const classes = style();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.title}>
                    Services
                </div>
                <div className={classes.describe}>
                    We support all major music digital platforms where
                    <br />
                    video marketing and online streaming are set to
                    <br />
                    make the difference
                </div>
            </div>
        </>
    );
}
