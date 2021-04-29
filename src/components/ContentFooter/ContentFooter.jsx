import React, { Component } from 'react';
import Slider from 'react-slick-slider';
import image1 from '../../../img/color-theory-design-tubik.jpg';
import image2 from '../../../img/images-in-user-interfaces-tubik-blog-article.png';
import image3 from '../../../img/color-theory-design-tubik.jpg';


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container11">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src={image1} alt=""/>
          </div>
          <div>
            <img src={image2} alt=""/>
          </div>
          <div>
            <img src={image3} alt=""/>
          </div>
          <div>
          <img src={image1} alt=""/>
          </div>
          <div>
          <img src={image2} alt=""/>
          </div>
          <div>
          <img src={image3} alt=""/>
          </div>
          <div>
          <img src={image1} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
const cssstyle = `
.container11 {
  margin: 0 auto;
  position: relative;
  top: 20vw;
  width: 95vw;
  height: 90vw;
}
.container11 h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 1%;
    position: relative;
    text-align: center;
}
.container11 img{
  width: 35vw;
  height: 30vw;
}
.slick-next:before, .slick-prev:before {
    color: #000;
    position: relative;
    top: -10vw;
}`