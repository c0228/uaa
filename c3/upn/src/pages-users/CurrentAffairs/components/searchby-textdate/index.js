import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import HeaderDCA from "@Components/dca-header/index.js";
import DCADisplayCard from "@Components/dca-display-card/index.js";
import { callAPI } from "@Services/ApiManager.js";
import { searchArticlesByTextDateAPI } from "@ApiRoutes/DcaUrls.js";
import { FormatDate } from "@Utils/DateFormatUtils.js";
import Pagination from "@Components/pagination/index.js";

const DCASearchByTextDate = () => {
  const { lang, slugText = '', slugDate = '' } = useParams(); // Receives Date
  const [appCacheData, setAppCacheData] = useState(); // App Cache Data
  const [apiResponseData, setApiResponseData] = useState(); // App Response Data
  const [activeNiche, setActiveNiche] = useState(''); 
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const ApiLoader = async(text, date, activeNiche, pageIndex) =>{
    callAPI(searchArticlesByTextDateAPI(text, date, activeNiche, pageIndex), (cacheData, apiResponse)=>{
        setAppCacheData(cacheData);   
        setApiResponseData(apiResponse);  
        setActiveNiche(apiResponse.details.activeNiche); 
    },(error)=>{
        console.log("error [callAPI]: ", error);
    });
  };
  const NicheHandler = (niche) =>{
    ApiLoader(slugText, slugDate, niche, currentPageIndex);
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
    console.log("slugText: ", slugText, " slugDate: ", slugDate);
    ApiLoader(slugText, slugDate, activeNiche, currentPageIndex);
  },[slugText, slugDate, currentPageIndex]);
  return (<div>
    <Header menulinks={HeaderMenu()} activeId="DailyCurrentAffairs" />
    <HeaderDCA text={slugText} date={slugDate} data={apiResponseData?.kpis} />
    <div className="mtop15p">
    <ContainerFluid>
        {(slugText?.length===0 && slugDate?.length>0) && (<Row>
            <Col md={12}>
                <div><h1><b>Categories matching "All Topics" [{FormatDate(slugDate)}]</b></h1></div>
                <div className="mt-2 padLeft5p"><i>The Following are the active categories for the selected date.</i></div>
            </Col>
        </Row>)}
        {(slugText?.length>0 && slugDate?.length===0) && (<Row>
            <Col md={12}>
                <div><h1><b>Categories matching "{slugText}" [All Dates]</b></h1></div>
                <div className="mt-2 padLeft5p"><i>The Following are the active categories for the selected date.</i></div>
            </Col>
        </Row>)}
        {(slugText?.length>0 && slugDate?.length>0) && (<Row>
            <Col md={12}>
                <div><h1><b>Categories matching "{slugText}" [{FormatDate(slugDate)}]</b></h1></div>
                <div className="mt-2 padLeft5p"><i>The Following are the active categories for the entered title and the selected date.</i></div>
            </Col>
        </Row>)}
        <Row>
            <Col md={12}>
                {apiResponseData?.details?.nicheList?.map((n,i)=>{
                    return (<span key={i} className="d-inline-block m-1">
                    <Button type={(n?.item === activeNiche)?"primary":"outline-primary"}
                        size={11} onClick={() => NicheHandler(n?.item)}>
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

export default DCASearchByTextDate;