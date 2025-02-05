import React, { useState, useEffect, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { Breadcrumb, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Terminologies from '@Components/terminologies-list/index.js';
import Routes from "./routes.js";

const Web3Terminologies = ({ id }) =>{
 const [route, setRoute] = useState();
 const getDataById = (url) => {
    return Routes?.list.find(item => item.url === url);
 };
 useEffect(()=>{
  console.log("id", id);
  setRoute(getDataById(id));
 },[id]);
 const BlogTopHeader = ({ title, date }) =>{
   return (<div className="mtop15p mbot15p">
     <Breadcrumb backgroundColor={Colors.light} 
         data={[{ label:'Web 3.0', url:process.env.PROJECT_URL+'tech/web3.0/overview' },
             { label: title, url:'#' }]} />
     <BlogArticleHeader title={title} date={date} />
   </div>)
  };
 
 return (<div>
     <Header menulinks={HeaderMenu} activeId="Blockchain" />
     <ContainerFluid>
        <Row>
            <Col xl={8} xxl={8}>
                {route?.label && (<div>
                     <BlogTopHeader title={route?.label} date={route?.date} />
                     {route?.component}
                  </div>)}
            </Col>
            <Col xl={4} xxl={4}>
                <Terminologies data={Routes} />
            </Col>
        </Row>
     </ContainerFluid>
 </div>);
};

export default Web3Terminologies;