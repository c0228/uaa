import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ContainerFluid, Row, Col } from "e-ui-react";
import EligibilityData from "./data.js";

const ExamEligibilityCalculator = () =>{
 const [menuList, setMenuList] = useState([]);
 const [activeMenuId, setActiveMenuId] = useState();
 const { lang } = useParams();
 const activeId = 'personalInfo';
 const initialize = () =>{
    const leftMenu = [];
    EligibilityData?.data?.map((e,i)=>{
        leftMenu.push({ id: e?.id, label: e?.[lang+'Label'] });
    });
    setMenuList(leftMenu);
    setActiveMenuId(0);
 };
 useEffect(()=>{
    initialize();
 },[]);
 const FormLeftMenu = ({ menuList, activeMenuId }) =>{
    return (<ul className="nav nav-pills flex-column">
    {menuList?.map((e,i)=>{
        return (<li key={i} className="nav-item" onClick={()=>menuHandler(id)}>
            <a className={(activeMenuId===i)?"nav-link active":"nav-link"} href="#upsc-eligibility-calculator"><b>{i+1}. {e?.label}</b></a>
        </li>);
    })}
 </ul>);
 };
 return (<div className="mtop15p">
 <Card padding={15} backgroundColor="#fde2e2">
     <div><h1 className="fw-bold" style={{ fontSize:'22px' }}>{EligibilityData?.[lang+'Title']}</h1></div>
     <div><p>{EligibilityData?.[lang+'Desc']}</p></div>
    <ContainerFluid>
        <Row>
            <Col md={4}>
                <FormLeftMenu menuList={menuList} activeMenuId={activeMenuId} />
            </Col>
            <Col md={8}>
                <div><h5><b>1. {menuList?.[activeMenuId]?.label}</b></h5><hr/></div>
                
            </Col>
        </Row>
    </ContainerFluid>
 </Card>
 </div>);
};

export default ExamEligibilityCalculator;