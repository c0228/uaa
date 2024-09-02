import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Button } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const ManageEmployees = ()=>{
 useEffect(()=>{
  document.title = 'Manage Employees | VKAbroad';
  document.body.style.backgroundColor = "#fcfcfc";
 },[]);
 const HeaderTitle = ({ title }) =>{
  return (<div style={{ display:'flex', flexDirection:'row', marginBottom:'5px', borderBottom:'1px solid #ccc' }}>
    <div style={{ width:'60%' }}><h4><b>{title}</b></h4></div>
    <div align="right" style={{ width:'40%' }}>
        <Button type="primary" label="Add New Employee Account" size={11} />
    </div>
  </div>);
 };
 return (<>
 <Header menulinks={HeaderMenu()} activeId="ManageEmployees" />
 <ContainerFluid>
    <Row>
      <Col md={12}>
        <HeaderTitle title="Manage Employees" />
        <div className="table-responsive">
         <table className="table">
          <thead>
            <tr style={{ backgroundColor:'#eee' }}>
                <td><b>#</b></td>
                <td><b>Employee ID</b></td>
                <td><b>Employee Name</b></td>
                <td><b>Account Type</b></td>
                <td><b>Email Address</b></td>
                <td><b>Created On</b></td>
                <td><b>Last Updated On</b></td>
                <td align="center"><b>Actions</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1.</td>
                <td>John</td>
                <td>Doe</td>
                <td>ADMINISTRATOR</td>
                <td>john@example.com</td>
                <td>2024-09-24 10:30:00</td>
                <td>2024-09-24 10:30:00</td>
                <td align="center">Doe</td>
            </tr>
          </tbody>
         </table>
        </div>
      </Col>
    </Row>
 </ContainerFluid>
 <Footer />
 </>);
};

export default ManageEmployees;