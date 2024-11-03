import React from "react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const AboutUs = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} activeId="AboutUs" />
    <Footer />
 </div>);
};

export default AboutUs;