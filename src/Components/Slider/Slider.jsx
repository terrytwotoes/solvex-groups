import React from "react";
import image1 from "../../assests/Slider-1.png"
import image2 from "../../assests/Slider-2.png"
import image3 from "../../assests/Slider-3.png"
import image4 from "../../assests/Slider-4.png"
import image5 from "../../assests/Slider-5.png"
import image6 from "../../assests/Slider-6.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image6} />
                </div>
            </Carousel>
        </div>
    );
}