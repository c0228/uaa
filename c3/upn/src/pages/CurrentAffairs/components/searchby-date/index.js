import React, { useState } from "react";
import { ContainerFluid, Row, Col, Card, Button, Icon, Badge  } from "e-ui-react";
import DCADisplayCard from '@Components/dca-display-card/index.js';

const CURRENT_AFFAIRS_BYDATE = {
 "2024-06-03":{
    "Polity and Governance":{
        "Governance":[{
                        "url": "https://www.google.com/",
                        "title":"Climate Change and Policy Reforms",
                        "desc": "Key developments in climate action, biodiversity and sustainability.",
                        "tags":["UPSC Prelims", "GS II"]
                        },{
                        "url": "https://www.google.com/",
                        "title":"Climate Change and Policy Reforms",
                        "desc": "Key developments in climate action, biodiversity and sustainability.",
                        "tags":["UPSC Prelims", "GS II"]
                        },{
                        "url": "https://www.google.com/",
                        "title":"Climate Change and Policy Reforms",
                        "desc": "Key developments in climate action, biodiversity and sustainability.",
                        "tags":["UPSC Prelims", "GS II"]
                        },{
                        "url": "https://www.google.com/",
                        "title":"Climate Change and Policy Reforms",
                        "desc": "Key developments in climate action, biodiversity and sustainability.",
                        "tags":["UPSC Prelims", "GS II"]
                        },{
                        "url": "https://www.google.com/",
                        "title":"Climate Change and Policy Reforms",
                        "desc": "Key developments in climate action, biodiversity and sustainability.",
                        "tags":["UPSC Prelims", "GS II"]
                    }],
        "Citizen Charters":[]
    },
    "Economy":{
        "Inflation":[],
        "Taxation":[]
    },
    "Environment and Ecology":{
        "Sculpture":[],
        "Music":[]
    },
    "International Relations":{
        "Indo-Pacific":[],
        "Bilateral Relations":[]
    }
 }
};

const SearchByDate = ({ date }) =>{
 const [articleDisplayData, setArticleDisplayData] = useState({});
 const CategoriesList = ({ data }) =>{
   const k = (data?.[date])?(Object.keys(data?.[date])):[];
   console.log("k", k);
   return (<div className="mt-2">
        {k?.map((d,i1)=>{
            const categoryData = data?.[date]?.[d];
            const subCategoryNames = Object.keys(categoryData);
            return (<span key={i1}>
            {subCategoryNames?.map((subCategoryName,i2)=>{
                const articleData = categoryData?.[subCategoryName];
                if(i1===0 && i2===0){
                    setArticleDisplayData({
                        category: d,
                        subCategory: subCategoryName,
                        data: articleData
                    });
                }
                return (<span key={i2} className="d-inline-block m-1">
                    <Button type={(i1===0 && i2===0)?"primary":"outline-primary"} size={11}>
                        <b>{d} / {subCategoryName} ({articleData?.length})</b>
                    </Button>
                </span>);
            })}
            </span>);
        })}
    </div>);
 };
 return (<div className="mtop15p">
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div><h1><b>Categories covered Section</b></h1></div>
                <div className="mt-2 padLeft5p">Following are the active categories for the selected date [{date}].</div>
                <CategoriesList data={CURRENT_AFFAIRS_BYDATE} />
            </Col>
        </Row>
        {articleDisplayData?.data?.length>0 && (<Row>
            <Col md={8}>
                <Row className="mtop15p">
                    {articleDisplayData?.data?.map((a,i)=>{
                        return (<Col md={6}>
                            <DCADisplayCard index={i} data={a} category={articleDisplayData?.category} subCategory={articleDisplayData?.subCategory} />
                        </Col>);
                    })}
                </Row>
            </Col>
            <Col md={4}>
            
            </Col>
        </Row>)}
        
    </ContainerFluid>
 </div>);
};

export default SearchByDate;