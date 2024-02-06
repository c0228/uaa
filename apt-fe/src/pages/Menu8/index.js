import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { Icon, TextBox } from "e-ui-react";

const Menu8 = ()=>{
    return (<>
     <Header menulinks={HeaderMenu} activeId="Menu8" />
   
    </>);
   };

const Footer = () => {
    const links = [
        [
            {label : 'Company', key : 'header-1'},
            {label : 'About Us', key : 'item-1-1'},
            {label : 'Blog', key : 'item-1-2'},
            {label : 'Contact Us', key : 'item-1-3'},
            {label : 'Pricing', key : 'item-1-4'},
            {label : 'Testimonials', key : 'item-1-5'}
        ],
        [
            {label : 'Support', key : 'header-2'},
            {label : 'Help Center', key : 'item-2-1'},
            {label : 'Terms of Service', key : 'item-2-2'},
            {label : 'Legal', key : 'item-2-3'},
            {label : 'Privacy Policy', key : 'item-2-4'},
            {label : 'Status', key : 'item-2-5'}
        ]
    ]
    return(<div className="footer">
        <div className="footer-company-info">
            <div className="footer-img">
                <img src={icon} alt="" />
                    <span>
                        Nexcent
                    </span>
            </div>
            <div className="infos">
                <span>
                    Copyright <span>
                    <Icon type="FontAwesome" name="fa-copyright" size={36} />
                        </span> 2020 Nexcent ltd. 
                </span>
                <span>
                    All rights reserved
                </span>
            </div>
            <div className="footer-icons">
            <Icon type="FontAwesome" name="fa-instagram" size={36} />
            <Icon type="FontAwesome" name="fa-twitter" size={36} />
            <Icon type="FontAwesome" name="fa-youtube" size={36} />
            </div>
            <div className="footer-links">
                {links.map((col,index)=> {
                    <ul className={'col col-${index+1}'} key={'col -${index}'}>
                        {col.map((link,index)=> {
                            <li key={'link-${col}-${index}'}>
                                {link.label}
                            </li>
                        })}
                    </ul>
                })}
            </div>
            <div className="footer-form">
                <TextBox name="form" label="Stay upto date" placeholder="email" />
            </div>
        </div>
    </div>)
}

export default Menu8;