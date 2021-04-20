import { AppBar, Typography, Toolbar, Link } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BurgerMenu from './BurgerMenu';
import useMediaQuery from '../useMediaQuery';

export default function NavBar() {
  const styleNavbar = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'black',
      justifyContent: 'space-between',
    },
    title: {
      flexGrow: 1
    },
    abStatic: {
      border: "solid blue 2px"
    },
    ButtonContacts: {
      borderRadius: '80px',
      backgroundColor: 'white',
      color: 'black',
      fontSize: '12px',
      fontFamily: 'bold',
      paddingLeft: '15px',
      paddingRight: '15px',
      "&:hover": {
        backgroundColor: '#898989',
        color: 'white'
      }
    },
    logo: {
      textAlign: 'center',
      maxWidth: '80px',
      maxHeight: '80px',
    },
    logoHorizontallyCenter: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    menuItems: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
    menuItem: {
      color: 'white',
      marginLeft: '12px',
      marginRight: '12px',
      fontSize: '1.3em',
      "&:hover": {
        textDecorationLine: 'none',
        color: '#797997'
      }
    },
    menu: {
      height: '30px',
      backgroundColor: 'color'
    }
  }))();

  const preventDefault = (event) => event.preventDefault();
  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <AppBar position="static" className={styleNavbar.root}>
        <Toolbar>
          <div className="styleNavbar.logoHorizontallyCenter">
            <img src={'./image/logoPromoUp.png'} className={styleNavbar.logo} alt="logo" />
          </div>
          {matches ? 
          <Typography className={styleNavbar.menuItems}>
          <Link href="#" className={styleNavbar.menuItem} onClick={preventDefault}>
            What we do
          </Link>
          <Link href="#" className={styleNavbar.menuItem} onClick={preventDefault}>
            Cases
          </Link>
          <Link href="#" className={styleNavbar.menuItem} onClick={preventDefault}>
            Services
          </Link>
          <Link href="#" className={styleNavbar.menuItem} onClick={preventDefault}>
            Why us
          </Link>
          <Link href="#" className={styleNavbar.menuItem} onClick={preventDefault}>
            Pricing
          </Link>
          <Link href="#" className={styleNavbar.menuItem} onClick={preventDefault}>
            Contacts
          </Link>
        </Typography> 
          :
          <BurgerMenu />}
        </Toolbar>
      </AppBar>
    </>
  )
}