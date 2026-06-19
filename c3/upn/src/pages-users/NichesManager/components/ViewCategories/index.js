import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon, TextBox, TextArea, Button } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";

const DisplayEdit = ({ formData, setFormData }) =>{
 const [initialFormData, setInitialFormData] = useState(formData);
 const handleEdit = () =>{
    console.log("formData: ", formData);
 };
 const handleReset = () =>{
   setFormData(initialFormData);
 };
 return (<>
    <Row>
        <Col md={6}>
            <div>
                <div>
                 <TextBox name="enCatName" placeholder="Enter Category Name" value={formData?.enTitle} 
                    onChange={(data)=>{
                        setFormData({ ...formData, "enTitle": data?.value });
                    }} />
                 </div>
                <div><span className="pull-right"><b>[{formData?.enDesc?.length} / 1000]</b></span></div>
                <div className="mtop5p">
                    <TextArea name="enCatDesc" placeholder="Enter Category Desc" 
                        lines={23} value={formData?.enDesc} onChange={(data)=>{
                            setFormData({ ...formData, "enDesc": data?.value });
                        }} />
                </div>
            </div>
        </Col>
        <Col md={6}>
            <div>
                <div>
                    <TextBox name="hiCatName" placeholder="Enter Category Name" value={formData?.hiTitle} 
                        onChange={(data)=>{
                            setFormData({ ...formData, "hiTitle": data?.value });
                        }} />
                </div>
                <div><span className="pull-right"><b>[{formData?.hiDesc?.length} / 1000]</b></span></div>
                <div className="mtop5p">
                    <TextArea name="hiCatDesc" placeholder="Enter Category Desc" 
                        lines={23} value={formData?.hiDesc} onChange={(data)=>{
                            setFormData({ ...formData, "hiDesc": data?.value });
                        }} />
                </div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <div align="right" className="mtop5p">
                <Button type="success" size={11} style={{ marginRight:'5px' }} onClick={()=>handleEdit()}><b>Save</b></Button>
                <Button type="danger" size={11} onClick={()=>handleReset()}><b>Reset</b></Button>
            </div>
        </Col>
    </Row>
    </>);
 };

const ViewCategories = () =>{
 const [displayMode, setDisplayMode] = useState({ op: "view", id: "" });
 const [apiResponseData, setApiResponseData] = useState([]);
 const [formData, setFormData] = useState({ enTitle: "", enDesc: "", hiTitle: "", hiDesc: "" });
 const DisplayView = ({ title, desc }) =>{
    return (<div className="mtop5p">
        <div><b>{title}</b></div>
        <div className="mtop5p">{desc}</div>
    </div>);
 };
 useEffect(() => {
    fetch("http://localhost/projects/uaa/c3/upn/nexus/niches/category/view").then((response) => response.json())
       .then((data) => {
         console.log("apiResponse:", data);
         setApiResponseData(data);
        })
       .catch((error) => {
         console.error("API Error:", error);
       });
 }, []);
 return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
        {apiResponseData?.map((d,i)=>{
         const catId = d?.cat_id;
         const enTitle = d?.en_cat_name;
         const enDesc = d?.en_cat_desc;
         const hiTitle = d?.hi_cat_name;
         const hiDesc = d?.hi_cat_desc;
         const isEditing = displayMode.op === "edit" && displayMode.id === catId;
         return (<Col key={i} md={6}>
          <div className="mbot15p">
            <Card padding={15}>
                <div>
                    <Badge type="primary-o" label={<b>{catId}</b>} size="12" style={{ marginRight:'5px' }} />
                    <span className="pull-right" style={{ cursor:'pointer' }} 
                        onClick={()=>{
                            setDisplayMode({ op: 'edit', id: catId })
                            setFormData({ 
                                "enTitle": enTitle,
                                "enDesc": enDesc,
                                "hiTitle": hiTitle,
                                "hiDesc": hiDesc
                            })
                        }}>
                        <Icon type="FontAwesome" name="fa-edit" size={18} color="#0d6efd" />
                    </span>
                </div>
                <div className="mtop5p">
                {isEditing?(<><DisplayEdit formData={formData} setFormData={setFormData} /></>):(<div>
                    <Row>
                        <Col md={6}><DisplayView title={enTitle} desc={enDesc} /></Col>
                        <Col md={6}><DisplayView title={hiTitle} desc={hiDesc} /></Col>
                    </Row>
                </div>)}
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