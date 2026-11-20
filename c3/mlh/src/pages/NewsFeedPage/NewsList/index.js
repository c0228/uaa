import React, { useState,  useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Card, Select, TextBox, Autocomplete, Button  } from "e-ui-react";
import { AppColors } from "@Utils/AppColors.js";
import ScrollToTop from "@Components/UIElements/ScrollToTop/index.js";
import NewsCard from "@Components/NewsFeedModule/NewsCard/index.js";
import TitleTopSection from "./components/title-top-section/index.js";
import NCardTemplate1 from "@Templates/NewsFeedModule/NCardTemplate1/index.js";
import NCardTemplate2 from "@Templates/NewsFeedModule/NCardTemplate2/index.js";
import Header1 from "@Templates/Header1/index.js";
import CreateNewsArticle from "./components/create-news-article/index.js";
import { NewsListContextProvider, getNewsListContext } from "./context.js";
import { initVariables } from "./context-data.js";
import { data } from "./data.js";
import './index.css';

const NewsList = () =>{
 const newsListContext = getNewsListContext();
 useEffect(()=>{
   document.body.style.backgroundColor='#f9f9f9';
 },[]);
 return (<NewsListContextProvider variables={initVariables}>
   <CreateNewsArticle />
   <ScrollToTop />
   <Header1 />
   <TitleTopSection />
   <ContainerFluid>
      <Row className="mtop15p">
        <Col md={4}>
          <NCardTemplate1 />
        </Col>
        <Col md={4}>
          <NCardTemplate1 />
        </Col>
        <Col md={4}>
          <NCardTemplate1 />
        </Col>
      </Row>
      <Row>
         {["",""]?.map((d,i)=>{
            return(<Col key={i} md={6}><NCardTemplate2 /></Col>);
         })}
      </Row>
   </ContainerFluid>
 {/* <div style={{ marginBottom:'65px' }}>
    <ContainerFluid className="mtop15p">
    <Row>
      {data?.map((d,i)=>{
        return (<Col key={i} md={3}>
          <NewsCard data={d} index={i} />
        </Col>);
      })}
    </Row>
    </ContainerFluid>
  </div>
   <ContainerFluid>
      <Row>
         {["",""]?.map((d,i)=>{
            return(<Col key={i} md={6}><NCardTemplate1 /></Col>);
         })}
      </Row>
   </ContainerFluid> */}
 </NewsListContextProvider>);
};

export default NewsList;