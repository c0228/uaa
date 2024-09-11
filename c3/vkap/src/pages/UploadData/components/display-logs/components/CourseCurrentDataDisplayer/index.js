import React from "react";
import { Card, Row, Col } from "e-ui-react";

const CourseCurrentDataDisplayer = ({ data }) =>{
    return (<Card padding={15}>
      <Row>
      <Col md={3}><b>Course Id :</b></Col> <Col md={3}>{data?.["Course Id"]}</Col>
      <Col md={3}><b>Course Name :</b></Col> <Col md={3}>{data?.["Course Name"]}</Col>
      <Col md={3}><b>University Id :</b></Col> <Col md={3}>{data?.["University Id"]}</Col>
      <Col md={3}><b>Duration :</b></Col> <Col md={3}>{data?.["Duration"]}</Col>
      <Col md={3}><b>Fees :</b></Col> <Col md={3}>{data?.["Fees"]}</Col>
      <Col md={3}><b>Leaving Expenses :</b></Col> <Col md={3}>{data?.["Leaving Expenses"]}</Col>
      <Col md={3}><b>Initial Deposit :</b></Col> <Col md={3}>{data?.["Initial Deposit"]}</Col>
      <Col md={3}><b>Application Fees :</b></Col> <Col md={3}>{data?.["Application Fees"]}</Col>
      <Col md={3}><b>Deadline :</b></Col> <Col md={3}>{data?.["Deadline"]}</Col>
      <Col md={3}><b>Course URL :</b></Col> <Col md={3}>{data?.["Course URL"]}</Col>
      </Row>
    </Card>);
};

export default CourseCurrentDataDisplayer
  