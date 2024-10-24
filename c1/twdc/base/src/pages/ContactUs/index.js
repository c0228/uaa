import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const ContactUs = () =>{
 return (<div>
<Header menulinks={HeaderMenu} activeId="ContactUs" />
 </div>);
};

export default ContactUs;