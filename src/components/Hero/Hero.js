import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

// Sample images for the slider
const images = [
  {
    src: 'https://images.unsplash.com/photo-1528127269322-539801943592?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHx8MA%3D%3D',
    caption: 'Explore the beautiful mountains.',
  },
  {
    src: 'https://static1.evcdn.net/cdn-cgi/image/width=3840,height=2880,quality=70,fit=crop/offer/raw/2024/03/20/fda79626-656c-4e5b-ad69-63566d3078bf.png',
    caption: 'Discover the serene beaches.',
  },
  {
    src: 'https://images.unsplash.com/photo-1626743656249-5d8fa287b941?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbmclMjBhbnxlbnwwfHwwfHx8MA%3D%3D',
    caption: 'Experience the vibrant city life.',
  },
];

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto slide every 2 seconds
    fade: true,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index + 1}`} />
            {/* <div className="caption">{image.caption}</div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
