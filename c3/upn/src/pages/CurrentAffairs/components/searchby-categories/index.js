import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Menu, Card, Button } from "e-ui-react";
import CURRENT_AFFAIRS_CATEGORIES from '@StaticData/data-app-niches.json';

const SearchByCategories = ({ category, subCategory}) =>{
 const [activeCategory, setActiveCategory] = useState();
 const [activeSubCategory, setActiveSubCategory] = useState();

 useEffect(()=>{
    if(category){
        setActiveCategory(toTitleCase(category));
    } else {
        setActiveCategory('Art and Culture');
    }
 },[]);

  useEffect(()=>{
    if(subCategory) {
        setActiveSubCategory(toTitleCase(subCategory));
    } else {
        setActiveSubCategory(CURRENT_AFFAIRS_CATEGORIES?.[activeCategory]?.[0]);
    }
 },[activeCategory]);

 const selectCategoryHandler = (categoryName) =>{
    setActiveCategory(categoryName);
 };

 const toTitleCase = (slug) => {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
 };

 const DisplayCategoryList = ({ data }) =>{
    const k = Object.keys(data);
    return (<div className="mtop5p">
     <Card padding={5} backgroundColor="#e1f2ff">
        {k?.map((d,i)=>{
            return (<div key={i} className={(activeCategory===d)?"main-dca-category-item main-dca-category-item-active":"main-dca-category-item"} 
                onClick={()=>selectCategoryHandler(d)}>
                <span>{d}</span>
            </div>);
        })}
     </Card>
    </div>);
 };
 return (<div className="mtop15p">
    <ContainerFluid>
      <Row>
         <Col md={3}>
            <div><h2><b>Categories</b></h2></div>
            <DisplayCategoryList data={CURRENT_AFFAIRS_CATEGORIES} />
         </Col>
         <Col md={9}>
            {CURRENT_AFFAIRS_CATEGORIES[activeCategory]?.map((d,i)=>{
                return (<span key={i} className="d-inline-block m-1">
                    <Button type={(activeSubCategory===d)?"primary":"outline-primary"} size={11}><b>{d}</b></Button>
                </span>);
            })}
         </Col>
      </Row>
   </ContainerFluid>
 </div>);
};

export default SearchByCategories;