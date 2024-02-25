import React from "react";
import { ContainerFluid, Row, Col } from 'e-ui-react';
import Header from './../Header/index.js';
import StudentForm from './student-form/index.js';

const Students = ()=>{
 return (<>
  <Header activeMenu="students" />
  <ContainerFluid>
      <Row>
         <Col xxl={12} xl={12}>
            <StudentForm />
         </Col>
      </Row> 
  </ContainerFluid>
 </>);
};

export default Students;