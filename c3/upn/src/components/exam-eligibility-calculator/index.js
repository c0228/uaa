import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ContainerFluid, Row, Col, Form } from "e-ui-react";
import Element from "./elements.js";
import { EligibilityData } from "./data.js";

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
 const menuHandler = (index) =>{
    setActiveMenuId(index);
 };
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  

    }
 };
 const FormLeftMenu = ({ menuList, activeMenuId }) =>{
    return (<ul className="nav nav-pills flex-column">
    {menuList?.map((e,i)=>{
        return (<li key={i} className="nav-item" onClick={()=>menuHandler(i)}>
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
                {console.log("menuList?.[activeMenuId]?.id: ", menuList?.[activeMenuId]?.id)}
                <div><h5><b>{activeMenuId+1}. {menuList?.[activeMenuId]?.label}</b></h5><hr/></div>
                {menuList?.[activeMenuId]?.id && (<Form name={menuList?.[activeMenuId]?.id}  
                    btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
                    btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
                    onSubmit={NextHandler}>
                <div className="row">
                {EligibilityData?.data?.[activeMenuId]?.list?.map((d,i)=>{
                    return (<Element key={i} params={d} />);    
                })}
                </div>
                </Form>)}
            </Col>
        </Row>
    </ContainerFluid>
 </Card>
 </div>);
};

export default ExamEligibilityCalculator;