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
      <TextBox name="toefl_r" label="Reading" placeholder="0" />
     </Col>
     <Col md={2}>
      <TextBox name="toefl_w" label="Writing" placeholder="0" />
     </Col>
     <Col md={2}>
      <TextBox name="toefl_l" label="Listening" placeholder="0" />
     </Col>
     <Col md={2}>
      <TextBox name="toefl_s" label="Speaking" placeholder="0" />
     </Col>
     <Col md={4}>
      <TextBox name="toefl_o" label="Overall Score" placeholder="0" />
     </Col>
    </Row>
  </div>);
 };
 const IELTSForm = () =>{
    return (<div>
      <SubHeaderTitle title="IELTS Examination Details" />
      <Row>
       <Col md={2}>
        <TextBox name="ielts_r" label="Reading" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="ielts_w" label="Writing" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="ielts_l" label="Listening" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="ielts_s" label="Speaking" placeholder="0" />
       </Col>
       <Col md={4}>
        <TextBox name="ielts_o" label="Overall Score" placeholder="0" />
       </Col>
      </Row>
    </div>);
 };
 const PTEForm = () =>{
    return (<div>
      <SubHeaderTitle title="PTE Examination Details" />
      <Row>
       <Col md={2}>
        <TextBox name="pte_r" label="Reading" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="pte_w" label="Writing" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="pte_l" label="Listening" placeholder="0" />
       </Col>
       <Col md={2}>
        <TextBox name="pte_s" label="Speaking" placeholder="0" />
       </Col>
       <Col md={4}>
        <TextBox name="pte_o" label="Overall Score" placeholder="0" />
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
                <TextBox name="duolingo" label="Overall Score" placeholder="0" />
             </Col>
            </Row>
         </Card>
        </Col>
        <Col md={3}>
         <Card padding={15} backgroundColor="#f1f1f1">
            <SubHeaderTitle title="GRE Examination Details" />
            <Row>
             <Col md={12}>
                <TextBox name="gre" label="Overall Score" placeholder="0" />
             </Col>
            </Row>
         </Card>
        </Col>
    </Row>
  </ContainerFluid>);
};

export default PursuingDetails;