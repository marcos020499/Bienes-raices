import React, {Component} from 'react';
import './style.css'
import ecommerceProduct from '../../../img/ecommerce-product-page-design-tubik-blog.jpg'
import easterBunny from '../../../img/easter-bunny-adventures-bear-illustration-tubikarts-768x576.jpg'
import breadCrumbs from '../../../img/breadcrumbs-design-tips-tubik-blog-768x576.jpg'
import creative from '../../../img/creative-workspaces-illustrations-tubikarts-3-768x576.jpg'
import uiDesing from '../../../img/photos-in-ui-design-tubik-blog-article-768x576.jpg'
import cinema from '../../../img/cinema-app-ui-design-tubik.jpg'
import theoryColor from '../../../img/color-theory-design-tubik.jpg'
import interfaceUser from '../../../img/images-in-user-interfaces-tubik-blog-article.png'
import Slider from "react-slick";

class Content extends Component {
   render() {
      const settings = {
         dots: true,
         infinite: true,
         speed: 5,
         slidesToShow: 1,
         slidesToScroll: 1,
       };
      return (
         <>
            <div className='content'>
               <div className='tubikBlog'>
                  <h1>Tubik Blog</h1>
                  <img src={ecommerceProduct} alt=""/>
                  <div className='textImg'>
                     <h4>BUSINESS</h4>
                     <h2>Take My Money: UX Practices on Product Page Design </h2>
                     <p>A well crafted product page is vital for e-commerce as most decision-making on purchase happens there. Review popular practices on product page design, with lots of examples.</p>
                  </div>
               </div>
               <div className='views'>
                  <a className='viewLatest'>View Latest</a>
                  <div className='viewContent'>
                     <img className='firstImg' src={easterBunny} alt=""/>
                     <h3>ILLUSTRATION</h3>   
                     <p>Case Studies: Book Illustration for Visual Storytelling.</p>
                  </div>
                  <div className='viewContent'>
                     <img className='secondImg' src={breadCrumbs} alt=""/>
                     <h3>UI/UX</h3>
                     <p>Web Usability: Breadcrumbs Design Tips and Practices</p>
                  </div>
                  <div className='viewContent'>
                     <img className='thirdImg' src={creative} alt=""/>
                     <h3>ILLUSTRATION</h3>
                     <p>Case Studies: Book Illustration for Visual Storytelling.</p>
                  </div>
                  <div className='viewContent'>
                     <img className='fourtImg' src={uiDesing} alt=""/>
                     <h3>UI/UX</h3>
                     <p>Web Usability: Breadcrumbs Design Tips and Practices</p>
                  </div>
               </div>
            </div>
            
         </>
      )
   }
}
export default Content