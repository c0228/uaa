import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Button, TextBox, DateTimePicker } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import HeaderDCA from "@Components/dca-header/index.js";
import SearchByText from "./components/searchby-text/index.js";
import SearchByDate from "./components/searchby-date/index.js";
import SearchByCategories from "./components/searchby-categories/index.js";
// import CURRENT_AFFAIRS_BYTEXTANDDATE from "@StaticData/data-dca-searchbytextdate.json";
// import CURRENT_AFFAIRS_BYDATE from '@StaticData/data-dca-searchbydate.json';
// import CURRENT_AFFAIRS_BYCATEGORIES from '@StaticData/data-dca-searchbycategories.json';
import './index.css';

const CurrentAffairs = () =>{
 const [ pageData, setPageData ] = useState();
 const { text, date, category, subCategory } = useParams();
 useEffect(()=>{
 /***
  *   CONDITIONS:
  *      1) Only date is giving and no text - CURRENT_AFFAIRS_BYDATE Data should be loaded.
  *      2) Only text is giving and no date - CURRENT_AFFAIRS_BYTEXT Data should be loaded.
  *      3) text and data is given - CURRENT_AFFAIRS_BYTEXTANDDATE Data should be loaded.
  */
  console.log("text: ", text, "date: ", date, "category: ", category, "subCategory: ", subCategory);
  let url;
  if(date?.length>0 && text === undefined) { // CURRENT_AFFAIRS_BYDATE
    //  setPageData(CURRENT_AFFAIRS_BYDATE);
  } else if(date === undefined && text?.length>0) { // CURRENT_AFFAIRS_BYTEXT
     // setPageData(CURRENT_AFFAIRS_BYTEXTANDDATE);
  } else if(date?.length>0 && text?.length>0) { // CURRENT_AFFAIRS_BYTEXTANDDATE
     // setPageData(CURRENT_AFFAIRS_BYTEXTANDDATE);
  } else { // CURRENT_AFFAIRS_BYCATEGORIES
      url =  process.env.PROJECT_URL+'static-data/data-dca-searchbycategories.json';
  }
  fetch(url).then(result=>result.json()).then(response=>{
    console.log("response", response);
    setPageData(response);
  });
 },[]);
 return (<div>
   <Header menulinks={HeaderMenu()} activeId="DailyCurrentAffairs" />
   <HeaderDCA text={text}  date={date} data={pageData?.kpis} />
   {/** CURRENT_AFFAIRS_BYDATE */}
   {(date?.length>0 && text === undefined) && (<SearchByDate date={date} data={pageData} />)}
   {/** CURRENT_AFFAIRS_BYTEXT */}
   {(date === undefined && text?.length>0) && (<SearchByText text={text} date={date} data={pageData} />)}
   {/** CURRENT_AFFAIRS_BYTEXTANDDATE */}

   {/** CURRENT_AFFAIRS_BYCATEGORIES ::: DEFAULT */}
   <SearchByCategories category={pageData?.category} subCategory={pageData?.subCategory} data={pageData?.data} />
 </div>);
};

export default CurrentAffairs;