import React from "react";
import { Card, ContainerFluid, Row, Col, TextBox } from "e-ui-react";

const PursuingDetails = () =>{
 const SubHeaderTitle = ({ title }) =>{
  return (<div align="center" style={{ textTransform:'uppercase', paddingBottom:'15px' }}>
    <b>{title}</b>
  </div>);
 };
 const TOEFLForm = () =>{
  return (<div>
    <SubHeaderTitle title="TOEFL Examination Details" />
    <Row>
     <Col md={2}>
      <TextBox name="TOEFL_Reading" label="Reading" placeholder="0" />
     </Col>
     <Col md={2}>
      <TextBox name="TOEFL_Writing" label="Writing" placeholder="0" />
     </Col>
     <Col md={2}>
      <TextBox name="TOEFL_Listening" label="Listening" placeholder="0" />
     </Col>
     <Col md={2}>
      <TextBox name="TOEFL_Speaking" label="Speaking" placeholder="0" />
     </Col>
     <Col md={4}>
      <TextBox name="TOEFL_Overall" label="Overall Score" placeholder="0" />
     </Col>
    </Row>
  </div>);
 };
 const IELTSForm = () =>{
    return (<div>
      <SubHeaderTitle title="IELTS Examination Details" />
      <Row>
       <Col md={2}>
        <TextBox name="IELTS_Reading" label="Reading" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="IELTS_Writing" label="Writing" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="IELTS_Listening" label="Listening" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="IELTS_Speaking" label="Speaking" placeholder="0" />
       </Col>
       <Col md={4}>
        <TextBox name="IELTS_Overall" label="Overall Score" placeholder="0" />
       </Col>
      </Row>
    </div>);
 };
 const PTEForm = () =>{
    return (<div>
      <SubHeaderTitle title="PTE Examination Details" />
      <Row>
       <Col md={2}>
        <TextBox name="PTE_Reading" label="Reading" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="PTE_Writing" label="Writing" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="PTE_Listening" label="Listening" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="PTE_Speaking" label="Speaking" placeholder="0" />
       </Col>
       <Col md={4}>
        <TextBox name="PTE_Overall" label="Overall Score" placeholder="0" />
       </Col>
      </Row>
    </div>);
 };
 return (<ContainerFluid>
    <Row>
        <Col md={6}>
         <div className="mbot15p">
          <Card padding={15} backgroundColor="#f1f1f1"><TOEFLForm /></Card>
         </div>
        </Col>
        <Col md={6}>
         <div className="mbot15p">
         <Card padding={15} backgroundColor="#f1f1f1"><IELTSForm /></Card>
         </div>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
         <Card padding={15} backgroundColor="#f1f1f1">
            <PTEForm />
         </Card>
        </Col>
        <Col md={3}>
         <Card padding={15} backgroundColor="#f1f1f1">
            <SubHeaderTitle title="Duolingo Examination Details" />
            <Row>
             <Col md={12}>
                <TextBox name="Duolingo_Overall" label="Overall Score" placeholder="0" />
             </Col>
            </Row>
         </Card>
        </Col>
        <Col md={3}>
         <Card padding={15} backgroundColor="#f1f1f1">
            <SubHeaderTitle title="GRE Examination Details" />
            <Row>
             <Col md={12}>
                <TextBox name="GRE_Overall" label="Overall Score" placeholder="0" />
             </Col>
            </Row>
         </Card>
        </Col>
    </Row>
  </ContainerFluid>);
};

export default PursuingDetails;