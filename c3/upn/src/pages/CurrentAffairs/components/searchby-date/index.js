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
import Pagination from "@Components/pagination/index.js";

const DCASearchByDate = () => {
  const { slugDate } = useParams(); // Receives Date
  const [appCacheData, setAppCacheData] = useState(); // App Cache Data
  const [apiResponseData, setApiResponseData] = useState(); // App Response Data
  const [activeNiche, setActiveNiche] = useState(''); 
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const ApiLoader = async(date, pageIndex) =>{
    callAPI(searchArticlesByDateAPI(date, pageIndex), (cacheData, apiResponse)=>{
        setAppCacheData(cacheData);   
        setApiResponseData(apiResponse);  
        setActiveNiche(apiResponse.details.activeNiche); 
    },(error)=>{
        console.log("error [callAPI]: ", error);
    });
  };
  const ArticlesDisplay = () =>{
    const [category, subCategory] = activeNiche.split(" / ");
    return (<div className="mtop15p">
        <Row>
        {apiResponseData?.details?.data?.map((article,index)=>{
            return (<Col key={index} md={4}>
               <DCADisplayCard index={index} data={article} category={category} subCategory={subCategory} /> 
            </Col>);
        })}
    </Row>
    </div>);
  };
  useEffect(()=>{
    ApiLoader(slugDate, currentPageIndex);
  },[slugDate, currentPageIndex]);
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
                {apiResponseData?.details?.nicheList?.map((n,i)=>{
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
        <Row>
            <Col md={12}>
            {apiResponseData?.details?.totalCount > 0 && (
                <Pagination totalCount={apiResponseData?.details?.totalCount} pageSize={apiResponseData?.details?.pageSize}
                    currentPage={currentPageIndex} onPageChange={setCurrentPageIndex} visiblePages={5} />)}
            </Col>
        </Row>
    </ContainerFluid>
    </div>
  </div>);
};

export default DCASearchByDate;