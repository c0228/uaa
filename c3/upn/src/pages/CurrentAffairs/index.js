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
 /***
  *   CONDITIONS:
  *      1) Only date is giving and no text - CURRENT_AFFAIRS_BYDATE Data should be loaded.
  *      2) Only text is giving and no date - CURRENT_AFFAIRS_BYTEXT Data should be loaded.
  *      3) text and data is given - CURRENT_AFFAIRS_BYTEXTANDDATE Data should be loaded.
  */
  
  if(date?.length>0 && text?.length ===0) { // CURRENT_AFFAIRS_BYDATE
       setPageData(CURRENT_AFFAIRS_BYDATE);
  } else if(date?.length === 0 && text?.length>0) { // CURRENT_AFFAIRS_BYTEXT

  } else if(date?.length>0 && text?.length>0) { // CURRENT_AFFAIRS_BYTEXTANDDATE

  } else { // CURRENT_AFFAIRS_BYCATEGORIES
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