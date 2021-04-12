import BackgroundSlider from 'react-background-slider';

//не работает, если это отдельный модуль
export default function backgroundSlider(){
    
    const images = [
        '../image/header/slider1.jpg',
        '../image/header/slider2.jpg'
    ];

    return(
        <BackgroundSlider
            images={images}
            duration={10} transition={100} />
    ) 
};