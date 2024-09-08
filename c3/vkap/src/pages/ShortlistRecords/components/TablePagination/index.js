import React from 'react';
import { ContainerFluid, Row, Col, Card, Accordian } from 'e-ui-react';

const TablePagination = () =>{
 const totalRecords = 1001;
 const viewRecords = 100;
 const totalPages =  Math.ceil(totalRecords/viewRecords);
 const Details = () =>{
  return (<ContainerFluid>
    <Row>
        <Col md={6}>
        
        </Col>
    </Row>
  </ContainerFluid>);
 };
 return (<div>
    {/*<div>totalRecords: {totalRecords}</div>
    <div>viewRecords: {viewRecords}</div>
    <div>totalPages: {totalPages}</div>*/}
    <ContainerFluid>
    <Row>
        <Col md={6}>
            <Card padding={15}>
              <Details />
            </Card>
        </Col>
    </Row>
    </ContainerFluid>
 </div>);
};

export default TablePagination;