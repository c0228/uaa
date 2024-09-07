import React from "react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const ShortlistRecords = () =>{
 return (<div>
  <Header menulinks={HeaderMenu()} activeId="ShortlistRecords" />
  <Footer />
 </div>);
};

export default ShortlistRecords;