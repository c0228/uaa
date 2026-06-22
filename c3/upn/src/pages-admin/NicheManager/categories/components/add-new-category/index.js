import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Modal, Icon, TextBox, TextArea, Button } from "e-ui-react";

const AddNewCategory = () =>{
 const [showModal, setShowModal] = useState(false);
  const Form = ({ langId, lang }) =>{
     return (<div>
         <Card padding={15}>
             <div style={{ padding:'8px', backgroundColor:'#ddd', }}>
              <Icon type="FontAwesome" name="fa-language" size={16} style={{ marginRight:'5px' }} />
              <b>{lang} Version</b>
              </div>
             <div className="pad15p">
                 <div>
                     <TextBox name={"add_"+langId+"_categoryName"} label="Category Name" placeholder="Enter New Category" />
                 </div>
                 <div className="mtop15p">
                     <TextArea name={"add_"+langId+"_categoryDesc"} lines={12} 
                      label="Category Desc" placeholder="Enter Category Description" />
                 </div>
             </div>
         </Card>
     </div>);
  };
 const initialState = {
    id: "",
    icon:"fa-cube",
    enTitle: "",
    enDesc: "",
    hiTitle: "",
    hiDesc: ""
 };
 const [formData, setFormData] = useState(initialState);
 useEffect(()=>setFormData(initialState),[]);
 const handleReset = () =>{
  setFormData(initialState);
 };
 const handleSave = async() =>{

 };
 return (<div>
  <Modal title="Add New Category" width="90%" show={showModal} onClose={setShowModal}>
    <div style={{  maxHeight:'500px', overflowY:'auto' }}>
     <ContainerFluid>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="mtop15p mbot15p">
              <div align="center" className="mbot15p">
                <Icon type="FontAwesome" name={formData?.icon} size={32} 
                  style={{ borderRadius:'12px', border:'1px solid #ccc', padding:'25px' }} />
              </div>
              <TextBox name="add_categoryIcon" placeholder="Enter Category Icon [Font-Awesome Icon 4.7.0]" 
                onChange={(d) => setFormData(prev => ({ ...prev, icon: d.value }))} />
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
             {[{ id:'en', lang:'English' },
              { id:'hi', lang:'Hindi' }]?.map((d,i)=>{
                 return (<Col key={i} md={6}>
                     <Form langId={d?.id} lang={d?.lang} />
                 </Col>);
             })}
        </Row>
        <Row>
          <Col md={12}>
            <div align="center" className="mtop15p">
                <Button type="success" size={11} style={{ marginRight: "5px" }} onClick={handleSave}>
                  <Icon type="FontAwesome" name="fa-save" size={11} style={{ marginRight:'5px' }} />
                  <b>Save</b>
                </Button>
                <Button type="warning" size={11} style={{ marginRight: "5px" }} onClick={handleReset}>
                  <Icon type="FontAwesome" name="fa-refresh" size={11} style={{ marginRight:'5px' }} />
                  <b>Reset</b>
                </Button>
            </div>
          </Col>
        </Row>
     </ContainerFluid>
    </div>
  </Modal>
  <div align="right" className="mbot5p">
    <Button type="outline-dark" size={11} onClick={()=>setShowModal(true)}>
        <Icon type="FontAwesome" name="fa-plus-circle" size={11} style={{ marginRight:'8px' }}  />
        <b>Add New Category</b>
    </Button>
  </div>
 </div>);
};

export default AddNewCategory;