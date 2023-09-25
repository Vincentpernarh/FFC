import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "/workspaces/FFC/ffc/ffc/src/images/img1.jpeg";
import image2 from "/workspaces/FFC/ffc/ffc/src/images/promo4.jpg";
import image3 from "/workspaces/FFC/ffc/ffc/src/images/img4.jpeg";

const Testimonials = () => {
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
      <h3> I love the classes</h3>
    </div>
    <div>
      <img src={image2} alt="Image_2" />
      <h3> My goal is achieved since i started class with theme

      </h3>
    </div>
    <div>
      <img src={image3} alt="Image_3" />
      <h3> They are so good,i am really happy i get to learn with them</h3>
    </div>
  </Slider>
</div>);

};

export default Testimonials;
