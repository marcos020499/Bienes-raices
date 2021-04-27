import React, {Component} from 'react';
import './style.css'
class Content extends Component {
   render() {
      return (
         <>
            <div className='content'>
               <div className='tubikBlog'>
                  <h1>Tubik Blog</h1>
                  <img src='../../../img/ecommerce-product-page-design-tubik-blog.jpg' alt=""/>
                  <div className='textImg'>
                     <h4>BUSINESS</h4>
                     <h2>Take My Money: UX Practices on Product Page Design </h2>
                     <p>A well crafted product page is vital for e-commerce as most decision-making on purchase happens there. Review popular practices on product page design, with lots of examples.</p>
                  </div>
               </div>
               <div className='views'>
                  <a className='viewLatest'>View Latest</a>
                  <div className='viewContent'>
                     <img className='firstImg' src='../../../img/easter-bunny-adventures-bear-illustration-tubikarts-768x576.jpg' alt=""/>
                     <h3>ILLUSTRATION</h3>   
                     <p>Case Studies: Book Illustration for Visual Storytelling.</p>
                  </div>
                  <div className='viewContent'>
                     <img className='secondImg' src='../../../img/breadcrumbs-design-tips-tubik-blog-768x576.jpg' alt=""/>
                     <h3>UI/UX</h3>
                     <p>Web Usability: Breadcrumbs Design Tips and Practices</p>
                  </div>
                  <div className='viewContent'>
                     <img className='thirdImg' src='../../../img/creative-workspaces-illustrations-tubikarts-3-768x576.jpg' alt=""/>
                     <h3>ILLUSTRATION</h3>
                     <p>Case Studies: Book Illustration for Visual Storytelling.</p>
                  </div>
                  <div className='viewContent'>
                     <img className='fourtImg' src='../../../img/photos-in-ui-design-tubik-blog-article-768x576.jpg' alt=""/>
                     <h3>UI/UX</h3>
                     <p>Web Usability: Breadcrumbs Design Tips and Practices</p>
                  </div>
               </div>
            </div>
            <div className='popularContent'>
               <h2>Popular</h2>
               <div className='display'>
                  <div className='displayContent'>
                     <img src='../../../img/cinema-app-ui-design-tubik.jpg' alt=""/>
                     <h4>PROCESS AND TOOLS</h4>
                     <h3>Mobile UI Design: 15 Basic Types of Screens</h3>
                     <p>Mobile applications evolve with user's needs offering new functionality still, there are screens common for many apps and they are the focus of this article.</p>
                  </div>
                  <div className='displayContent'>
                     <img src='../../../img/color-theory-design-tubik.jpg' alt=""/>
                     <h4>PROCESS AND TOOLS</h4>
                     <h3>Mobile UI Design: 15 Basic Types of Screens</h3>
                     <p>Mobile applications evolve with user's needs offering new functionality still, there are screens common for many apps and they are the focus of this article.</p>
                  </div>
                  <div className='displayContent'>
                     <img src='../../../img/images-in-user-interfaces-tubik-blog-article.png' alt=""/>
                     <h4>PROCESS AND TOOLS</h4>
                     <h3>Mobile UI Design: 15 Basic Types of Screens</h3>
                     <p>Mobile applications evolve with user's needs offering new functionality still, there are screens common for many apps and they are the focus of this article.</p>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
export default Content