import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Badge, Card } from "e-ui-react";
import { callAPI } from "@Services/ApiManager.js";

const ViewCategories = () =>{
 const [apiResponseData, setApiResponseData] = useState();
 useEffect(()=>{
    fetch("http://localhost/projects/uaa/c3/upn/nexus/niches/category/view").then(response=>response.json())
        .then(apiResponse=>{
            console.log("apiResponse: ", apiResponse);
            setApiResponseData( apiResponse );
        });
    /* callAPI({ url:'http://localhost/projects/uaa/c3/upn/nexus/niches/category/view', method:'GET' }, 
        (cacheData, apiResponse)=>{
            console.log("apiResponse: ", apiResponse);
        },(error)=>{ console.log(error); }); */
 },[]);
 return (<div>
    <ContainerFluid>
        <Row>
            {apiResponseData?.map((r,i)=>{
                const enTitle = r?.["en_cat_name"];
                const enDesc = r?.["en_cat_desc"];
                const hiTitle = r?.["hi_cat_name"];
                const hiDesc = r?.["hi_cat_desc"];
                return (<Col md={6}>
                    <div className="mbot15p">
                    <Card padding={15}>
                        <div style={{ minHeight:'510px' }}>
                        <div><Badge type="primary-o" label={<b>{r?.["cat_id"]}</b>} size="12" style={{ marginRight:'5px' }} /></div>
                        <Row>
                            <Col md={6}>
                                <div className="mtop5p"><h5><b>{enTitle} [{enDesc?.length} /1000]</b></h5></div>
                                <div className="mtop15p">{enDesc}</div>
                            </Col>
                            <Col md={6}>
                                <div className="mtop5p"><h5><b>{hiTitle} [{hiDesc?.length} /1000]</b></h5></div>
                                <div className="mtop15p">{hiDesc}</div>
                            </Col>
                        </Row>
                        </div>
                    </Card>
                    </div>
                </Col>);
            })}
        </Row>
    </ContainerFluid>
 </div>);
};

export default ViewCategories;