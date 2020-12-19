import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assests/Slider-1.png"
import image2 from "../../assests/Slider-2.png"
import image3 from "../../assests/Slider-3.png"
import image4 from "../../assests/Slider-4.png"
import image5 from "../../assests/Slider-5.png"
import image6 from "../../assests/Slider-6.png"
import "./Slider.css";

const photos = [
  {
    name: "Photo 1",
    url: "../../assests/Slider-1.png"
  },
  {
    name: "Photo 2",
    url: {image2}
  },
  {
    name: "Photo 3",
    url: {image3}
  },
  {
    name: "Photo 4",
    url: {image4}
  },
  {
    name: "Photo 5",
    url: {image5}
  },
  {
    name: "Photo 6",
    url: {image6}
  }
]

class ImgSlider extends Component{
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 3000,
      slidesToScroll: 1,
      className: "slides"
    }
    return (
      <div className="App">
        <Slider {...settings}>
        {photos.map((photos) => {
          return(
            <div>
              <img width="100%" top="20%" src={photos.url} alt=""/>
            </div>
          )
        })}
        </Slider>
      </div>
    );
  }
} 

export default ImgSlider;