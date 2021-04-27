import React, {Component} from 'react';
import './style.css'

class Header extends Component {
   render() {
      return (
         <div className=''>
             <div className='headerInfo'>
                <img src='../../../img/logo.svg' alt="" className='logoHeader'/>
                <h2>blog</h2>
                <nav>
                    <a href=""><img src='../../../img/loupe.svg' alt="" className='loupeHeader'/></a>
                    <a href="" className='tagsHeader'>Tags</a>
                    <a href="" className='archivesHeader'>Archives</a>
                    <a href="">Books</a>
                    <a href="" className='categoryHeader'>Category</a>
                    <button className='suscribeHeader'>Suscribe</button>
                </nav>
             </div>
             <nav className='topicsHeader'>
                 <a href="">ALL TOPICS</a>
                 <a href="">ANIMATION</a>
                 <a href="">BRANDING</a>
                 <a href="">BUSINESS</a>
                 <a href="">CASE STUDY</a>
                 <a href="">ILLUSTRATION</a>
                 <a href="">PROCESSES AND TOOLS</a>
                 <a href="">UI/UX</a>
             </nav>
         </div>
      )
   }
}
export default Header