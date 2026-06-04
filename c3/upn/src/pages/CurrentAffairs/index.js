import React from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Button, TextBox, DateTimePicker } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import HeaderDCA from "./components/header-dca/index.js";
import SearchByDate from "./components/searchby-date/index.js";
import SearchByCategories from "./components/searchby-categories/index.js";
import './index.css';

const CurrentAffairs = () =>{
 const { date, category, subCategory } = useParams();
 return (<div>
   <Header menulinks={HeaderMenu()} activeId="DailyCurrentAffairs" />
   <HeaderDCA date={date} />
   {(date)?(<SearchByDate date={date} />):(<SearchByCategories category={category} subCategory={subCategory}  />)}
 </div>);
};

export default CurrentAffairs;