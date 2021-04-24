import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Content() {
    const classes = makeStyles((theme) => ({
        container: {
            paddingTop: '5em',
            display: 'flex',
            justifyContent: 'center',
        },
        containerInner: {
            display: 'flex',
            flexDirection: 'row'
        },
        block: {
            display: 'flex',
            justifyContent: 'center',
            margin: '0 2em 0 2em',
            width: '200px',
            height: '200px',
            backgroundColor: 'red'
        },
        icon: {
            height:'42px',
            width: '42px',
        },
        title: {

        },
        discribe: {

        }
    }))();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.containerInner}>

                    <div className={classes.block}>
                        <div className={classes.icon} style={{ backgroundImage: `url(promoUpMusic/image/WhyPromoUpMusic/business-report.png)` }}></div>
                        <div className={classes.title} style={{}}></div>
                        <div className={classes.discribe}></div>
                    </div>

                    <div className={classes.block}>
                        <div className={classes.icon} style={{ backgroundImage: `url()` }}></div>
                        <div className={classes.title} style={{}}></div>
                        <div className={classes.discribe}></div>
                    </div>

                    <div className={classes.block}>
                        <div className={classes.icon} style={{ backgroundImage: `url()` }}></div>
                        <div className={classes.title} style={{}}></div>
                        <div className={classes.discribe}></div>
                    </div>
                </div>
            </div>
        </>
    )
};