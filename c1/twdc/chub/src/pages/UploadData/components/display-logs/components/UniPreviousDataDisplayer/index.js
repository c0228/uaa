import React from "react";
import { Card, Row, Col, searchTableTerm } from "e-ui-react";

const UniPreviousDataDisplayer = ({ data, searchTerm }) =>{
    const ExamResults = ({ name }) =>{
        return (<div style={{ marginTop:'15px', borderRadius:'8px', border:'1px dashed #ccc', padding:'15px' }}>
            <Row>
                <Col md={12}>
                <div align="center" style={{  marginBottom:'15px', textTransform:'uppercase' }}><b>{name} EXAMINATION</b></div>
            </Col>
            </Row>
            <Row>
                <Col md={3}><b>Reading :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_r"],searchTerm)}</Col>
                <Col md={3}><b>Listening :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_l"],searchTerm)}</Col>
                <Col md={3}><b>Writing :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_w"],searchTerm)}</Col>
                <Col md={3}><b>Speaking :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_s"],searchTerm)}</Col>
            </Row>
            <div style={{ backgroundColor:'#ccc', paddingTop:'5px', paddingBottom:'5px',
                marginTop:'5px' }}>
            <Row>
                <Col md={3}></Col><Col md={3}></Col>
                <Col md={3}><b>OverallScore :</b></Col> <Col md={3}>{searchTableTerm(data?.[name+"_o"],searchTerm)}</Col>
            </Row>
            </div>
            </div>);
      };
      return (<div align="left">
      <Card padding={15}>
        <div style={{ paddingLeft:'5px' }}>
        <Row><Col md={4}><b>University Id :</b></Col> <Col md={8}>{searchTableTerm(data?.["universityId"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>University Name :</b></Col> <Col md={8}>{searchTableTerm(data?.["university"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Location :</b></Col> <Col md={8}>{searchTableTerm(data?.["location"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Country :</b></Col> <Col md={8}>{searchTableTerm(data?.["country"],searchTerm)}</Col></Row>
        </div>
        <ExamResults name="toefl" />
        <ExamResults name="pte" />
        <ExamResults name="ielts" />
        <div align="left" style={{ paddingLeft:'5px', marginTop:'15px' }}>
        <Row>
            <Col md={4}><b>Duolingo Score :</b></Col> <Col md={2}>{searchTableTerm(data?.["duolingo"],searchTerm)}</Col>
            <Col md={3}><b>GRE Score :</b></Col> <Col md={3}>{searchTableTerm(data?.["gre"],searchTerm)}</Col>
        </Row>
        <Row>
            <Col md={4}><b>GPA Score :</b></Col> <Col md={3}>{searchTableTerm(data?.["gpa"],searchTerm)}</Col>
        </Row>
        </div>
      </Card>
      </div>);
};

export default UniPreviousDataDisplayer;