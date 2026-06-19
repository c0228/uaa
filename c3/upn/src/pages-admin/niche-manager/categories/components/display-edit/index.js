import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, TextBox, TextArea, Button } from "e-ui-react";

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

 export default DisplayEdit;