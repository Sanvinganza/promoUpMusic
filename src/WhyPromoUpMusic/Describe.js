import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Describe(){
    const classes = makeStyles((theme) => ({
        body: {
            paddingTop: '5em',
            color: 'white',
        },
        title: {
            fontWeight: '600',
            fontSize: '2.5em',
        },
        describe: {
            fontSize: '1.4em',
            paddingTop: '4em'
        }
      }))();
      
    return(
        <>
            <center>
                <div className={classes.body}>
                    <div className={classes.title}>Why <br/> promoUPmusic?</div>
                    <div className={classes.describe}>Spreading your music outreach to the <br/> world of opportunities</div>    
                </div>
            </center>
        </>
    )
}