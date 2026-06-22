import React, { useState } from "react";
import { ContainerFluid, Row, Col, Card, Modal, Icon, TextBox, TextArea, Button } from "e-ui-react";

const AddNewCategory = () =>{
 const [showModal, setShowModal] = useState(false);
  const Form = ({ langId, lang }) =>{
     return (<div>
         <Card padding={15}>
             <div style={{ padding:'8px', backgroundColor:'#ddd', }}><b>{lang} Version</b></div>
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

 return (<div>
  <Modal title="Add New Category" width="90%" show={showModal} onClose={setShowModal}>
    <div className="mtop15p mbot15p">
     <ContainerFluid>
        <Row>
             {[{ id:'en', lang:'English' },
              { id:'hi', lang:'Hindi' }]?.map((d,i)=>{
                 return (<Col key={i} md={6}>
                     <Form langId={d?.id} lang={d?.lang} />
                 </Col>);
             })}
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