import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import useMediaQuery from '../useMediaQuery';

const style = makeStyles(() => ({
    container: {
        marginTop: '60px',
    },
    containerInner: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        width: '50px',
        height: '50px',
        padding: '2em',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    column: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

export default function Content() {
    const matches = useMediaQuery('(min-width: 1000px)');
    const classes = style();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.containerInner}>
                    <div className={matches ? classes.row : classes.column}>
                        <div>
                            <img src='image/Services/spotify.png' className={classes.icon} alt='' />
                            <img src='image/Services/facebook.png' className={classes.icon} alt='' />
                            <img src='image/Services/youtube.png' className={classes.icon} alt='' />
                        </div>
                        <div>
                            <img src='image/Services/soundcloud.png' className={classes.icon} alt='' />
                            <img src='image/Services/instagram.png' className={classes.icon} alt='' />
                            <img src='image/Services/tik-tok.png' className={classes.icon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
