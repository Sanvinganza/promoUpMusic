import Header from './header/Header';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import WhyPromoUpMusic from './WhyPromoUpMusic/WhyPromoUpMusic';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Fade bottom>
          <WhatWeDo />
        </Fade>
        <Fade bottom>
          <WhyPromoUpMusic />
        </Fade>
      </header>
    </div>
  );
}

export default App;
