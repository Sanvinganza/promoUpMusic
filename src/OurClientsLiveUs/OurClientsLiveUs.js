import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Describe from './Describe';
import Content from './Content';

const style = makeStyles(() => ({
    root: {
        backgroundImage: 'url("https://thumb.tildacdn.com/tild3632-6662-4166-b164-663261373962/-/format/webp/pexels-pixabay-21076.jpg")',
        height: '80vw',
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
