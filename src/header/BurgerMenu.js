// import { Typography, Link } from '@material-ui/core';
import { slide as Menu } from 'react-burger-menu';

export default function BurgerMenu() {
    let styleBurgerMenu = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '36px',
            top: '30px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            display: 'none'
        },
        bmMenuWrap: {
            top: '84px',
            position: 'fixed',
            height: 'auto',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto'
        },
        bmMenu: {
            background: 'black',
            padding: '1.5em 1.5em 1.5em',
            fontSize: '1.4em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block',
            color: 'white',
            textDecoration: 'none',
            paddingBottom: '1em',
            "&:focus":{
                outlineOffset: 'none',
                color: 'red'
            },
            "&:active":{
                border: '0',
                margin: '0',
                textDecoration: 'none',
                color :'grey'
            },
            "&:hover":{
                backgroundColor: 'red' 
            }
        },
        bmItemHover:{
            color: '#797997',
            backgroundColor: 'red',
            outlineOffset: 0
        },
        bmOverlay: {
            display: 'none'
        }
    };

    return (
        <>
            <Menu 
                right 
                disableAutoFocus 
                styles={styleBurgerMenu} 
                customBurgerIcon = { <img alt='svgImg' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTAsMTQuMzMzMzN2MTQuMzMzMzNoMTcydi0xNC4zMzMzM3pNMCw3OC44MzMzM3YxNC4zMzMzM2gxNzJ2LTE0LjMzMzMzek0wLDE0My4zMzMzM3YxNC4zMzMzM2gxNzJ2LTE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/> }>
                <a id="whatWeDo" href="/">What we do</a>
                <a id="cases" href="/about">Cases</a>
                <a id="services" href="/contact">Services</a>
                <a id="whyUs" href="/contact">Why us</a>
                <a id="pricing" href="/contact">Pricing</a>
                <a id="contacts" href="/contact">Contacts</a>
            </Menu>
        </>
    )
}