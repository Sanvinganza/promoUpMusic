import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Describe(){
    const classes = makeStyles((theme) => ({
        body: {
            marginTop: '8em',
            color: 'black'
        },
        title: {
            fontWeight: '600',
            fontSize: '2.5em'
        },
        describe: {
            marginTop: '2em',
            fontSize: '1.4em'
        }
      }))();
      
    return(
        <>
            <center>
                <div className={classes.body}>
                    <div className={classes.title}>How we can help you</div>
                    <div className={classes.describe}>We are digital marketers, not hackers, therefore we<br />
                    believe in transparency and fair play results</div>    
                </div>
            </center>
        </>
    )
}