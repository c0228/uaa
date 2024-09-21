import React from "react";
import { Card, Row, Col, searchTableTerm } from "e-ui-react";

const CoursePreviousDataDisplayer = ({ data, searchTerm }) =>{
    return (<div align="left">
    <Card padding={15}>
        <Row><Col md={4}><b>Course Id :</b></Col> <Col md={8}>{searchTableTerm(data?.["courseId"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Course Name :</b></Col> <Col md={8}>{searchTableTerm(data?.["course"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>University Id :</b></Col> <Col md={8}>{searchTableTerm(data?.["universityId"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Duration :</b></Col> <Col md={8}>{searchTableTerm(data?.["duration"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Fees :</b></Col> <Col md={8}>{searchTableTerm(data?.["fees"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Leaving Expenses :</b></Col> <Col md={8}>{searchTableTerm(data?.["leavingExpenses"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Initial Deposit :</b></Col> <Col md={8}>{searchTableTerm(data?.["initDeposit"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Application Fees :</b></Col> <Col md={8}>{searchTableTerm(data?.["appFees"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Deadline :</b></Col> <Col md={8}>{searchTableTerm(data?.["deadline"],searchTerm)}</Col></Row>
        <Row><Col md={4}><b>Course URL :</b></Col> <Col md={8}>{searchTableTerm(data?.["courseURL"],searchTerm)}</Col></Row> 
      </Card>
      </div>);
};

export default CoursePreviousDataDisplayer;