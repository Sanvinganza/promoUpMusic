import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Header from './Header/Header';
import WhatWeDo from './HowWeCanHelpYou/HowWeCanHelpYou';
import WhyPromoUpMusic from './WhyPromoUpMusic/WhyPromoUpMusic';
import Services from './Services/Services';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Header />
                <Fade>
                    <WhatWeDo />
                </Fade>
                <Fade>
                    <WhyPromoUpMusic />
                </Fade>
                <Fade>
                    <Services />
                </Fade>
            </header>
        </div>
    );
}

export default App;
