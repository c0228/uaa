import React from "react";
import { Icon } from "e-ui-react";
import './index.css';

const Upper = () =>{
 return (<div className="upper-header">
     <div className="upper-header-flex">
       <Icon type="FontAwesome" name="fa-phone-square" size={20} color="#fff" className="desktop-view" />
       <span className="desktop-view txt-phone-number">+91 97033 03888</span>
       <span className="desktop-view separator"></span>
       <Icon type="FontAwesome" name="fa-envelope" size={16} color="#fff" className="desktop-view padLeft15p" />
       <span className="desktop-view txt-email">nellutlalnrao@gmail.com</span>
       <div className="mobile-view-center desktop-view-right padRight15p">
        <a target="_blank" href="#">
           <Icon type="FontAwesome" name="fa-facebook" size={16} color="#fff" className="padLeft5p padRight5p" />
         </a>
         <a target="_blank" href="#">
           <Icon type="FontAwesome" name="fa-twitter" size={16} color="#fff" className="padLeft5p padRight5p" />
         </a>
         <a target="_blank" href="#">
           <Icon type="FontAwesome" name="fa-instagram" size={16} color="#fff" className="padLeft5p padRight5p" />
         </a>
         <a target="_blank" href="#">
           <Icon type="FontAwesome" name="fa-whatsapp" size={16} color="#fff" className="padLeft5p padRight5p" />
         </a>
       </div>
     </div>
  </div>);
};

export default Upper;