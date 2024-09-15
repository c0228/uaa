import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Select, TablePagination } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const Universities = () =>{
 const [listOfCountries, setListOfCountries] = useState([]);
 const [ selectCountry, setSelectCountry] = useState('');
 useEffect(()=>{
    // Get Distinct Countries List from Universities Table
    setListOfCountries([{ id: 'USA', label: 'USA', value: 'USA' },
        { id: 'UK', label: 'UK', value: 'UK' }]);
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
         onChange={(event) => {
            let option = event.target.value;
         }}
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