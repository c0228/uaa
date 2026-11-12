import React, { useState,  useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Card, Select, TextBox, Autocomplete, Button  } from "e-ui-react";
import { AppColors } from "@Utils/AppColors.js";
import ScrollToTop from "@Components/UIElements/ScrollToTop/index.js";
import NewsCard from "@Components/NewsFeedModule/NewsCard/index.js";
import TitleTopSection from "./components/title-top-section/index.js";
import NCardTemplate1 from "@Components/NewsFeedModule/NCardTemplate1/index.js";
import NCardTemplate2 from "@Components/NewsFeedModule/NCardTemplate2/index.js";
import Header1 from "@Templates/Header1/index.js";
import CreateNewsArticle from "./components/create-news-article/index.js";
import { NewsListContextProvider } from "./context.js";
import './index.css';

const data = [{
    isBookMarked: false,
    tagName: "Local Community",
    img: "https://picsum.photos/id/1015/500/300",
    date: "May 31, 2024",
    likes: "13.5K",
    dislikes: "3.5K",
    title: "Community Clean-up Drive This Sunday",
    desc: "Join your neighbors in keeping our community clean and green.",
    tags: ["LocalEvents", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Food & Dining",
    img: "https://picsum.photos/id/292/500/300",
    date: "May 30, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "New Organic Market Opens in Nadergul",
    desc: "Fresh organic produce now available every weekend.",
    tags: ["CafesAndBakeries", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Local Community",
    img: "https://picsum.photos/id/1071/500/300",
    date: "May 29, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "Road Construction Update on Street",
    desc: "Work in progress. Expect minor delays in traffic.",
    tags: ["PublicIssues", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Local Community",
    img: "https://picsum.photos/id/158/500/300",
    date: "May 28, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "Cultural Festival 2024 Highlights",
    desc: "Relive the moments from our amazing cultural festival.",
    tags: ["LocalEvents", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Shopping & Services",
    img: "https://picsum.photos/id/367/500/300",
    date: "May 27, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "New Pharmacy Store Opening Soon",
    desc: "Quality medicines and healthcare products.",
    tags: ["LocalShops", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Food & Dining",
    img: "https://picsum.photos/id/429/500/300",
    date: "May 26, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "Top 10 Must-Try Street Foods",
    desc: "Explore the best street food spots in our area.",
    tags: ["StreetFood", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Health & Wellness",
    img: "https://picsum.photos/id/64/500/300",
    date: "May 25, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "Free Yoga Session This Weekend",
    desc: "Join our free yoga session at the park.",
    tags: ["Fitness", "Nadergul"] 
 },{
    isBookMarked: false,
    tagName: "Education",
    img: "https://picsum.photos/id/20/500/300",
    date: "May 24, 2024",
    likes: "3.5K",
    dislikes: "1.5K",
    title: "School Admission Process 2024",
    desc: "Important dates and documents required.",
    tags: ["Schools", "Nadergul"] 
 }];

const NewsList = () =>{
 useEffect(()=>{
   document.body.style.backgroundColor='#f9f9f9';
 },[]);
 return (<NewsListContextProvider variables={{ createArticleStatus: 'close' }}>
   <CreateNewsArticle />
   <ScrollToTop />
   <Header1 />
   <TitleTopSection />
   <ContainerFluid>
      <Row>
         {["",""]?.map((d,i)=>{
            return(<Col key={i} md={6}><NCardTemplate1 /></Col>);
         })}
      </Row>
   </ContainerFluid>
  <div style={{ marginBottom:'65px' }}>
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
            return(<Col md={6}><NCardTemplate1 /></Col>);
         })}
      </Row>
   </ContainerFluid>
 </NewsListContextProvider>);
};

export default NewsList;