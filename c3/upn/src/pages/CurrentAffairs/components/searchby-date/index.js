import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import HeaderDCA from "@Components/dca-header/index.js";
import DCADisplayCard from "@Components/dca-display-card/index.js";
import { callAPI } from "@Services/ApiManager.js";
import { searchArticlesByDateAPI } from "@ApiRoutes/DcaUrls.js";
import { formatDate } from "@Utils/DateFormatUtils.js";

const DCASearchByDate = () => {
  const { slugDate } = useParams(); // Receives Date
  const [appCacheData, setAppCacheData] = useState(); // App Cache Data
  const [apiResponseData, setApiResponseData] = useState(); // App Response Data
  const [nicheList, setNicheList] = useState([]);
  const [activeNiche, setActiveNiche] = useState(''); 
  const ApiLoader = async(date) =>{
    callAPI(searchArticlesByDateAPI(date), (cacheData, apiResponse)=>{
        InitialSetup(apiResponse, slugDate);
        setAppCacheData(cacheData);   
        setApiResponseData(apiResponse);   
    },(error)=>{
        console.log("error [callAPI]: ", error);
    });
  };
  const InitialSetup = (apiResponseData, slugDate) =>{
    const categoriesData = apiResponseData?.[slugDate];
    const categories = (categoriesData)? Object.keys(categoriesData) : [];
    let nicheData = []
    categories?.map((category,i1)=>{
        const subCategoriesData = categoriesData?.[category];
        const subCategories = (subCategoriesData)? Object.keys(subCategoriesData) : [];
        subCategories?.map((subCategory,i2)=>{
            if(activeNiche?.length===0 && i1 === 0 && i2 === 0){
                setActiveNiche(`${category} / ${subCategory}`);
            }
            nicheData.push({
                item: `${category} / ${subCategory}`,
                count: subCategoriesData?.[subCategory]?.length
            });
        });
    })
    setNicheList(nicheData);
  };
  const ArticlesDisplay = () =>{
    const [category, subCategory] = activeNiche.split(" / ");
    const articles = apiResponseData?.[slugDate]?.[category]?.[subCategory];
    return (<div className="mtop15p">
        <Row>
        {articles?.map((article,index)=>{
            return (<Col md={4}>
               <DCADisplayCard index={index} data={article} category={category} subCategory={subCategory} /> 
            </Col>);
        })}
    </Row>
    </div>);
  };
  useEffect(()=>{
    ApiLoader(slugDate);
  },[slugDate]);
  return (<div>
    <Header menulinks={HeaderMenu()} activeId="DailyCurrentAffairs" />
    <HeaderDCA date={slugDate} data={apiResponseData?.kpis} />
    <div className="mtop15p">
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div><h1><b>Categories covered Section</b></h1></div>
                <div className="mt-2 padLeft5p">
                Following are the active categories for the selected date <b>[{formatDate(slugDate)}]</b>.
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                {nicheList?.map((n,i)=>{
                    return (<span key={i} className="d-inline-block m-1">
                    <Button type={(n?.item === activeNiche)?"primary":"outline-primary"}
                        size={11} onClick={() => setActiveNiche(n?.item)}>
                            <b>{n?.item} ({n?.count})</b>
                    </Button>
                </span>);
                })}
            </Col>
        </Row>
        <ArticlesDisplay />
    </ContainerFluid>
    </div>
  </div>);
};

export default DCASearchByDate;