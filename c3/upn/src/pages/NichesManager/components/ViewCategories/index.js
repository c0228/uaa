import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon, TextBox  } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";
import { callAPI } from "@Services/ApiManager.js";

const ViewCategories = () =>{
 const [displayMode, setDisplayMode] = useState('view'); // view / edit
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
                        <div>
                            <Badge type="primary-o" label={<b>{r?.["cat_id"]}</b>} size="12" style={{ marginRight:'5px' }} />
                            <div className="pull-right" style={{ cursor:'pointer' }} onClick={()=>setDisplayMode('edit')}>
                                <Icon type="FontAwesome" name="fa-edit" size={14} color={AppColors?.["primary"]?.["bg-dark"]} />
                            </div>
                        </div>
                        <Row>
                            <Col md={6}>
                                <div className="mtop5p">
                                    <h5><b>
                                        {displayMode==='view' && (<>{enTitle}</>)} 
                                        {displayMode==='edit' && (<>
                                        <TextBox name="surname" 
                                            placeholder="Enter Category Name" value={enTitle} />
                                        </>)} 
                                        <span className="pull-right">[{enDesc?.length} /1000]</span>
                                        </b></h5>
                                </div>
                                <div className="mtop15p">
                                    {displayMode==='view' && (<>{enDesc}</>)} 
                                    {displayMode==='edit' && (<>{enDesc}</>)}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mtop5p">
                                    <h5><b>
                                        {displayMode==='view' && (<>{hiTitle}</>)} 
                                        {displayMode==='edit' && (<>
                                        <TextBox name="surname" 
                                            placeholder="Enter Category Name" value={hiTitle} />
                                        </>)}
                                        <span className="pull-right">[{hiDesc?.length} /1000]</span>
                                        </b></h5></div>
                                <div className="mtop15p">
                                    {displayMode==='view' && (<>{hiDesc}</>)} 
                                    {displayMode==='edit' && (<>{hiDesc}</>)}
                                </div>
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