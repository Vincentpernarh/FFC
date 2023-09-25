import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "/workspaces/FFC/ffc/ffc/src/images/img1.jpeg";
import image2 from "/workspaces/FFC/ffc/ffc/src/images/promo4.jpg";
import image3 from "/workspaces/FFC/ffc/ffc/src/images/img4.jpeg";





const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set autoplay speed to 5 seconds
  };

  return (
    
  <div className="image-slider">
  <Slider {...settings}>
    <div>
      <img src={image1} alt="Image_1" />
    </div>
    <div>
      <img src={image2} alt="Image_2" />
    </div>
    <div>
      <img src={image3} alt="Image_3" />
    </div>
  </Slider>
</div>);

};

export default ImageSlider;
