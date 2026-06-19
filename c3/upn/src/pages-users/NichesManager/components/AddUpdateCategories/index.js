import React from "react";
import { ContainerFluid, Row, Col, Card, TextBox, TextArea, Button } from "e-ui-react";

const AddUpdateCategories = ({ mode }) =>{
  const Form = ({ langId, lang }) =>{
     return (<div>
         <Card padding={15}>
             <div style={{ padding:'8px', backgroundColor:'#ddd', }}><b>{lang} Version</b></div>
             <div className="pad15p">
                 <div>
                     <TextBox name={mode+"_"+langId+"_categoryName"} label="Category Name" placeholder="Enter New Category" />
                 </div>
                 <div className="mtop15p">
                     <TextArea name={mode+"_"+langId+"_categoryDesc"} label="Category Desc" placeholder="Enter Category Description" lines={5} />
                 </div>
             </div>
         </Card>
     </div>);
  };
 return (<div className="mtop15p mbot15p">
     <ContainerFluid>
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
                     <Button type="primary" size={11}><b>{mode==='add'?'Add New Category':'Update Existing Category'}</b></Button>
                     <Button type="danger" size={11} style={{ marginLeft:'8px' }}><b>Reset</b></Button>
                 </div>
             </Col>
         </Row>
     </ContainerFluid>
  </div>);
};

export default AddUpdateCategories;