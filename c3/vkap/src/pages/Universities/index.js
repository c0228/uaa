import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Select, TablePagination, UrlAsyncFetch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const Universities = () =>{
 const [listOfCountries, setListOfCountries] = useState([]);
 const [ selectCountry, setSelectCountry] = useState('');
 const initialize = async() =>{
   // Get Distinct Countries List from Universities Table
   const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'countries/list', 'GET', {} );
   setListOfCountries( response );
 };
 useEffect(()=>{
    initialize();
 },[]);
 const HeaderTitle = () =>{
   return (<div>
    <h4 style={{ paddingBottom:'15px', borderBottom:'1px solid #ccc' }}><b>Universities</b>
    <div className="pull-right">
    <Select
         value={selectCountry}
         placeholder="Select Country"
         options={listOfCountries}
         className="navbar-layout"
         width="130"
         fontSize="12"
         onChange={(event)=>setSelectCountry(event.target.value)}
      />    
    </div> 
    </h4>
    </div>);
 };
 return (<div>
<Header menulinks={HeaderMenu()} activeId="Universities" />
<ContainerFluid>
   <Row><Col md={12}><HeaderTitle /></Col></Row>
</ContainerFluid>
<Footer />
 </div>);
};

export default Universities;