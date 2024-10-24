import React from "react";
import { Card, Row, Col, searchTableTerm } from "e-ui-react";

const CourseCurrentDataDisplayer = ({ data, searchTerm }) =>{
    return (<div align="left">
    <Card padding={15}>
      <Row><Col md={4}><b>Course Id :</b></Col> <Col md={8}>{searchTableTerm(data?.["Course Id"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Course Name :</b></Col> <Col md={8}>{searchTableTerm(data?.["Course Name"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>University Id :</b></Col> <Col md={8}>{searchTableTerm(data?.["University Id"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Duration :</b></Col> <Col md={8}>{searchTableTerm(data?.["Duration"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Fees :</b></Col> <Col md={8}>{searchTableTerm(data?.["Fees"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Leaving Expenses :</b></Col> <Col md={8}>{searchTableTerm(data?.["Leaving Expenses"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Initial Deposit :</b></Col> <Col md={8}>{searchTableTerm(data?.["Initial Deposit"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Application Fees :</b></Col> <Col md={8}>{searchTableTerm(data?.["Application Fees"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Deadline :</b></Col> <Col md={8}>{searchTableTerm(data?.["Deadline"], searchTerm)}</Col></Row>
      <Row><Col md={4}><b>Course URL :</b></Col> <Col md={8}>{searchTableTerm(data?.["Course URL"], searchTerm)}</Col></Row>
    </Card>
    </div>);
};

export default CourseCurrentDataDisplayer
  