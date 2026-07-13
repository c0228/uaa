import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ContainerFluid, Row, Col, Form } from "e-ui-react";
import Element from "./elements.js";
import { EligibilityData } from "./data.js";

const ExamEligibilityCalculator = () =>{
 const [formData,setFormData] = useState({});
 const [menuList, setMenuList] = useState([]);
 const [activeMenuId, setActiveMenuId] = useState();
 const { lang } = useParams();
 const activeId = 'personalInfo';

 const initialize = () =>{
    const leftMenu = [];
    let initialFormData = {};
    EligibilityData?.data?.map((e,i1)=>{
        const leftMenuId = e?.id;
        const leftMenuLabel = e?.[lang+'Label'];
        leftMenu.push({ id: e?.id, label: leftMenuLabel });
        // setDefault Values Dynamically into formData
        let listElements = {};
        e?.list?.map((l,i2)=>{
            listElements[l.id] = { value: l?.defaultValue, validationSuccess:[], errorMessage:'' };
        });
        initialFormData[leftMenuId] = listElements;
    });
    setFormData(initialFormData);
    setMenuList(leftMenu);
    setActiveMenuId(0);
 };
 useEffect(()=>{ console.log("Element Updated formData: ", formData); },[formData]);
 useEffect(()=>{ initialize(); },[]);
 const menuHandler = (index) =>{
  if(activeMenuId >= index){ setActiveMenuId(index); }
 };
 const OnFormUpdate = (form) =>{
    console.log("Element [Eligibility Calculator]: ", form);
    const formId = menuList?.[activeMenuId]?.id;
    setFormData(prev => ({
        ...prev,
        [formId]: form[formId]
    }));
 };
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        const formId = menuList?.[activeMenuId]?.id;
        const fData = form?.[formId];
        let keys = fData && Object.keys(fData);
        const exclude = ['mode'];
        let fields = keys.filter(item => !exclude.includes(item));
        let data = {};
        for(const f of fields){
           data[f] = fData[f]?.value;
        }
        setFormData(prev => ({ ...prev, [formId]: fData }));
        if(menuList?.length-1>activeMenuId){
            setActiveMenuId(activeMenuId+1);
        }
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

 const evaluateVisibility = (visibleWhen) => {
    if (!visibleWhen?.expression) { return true; }
    const parsedExpression = visibleWhen.expression.replace(/\$\{(.*?)\}/g, (_, path) => {
        const [section, field] = path.trim().split(".");
        return `(formData?.["${section}"]?.["${field}"]?.value ?? formData?.["${section}"]?.["${field}"])`;
    });
    console.log("Element [evaluateVisibility]: ", parsedExpression);
    try {
        return Function("formData", `return ${parsedExpression}`)(formData);
    } catch (e) {
        console.error(e);
        return false;
    }
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
                    onChange={OnFormUpdate}
                    onSubmit={NextHandler}>
                <div className="row">
                {EligibilityData?.data?.[activeMenuId]?.list?.map((e,i)=>{
                    console.log("Element: ", e?.visibleWhen);
                    if(evaluateVisibility(e?.visibleWhen)){
                        return (<Element key={i} params={e} />)
                    } else {
                        return null;
                    }
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