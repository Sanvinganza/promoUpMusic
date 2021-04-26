import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Describe() {
    const classes = makeStyles((theme) => ({
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
            color: '#444'
        }
    }))();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.title}>
                    Services
                </div>
                <div className={classes.describe}>
                    We support all major music digital platforms where<br/> video marketing and online streaming are set to<br/> make the difference
                </div>
            </div>
        </>
    )
}