import React, { Component } from 'react';
import Slider from 'react-slick-slider';
import image1 from '../../img/color-theory-design-tubik.jpg';
import image2 from '../../img/images-in-user-interfaces-tubik-blog-article.png';
import image3 from '../../img/cinema-app-ui-design-tubik.jpg';


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='popularContent'>
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
        <h2>Popular</h2>
        <div className='display'>
        <Slider {...settings}>
                  <div className='displayContent'>
                     <img src={image1} alt=""/>
                     <h4>PROCESS AND TOOLS</h4>
                     <h3>Mobile UI Design: 15 Basic Types of Screens</h3>
                     <p>Mobile applications evolve with user's needs offering new functionality still, there are screens common for many apps and they are the focus of this article.</p>
                  </div>
                  <div className='displayContent'>
                     <img src={image2} alt=""/>
                     <h4>PROCESS AND TOOLS</h4>
                     <h3>Mobile UI Design: 15 Basic Types of Screens</h3>
                     <p>Mobile applications evolve with user's needs offering new functionality still, there are screens common for many apps and they are the focus of this article.</p>
                  </div>
                  <div className='displayContent'>
                     <img src={image3} alt=""/>
                     <h4>PROCESS AND TOOLS</h4>
                     <h3>Mobile UI Design: 15 Basic Types of Screens</h3>
                     <p>Mobile applications evolve with user's needs offering new functionality still, there are screens common for many apps and they are the focus of this article.</p>
                  </div>
        </Slider>
        </div>
      </div>
    );
  }
}
const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
    position: relative;
    top: -10vw;
},
.displayContent h4{
  color: blue;
  font-size: 90px;
}

`