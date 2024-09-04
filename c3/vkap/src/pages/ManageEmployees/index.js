import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Button, Icon, Modal } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import AddEmployeeForm from './components/add-employees/index.js';
import UpdateEmployeeForm from './components/update-employees/index.js';
import ViewEmployees from "./components/view-employees/index.js";

const ManageEmployees = ()=>{
 const [ showAddModal, setShowAddModal ] = useState(false);
 useEffect(()=>{
  document.title = 'Manage Employees | VKAbroad';
  document.body.style.backgroundColor = "#fcfcfc";
 },[]);
 const HeaderTitle = ({ title }) =>{
  return (<div style={{ display:'flex', flexDirection:'row', marginBottom:'5px', borderBottom:'1px solid #ccc' }}>
    <div style={{ width:'60%' }}><h4><b>{title}</b></h4></div>
    <div align="right" style={{ width:'40%' }}>
        <Button type="primary" size={11} onClick={()=>setShowAddModal(true)}>
          <Icon type="FontAwesome" name="fa-plus-circle" size={13} />
          <span style={{ marginLeft:'5px' }}><b>Add New Employee Account</b></span>
        </Button>
    </div>
  </div>);
 };
 return (<>
 {showAddModal && (<Modal title="Add New Employee" show={showAddModal} onClose={setShowAddModal}>
  <AddEmployeeForm />
 </Modal>)}
 <Header menulinks={HeaderMenu()} activeId="ManageEmployees" />
 <ContainerFluid>
    <Row>
      <Col md={12}>
        <HeaderTitle title="Manage Employees" />
        <ViewEmployees />
      </Col>
    </Row>
 </ContainerFluid>
 <Footer />
 </>);
};

export default ManageEmployees;