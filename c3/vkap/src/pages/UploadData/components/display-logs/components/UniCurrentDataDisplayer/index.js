import React from "react";
import { Card, Row, Col } from "e-ui-react";

const UniCurrentDataDisplayer = ({ data }) =>{
    const ExamResults = ({ name }) =>{
      return (<div style={{ marginTop:'15px', borderRadius:'8px', border:'1px dashed #ccc', padding:'15px' }}>
          <Row>
              <Col md={12}>
              <div align="center" style={{  marginBottom:'15px', textTransform:'uppercase' }}><b>{name} EXAMINATION</b></div>
          </Col>
          </Row>
          <Row>
              <Col md={3}><b>Reading :</b></Col> <Col md={3}>{data?.[name+"_Reading"]}</Col>
              <Col md={3}><b>Listening :</b></Col> <Col md={3}>{data?.[name+"_Listening"]}</Col>
              <Col md={3}><b>Writing :</b></Col> <Col md={3}>{data?.[name+"_Writing"]}</Col>
              <Col md={3}><b>Speaking :</b></Col> <Col md={3}>{data?.[name+"_Speaking"]}</Col>
          </Row>
          <div style={{ backgroundColor:'#ccc', paddingTop:'5px', paddingBottom:'5px',
              marginTop:'5px' }}>
          <Row>
              <Col md={3}></Col><Col md={3}></Col>
              <Col md={3}><b>OverallScore :</b></Col> <Col md={3}>{data?.[name+"_OverallScore"]}</Col>
          </Row>
          </div>
          </div>);
    };
    return (<Card padding={15}>
      <Row>
          <Col md={3}><b>University Id :</b></Col> <Col md={3}>{data?.["University Id"]}</Col>
          <Col md={3}><b>University Name :</b></Col> <Col md={3}>{data?.["University Name"]}</Col>
          <Col md={3}><b>Location :</b></Col> <Col md={3}>{data?.["Location"]}</Col>
          <Col md={3}><b>Country :</b></Col> <Col md={3}>{data?.["Country"]}</Col>
      </Row>
      <ExamResults name="TOEFL" />
      <ExamResults name="PTE" />
      <ExamResults name="IELTS" />
      <div style={{ marginTop:'15px' }}>
      <Row>
          <Col md={3}><b>Duolingo Score :</b></Col> <Col md={3}>{data?.["Duolingo"]}</Col>
          <Col md={3}><b>GRE Score :</b></Col> <Col md={3}>{data?.["GRE"]}</Col>
          <Col md={3}><b>GPA Score :</b></Col> <Col md={3}>{data?.["GPA"]}</Col>
      </Row>
      </div>
    </Card>);
};

export default UniCurrentDataDisplayer;

