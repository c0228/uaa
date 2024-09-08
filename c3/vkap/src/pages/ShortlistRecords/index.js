import React from "react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import TablePagination from './components/TablePagination/index.js';

const ShortlistRecords = () =>{
 return (<div>
  <Header menulinks={HeaderMenu()} activeId="ShortlistRecords" />
  <TablePagination />
  <Footer />
 </div>);
};

export default ShortlistRecords;