import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Pill, Colors  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import BasicDetails from './components/basic-details/index.js';
import ChangePwd from './components/change-pwd/index.js';

const MyProfile = ()=>{
 const HeaderTitle = () =>{
  return (<div><h4 style={{ paddingBottom:'5px', borderBottom:'1px solid #ccc' }}><b>My Profile</b></h4></div>);
 };
 return (<div>
  <Header menulinks={HeaderMenu()} />
  <ContainerFluid>
    <Row>
        <Col md={12}><HeaderTitle /></Col>
    </Row>
    <Row>
        <Col md={12}>
            <Pill mode="vertical" 
                layout={{
                    menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
                    content:{  xs:'10', sm:'10', md:'6', lg:'6', xl:'6', xxl:'6' }
                }}
                menulinks={[
                    { id:'basic-details', url:'#', label:'Basic Details', content:(<BasicDetails />) },
                    { id:'change-pwd', url:'#', label:'Change Password', content:(<ChangePwd />) }]} 
                activeId="basic-details" 
                colorConfig={{
                    active: { color: Colors.light, backgroundColor: '#dc3545' },
                    default: { color: Colors.secondary, backgroundColor: '' }
                }} />
        </Col>
    </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default MyProfile;