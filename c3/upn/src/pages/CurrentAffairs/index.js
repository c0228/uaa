import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Button, TextBox, DateTimePicker } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import HeaderDCA from "./components/header-dca/index.js";
import SearchByText from "./components/searchby-text/index.js";
import SearchByDate from "./components/searchby-date/index.js";
import SearchByCategories from "./components/searchby-categories/index.js";
import CURRENT_AFFAIRS_BYDATE from '@StaticData/data-dca-searchbydate.json';
import CURRENT_AFFAIRS_BYCATEGORIES from '@StaticData/data-dca-searchbycategories.json';
import './index.css';

const CurrentAffairs = () =>{
 const [ pageData, setPageData ] = useState();
 const { text, date, category, subCategory } = useParams();
 useEffect(()=>{
  if(date?.length>0) {
      if(text?.length>0) {
         setPageData(CURRENT_AFFAIRS_BYDATE);
      } else {
         setPageData(CURRENT_AFFAIRS_BYDATE);
      }
  } else {
     setPageData(CURRENT_AFFAIRS_BYCATEGORIES)
  }
 },[]);
 return (<div>
   <Header menulinks={HeaderMenu()} activeId="DailyCurrentAffairs" />
   <HeaderDCA date={date} data={pageData?.kpis} />
   {(date?.length>0)?
      ((text?.length>0)?
      (<SearchByText text={text} date={date} data={pageData} />):
      (<SearchByDate date={date} data={pageData} />)
   ):
      (<SearchByCategories category={category} subCategory={subCategory}  />)}
 </div>);
};

export default CurrentAffairs;