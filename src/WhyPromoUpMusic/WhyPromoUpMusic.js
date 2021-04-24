import makeStyles from '@material-ui/core/styles/makeStyles';
import Describe from './Describe'
import Content from './Content'

export default function WhyPromoUpMusic(){
    const classes = makeStyles((theme) => ({
        root: {
            backgroundImage: `url(promoUpMusic/image/WhyPromoUpMusic/background.jpg)`,
            height: '700px',
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