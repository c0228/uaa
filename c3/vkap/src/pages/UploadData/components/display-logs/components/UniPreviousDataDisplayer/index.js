import React from "react";
import { Card, Row, Col } from "e-ui-react";

const UniPreviousDataDisplayer = ({ data }) =>{
    const ExamResults = ({ name }) =>{
        return (<div style={{ marginTop:'15px', borderRadius:'8px', border:'1px dashed #ccc', padding:'15px' }}>
            <Row>
                <Col md={12}>
                <div align="center" style={{  marginBottom:'15px', textTransform:'uppercase' }}><b>{name} EXAMINATION</b></div>
            </Col>
            </Row>
            <Row>
                <Col md={3}><b>Reading :</b></Col> <Col md={3}>{data?.[name+"_r"]}</Col>
                <Col md={3}><b>Listening :</b></Col> <Col md={3}>{data?.[name+"_l"]}</Col>
                <Col md={3}><b>Writing :</b></Col> <Col md={3}>{data?.[name+"_w"]}</Col>
                <Col md={3}><b>Speaking :</b></Col> <Col md={3}>{data?.[name+"_s"]}</Col>
            </Row>
            <div style={{ backgroundColor:'#ccc', paddingTop:'5px', paddingBottom:'5px',
                marginTop:'5px' }}>
            <Row>
                <Col md={3}></Col><Col md={3}></Col>
                <Col md={3}><b>OverallScore :</b></Col> <Col md={3}>{data?.[name+"_o"]}</Col>
            </Row>
            </div>
            </div>);
      };
      return (<Card padding={15}>
        <Row>
            <Col md={3}><b>University Id :</b></Col> <Col md={3}>{data?.["universityId"]}</Col>
            <Col md={3}><b>University Name :</b></Col> <Col md={3}>{data?.["university"]}</Col>
            <Col md={3}><b>Location :</b></Col> <Col md={3}>{data?.["location"]}</Col>
            <Col md={3}><b>Country :</b></Col> <Col md={3}>{data?.["country"]}</Col>
        </Row>
        <ExamResults name="toefl" />
        <ExamResults name="pte" />
        <ExamResults name="ielts" />
        <div style={{ marginTop:'15px' }}>
        <Row>
            <Col md={3}><b>Duolingo Score :</b></Col> <Col md={3}>{data?.["duolingo"]}</Col>
            <Col md={3}><b>GRE Score :</b></Col> <Col md={3}>{data?.["gre"]}</Col>
            <Col md={3}><b>GPA Score :</b></Col> <Col md={3}>{data?.["gpa"]}</Col>
        </Row>
        </div>
      </Card>);
};

export default UniPreviousDataDisplayer;