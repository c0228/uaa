import React from "react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Services = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} activeId="Services" />
    <Footer />
 </div>);
};

export default Services;