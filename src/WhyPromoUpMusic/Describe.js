import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Describe(){
    const classes = makeStyles((theme) => ({
        body: {
            paddingTop: '5em',
            color: 'white',
            textShadow: '1px 2px 2px black, 0 0 1em grey'  
        },
        title: {
            fontWeight: '600',
            fontSize: '3.5em',
        },
        describe: {
            fontSize: '1.4em',
            paddingTop: '2em',
            maxWidth: '600px'
        }
      }))();
      
    return(
        <>
            <center>
                <div className={classes.body}>
                    <div className={classes.title}>Why promoUPmusic?</div>
                    <div className={classes.describe}>Spreading your music outreach to the world of opportunities</div>    
                </div>
            </center>
        </>
    )
}