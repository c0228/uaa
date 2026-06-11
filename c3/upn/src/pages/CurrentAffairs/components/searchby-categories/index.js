import React, { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { ContainerFluid, Row, Col, Menu, Card, Button } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import HeaderDCA from "@Components/dca-header/index.js";
import DCADisplayCard from "@Components/dca-display-card/index.js";
import Pagination from "@Components/pagination/index.js";
import { callAPI } from "@Services/ApiManager.js";
import { getAPIUrl } from "@ApiRoutes/DcaUrls.js";

/***
 * =================================================
 *  STEPS:
 * =================================================
 * 1) /daily-current-affairs/:category/:subCategory should first get categories and then subcategories.
 * 2) 
 */
const toTitleCase = (slug) => {
  slug = decodeURIComponent(slug);
  const lowerCaseWords = ["and", "or", "in", "of", "to", "for", "on", "at", "by"];
  return slug
    ?.split("-")
    .map((word, index) => {
      const lowerWord = word.toLowerCase();
      if (index > 0 && lowerCaseWords.includes(lowerWord)) {
        return lowerWord;
      }
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    })
    .join(" ");
};

const toSlug = (title) => {
  return encodeURIComponent(
    title
      ?.trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
};

const DCASearchByCategories = () =>{
 const navigate = useNavigate();
 const { category, subCategory } = useParams(); // Receives category and subCategories
 const [appCacheData, setAppCacheData] = useState(); // App Cache Data
 const [apiResponseData, setApiResponseData] = useState(); // App Response Data
 const [activeNiche, setActiveNiche] = useState({ category: toTitleCase(category), subCategory: toTitleCase(subCategory) }); 
 const [currentPageIndex, setCurrentPageIndex] = useState(1);
 const CategoryNicheHandler = (d) =>{
  //  setActiveNiche({ category:d, subCategory: appCacheData?.cacheData?.niches?.[d]?.[0]  })
   console.log("d: ", d, "appCacheData?.cacheData?.niches?.[d]?.[0]: ", appCacheData?.cacheData?.niches?.[d]?.[0]);
   window.location.href = process.env.PROJECT_URL+"daily-current-affairs/list/"
        +toSlug(d)+"/"+toSlug(appCacheData?.cacheData?.niches?.[d]?.[0]);
 };
 const SubCategoryNicheHandler = (d) =>{
    window.location.href = process.env.PROJECT_URL+"daily-current-affairs/list/"
        +toSlug(activeNiche?.category)+"/"+toSlug(d);
 };
 const ApiLoader = async(category, subCategory, currentPageIndex) =>{
    callAPI(getAPIUrl(category, subCategory, currentPageIndex), (cacheData, apiResponse)=>{
            setAppCacheData(cacheData);   
            setApiResponseData(apiResponse);   
    },(error)=>{
        console.log("error [callAPI]: ", error);
    });
 };
 useEffect(()=>{
    ApiLoader(category, subCategory, currentPageIndex);
 },[category, subCategory, currentPageIndex]);
 useEffect(()=>{
    console.log("activeNiche: ", activeNiche);
 },[activeNiche]);
 const DisplayCategoryList = ({ data }) =>{
    const k =  data ? Object.keys(data) : [];
    return (<div className="mtop5p">
     <Card padding={5} backgroundColor="#e1f2ff">
        {k?.map((d,i)=>{
            return (<div key={i} 
                className={(activeNiche?.category===d)?"main-dca-category-item main-dca-category-item-active":"main-dca-category-item"} 
                onClick={()=>CategoryNicheHandler(d)}>
                <span>{d}</span>
            </div>);
        })}
     </Card>
    </div>);
 };
 return (<div>
    <Header menulinks={HeaderMenu()} activeId="DailyCurrentAffairs" />
    <HeaderDCA data={apiResponseData?.kpis} />
    <ContainerFluid>
      <Row className="mtop15p">
         <Col md={3}>
            <div><h2><b>Categories</b></h2></div>
            <DisplayCategoryList data={appCacheData?.cacheData?.niches} /> 
         </Col>
          <Col md={9}>
            {appCacheData?.cacheData?.niches?.[activeNiche?.category]?.map((d,i)=>{
                return (<span key={i} className="d-inline-block m-1" 
                    onClick={()=>SubCategoryNicheHandler(d)}>
                    <Button type={(activeNiche?.subCategory===d)?"primary":"outline-primary"} size={11}><b>{d}</b></Button>
                </span>);
            })}
            <Row>
                <Col md={12}>
                    <Pagination
                        totalCount={apiResponseData?.current?.totalCount}
                        pageSize={apiResponseData?.current?.pageSize}
                        currentPage={currentPageIndex}
                        onPageChange={setCurrentPageIndex}
                        visiblePages={5} />
                </Col>
            </Row>
             <Row className="mtop15p">
                {apiResponseData?.current?.data?.map((d,i)=>{
                    return (<Col key={i} md={4}>
                        <DCADisplayCard index={i} data={d} 
                            category={toTitleCase(apiResponseData?.current?.category)} 
                            subCategory={toTitleCase(apiResponseData?.current?.subCategory)} />
                    </Col>)
                })}
             </Row>
             <Row>
                <Col md={12}>
                    <Pagination
                        totalCount={apiResponseData?.current?.totalCount}
                        pageSize={apiResponseData?.current?.pageSize}
                        currentPage={currentPageIndex}
                        onPageChange={setCurrentPageIndex}
                        visiblePages={5} />
                </Col>
            </Row>
          </Col>
      </Row>
    </ContainerFluid>
 </div>);
};

export default DCASearchByCategories;