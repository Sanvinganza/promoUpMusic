import makeStyles from '@material-ui/core/styles/makeStyles';
import Describe from './Describe'
import Content from './Content'

export default function Services(){
    const classes = makeStyles((theme) => ({
        root: {
            backgroundImage: `white`,
            height: '850px',
        }
      }))();

    return(
        <>
            <div className={classes.root}>
                <Describe/>
                <Content/>
            </div>
        </>
    )
}