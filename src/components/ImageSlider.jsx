// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...sliderSettings}>
            <div>
                <img src="image1.jpg" alt="Slide 1" className="w-full" />
            </div>
            <div>
                <img src="image2.jpg" alt="Slide 2" className="w-full" />
            </div>
            {/* Add more slides as needed */}
        </Slider>
    );
};

export default ImageSlider;
