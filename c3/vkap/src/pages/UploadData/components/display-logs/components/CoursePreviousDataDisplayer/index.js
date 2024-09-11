import React from "react";
import { Card, Row, Col } from "e-ui-react";

const CoursePreviousDataDisplayer = ({ data }) =>{
    return (<Card padding={15}>
        <Row>
        <Col md={3}><b>Course Id :</b></Col> <Col md={3}>{data?.["courseId"]}</Col>
        <Col md={3}><b>Course Name :</b></Col> <Col md={3}>{data?.["course"]}</Col>
        <Col md={3}><b>University Id :</b></Col> <Col md={3}>{data?.["universityId"]}</Col>
        <Col md={3}><b>Duration :</b></Col> <Col md={3}>{data?.["duration"]}</Col>
        <Col md={3}><b>Fees :</b></Col> <Col md={3}>{data?.["fees"]}</Col>
        <Col md={3}><b>Leaving Expenses :</b></Col> <Col md={3}>{data?.["leavingExpenses"]}</Col>
        <Col md={3}><b>Initial Deposit :</b></Col> <Col md={3}>{data?.["initDeposit"]}</Col>
        <Col md={3}><b>Application Fees :</b></Col> <Col md={3}>{data?.["appFees"]}</Col>
        <Col md={3}><b>Deadline :</b></Col> <Col md={3}>{data?.["deadline"]}</Col>
        <Col md={3}><b>Course URL :</b></Col> <Col md={3}>{data?.["courseURL"]}</Col>
        </Row>
      </Card>);
};

export default CoursePreviousDataDisplayer;