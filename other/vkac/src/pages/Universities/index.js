import React, { useState, useEffect } from "react";
import { UrlAsyncFetch } from 'e-ui-react';
import { Row, Col, ContainerFluid } from 'e-ui-react';
import Header from './../Header/index.js';
import UniversityList from './university-list/index.js';
import UniversityForm from './university-form/index.js';

const Universities = ()=>{
   const [ tableData, setTableData ] = useState([]);
   const [country, setCountry] = useState('USA'); // Default Country
   const Load = async(country)=>{
      const responseData = await UrlAsyncFetch(process.env.NEXUS_URL + process.env.UNIVERSITY_LIST_URL + country, 'GET');
      console.log("responseData", JSON.stringify(responseData));
      setTableData( responseData );
   };

   useEffect(()=>{
      if(country?.length>0) { Load(country); }
    },[country]);

 return (<div>
   <Header activeMenu="universities" />
   <ContainerFluid>
      <Row>
         {/*<Col xxl={4} xl={4}>
            <UniversityForm />
         </Col>*/}
         <Col xxl={12} xl={12}>
            <UniversityList data={tableData}  country={country} />
         </Col>
      </Row> 
  </ContainerFluid>
 </div>);
};

export default Universities;