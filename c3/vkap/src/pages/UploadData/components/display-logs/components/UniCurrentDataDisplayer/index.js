import React, { useEffect } from "react";
import { Card, Row, Col, searchTableTerm } from "e-ui-react";

const UniCurrentDataDisplayer = ({ data, searchTerm }) =>{
    useEffect(()=>{ console.log("data[UniCurrentDataDisplayer]: ", data); },[data]);
    const ExamResults = ({ name }) =>{
      return (<div style={{ marginTop:'15px', borderRadius:'8px', border:'1px dashed #ccc', padding:'15px' }}>
          <Row>
              <Col md={12}>
              <div align="center" style={{  marginBottom:'15px', textTransform:'uppercase' }}><b>{name} EXAMINATION</b></div>
          </Col>
          </Row>
          <Row>
              <Col md={3}><b>Reading :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_Reading"],searchTerm)}</Col>
              <Col md={3}><b>Listening :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_Listening"],searchTerm)}</Col>
              <Col md={3}><b>Writing :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_Writing"],searchTerm)}</Col>
              <Col md={3}><b>Speaking :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_Speaking"],searchTerm)}</Col>
          </Row>
          <div style={{ backgroundColor:'#ccc', paddingTop:'5px', paddingBottom:'5px',
              marginTop:'5px' }}>
          <Row>
              <Col md={3}></Col><Col md={3}></Col>
              <Col md={3}><b>OverallScore :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_OverallScore"],searchTerm)}</Col>
          </Row>
          </div>
          </div>);
    };
    return (<div align="left">
        <Card padding={15}>
          <div style={{ paddingLeft:'5px' }}>
          <Row><Col md={4}><b>University Id :</b></Col> <Col md={8}>{searchTableTerm(data?.["University Id"],searchTerm)}</Col></Row>
          <Row><Col md={4}><b>University Name :</b></Col> <Col md={8}>{searchTableTerm(data?.["University Name"],searchTerm)}</Col></Row>
          <Row><Col md={4}><b>Location :</b></Col> <Col md={8}>{searchTableTerm(data?.["Location"],searchTerm)}</Col></Row>
          <Row><Col md={4}><b>Country :</b></Col> <Col md={8}>{searchTableTerm(data?.["Country"],searchTerm)}</Col></Row>
          </div>
          <ExamResults name="TOEFL" />
          <ExamResults name="PTE" />
          <ExamResults name="IELTS" />
          <div align="left" style={{ paddingLeft:'5px', marginTop:'15px' }}>
          <Row>
              <Col md={4}><b>Duolingo Score :</b></Col> <Col md={2}>{searchTableTerm(data?.["Duolingo"],searchTerm)}</Col>
              <Col md={3}><b>GRE Score :</b></Col> <Col md={3}>{searchTableTerm(data?.["GRE"],searchTerm)}</Col>
          </Row>
          <Row>
              <Col md={4}><b>GPA Score :</b></Col> <Col md={3}>{searchTableTerm(data?.["GPA"],searchTerm)}</Col>
          </Row>
          </div>
        </Card>
        </div>);
};

export default UniCurrentDataDisplayer;

