import React, { useState, useEffect } from "react";
import { SideWrapperNavbar, SideWrapperPage, SideWrapperMenu, SideWrapperHeader, SideWrapperBody,
Icon, ContainerFluid, Row, Col
 } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";

const Dashboard = () =>{
 useEffect(()=>{
    document.body.style.backgroundColor='#f6f6f9';
 },[]);
 const data = [{
    "group": "Manage Niches",
    "items": [{
        "label":"Manage Categories",
        "url":""
    },{
        "label":"Manage Sub-Categories",
        "url":""
    }]
 },{
    "group": "Manage Niches",
    "items": [{
        "label":"Manage Categories",
        "url":""
    },{
        "label":"Manage Sub-Categories",
        "url":""
    }]
 }];
 const accordionHandler = () =>{

 };
 const [activeItem, setActiveItem] = useState();
 return (<div>
    <SideWrapperNavbar barTheme="outline-primary">
        <SideWrapperMenu config={{ backgroundColor: '#2a3042' }}>
            <div className="mtop15p" stle={{ fontFamily:'boxicons' }}>
            <ContainerFluid>
                <Row>
                    <Col md={12}>
                    {data?.map((d,i1)=>{
                        return (<div key={i1} style={{ marginBottom:'10px' }}>
                            <div style={{ textTransform:'uppercase', color:'#ffe083', cursor:'pointer', 
                                fontSize:'14px', fontFamily: 'MetropolisBold' }} 
                            onClick={()=>{ 
                                setActiveItem((prev) => (prev === i1 ? null : i1));
                            }}>
                            {d?.group} <span className="pull-right">
                                <Icon type="FontAwesome" name="fa-angle-double-down" size={16} />
                                </span>
                            </div>
                            <div class={(i1===activeItem)?"collapse show":"collapse"}
                                 style={{ color:'#fff', marginTop:'4px', marginBottom:'5px', paddingLeft:'5px', 
                                    fontFamily: 'MetropolisBold' }}>
                                {d?.items?.map((a,i2)=>{
                                  return (<div style={{ marginBottom:'3px', cursor:'pointer' }}>{a?.label}</div>);  
                                })}
                            </div>
                        </div>);
                    })}
                    </Col>
                </Row>
            </ContainerFluid>
            </div>
        </SideWrapperMenu>
        <SideWrapperPage>
            <SideWrapperHeader>
                        
            </SideWrapperHeader>
            <SideWrapperBody>

            </SideWrapperBody>
        </SideWrapperPage>
    </SideWrapperNavbar>
 </div>);
};

export default Dashboard;