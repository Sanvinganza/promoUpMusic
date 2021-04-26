import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '../useMediaQuery';

export default function Content() {
    const matches = useMediaQuery("(min-width: 800px)");

    const classes = makeStyles((theme) => ({
        container: {
            paddingTop: '5em',
            display: 'flex',
            justifyContent: 'center'
        },
        containerInner: {
            flexDirection: 'row',
            display: 'flex',
            maxWidth: '1200px'
        },
        block: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 2em 0 2em',
            color: 'white'
        },
        icon: {
            height: '9vw',
            width: '9vw'
        },
        title: {
            paddingTop: '1em',
            fontSize: '1.8vw',
            fontWeight: '500'
        },
        discribe: {
            color: '#ddd',
            paddingTop: '1em',
            fontSize: '1.3vw',
            textAlign: 'center',
            maxWidth: '25vw'
        },
        containerInnerColumn: {
            display: 'flex',
            maxWidth: '1200px',
            flexDirection: 'column'
        }
    }))();

    return (
        <>
            <div className={classes.container}>
                    <div className={classes.containerInner}>

                        <div className={classes.block}>
                            <img src={'promoUpMusic/image/WhyPromoUpMusic/social-media.png'} className={classes.icon} alt="" />
                            <div className={classes.title}>No fraud & No bots</div>
                            <div className={classes.discribe}>Using only official platforms and reporting for extra transparency. With our expertise and network, we gain only real views and organic engagement from your audience.</div>
                        </div>

                        <div className={classes.block}>
                            <img src={'promoUpMusic/image/WhyPromoUpMusic/headphones.png'} className={classes.icon} alt="" />
                            <div className={classes.title}>Team of pros</div>
                            <div className={classes.discribe}>We are experienced and certified digital marketers, which means our services don't end up on the Google Search box. Daily updates with the latest news from digital space are what keeps us in the flow.</div>
                        </div>

                        <div className={classes.block}>
                            <img src={'promoUpMusic/image/WhyPromoUpMusic/business-report.png'} className={classes.icon} alt="" />
                            <div className={classes.title}>Campaign reporting</div>
                            <div className={classes.discribe}>It's not only about hitting the numbers on your socials but know how to read the result of the reports. Hence, we analyze, compare and contrast, evaluate and plan your next strategic steps.</div>
                        </div>

                    </div>
                
            </div>
        </>
    )
};