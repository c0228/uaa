import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, getSubRoute } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import Login from "./components/login/index.js";
import Register from "./components/register/index.js";
import ForgotPwd from "./components/forgotPwd/index.js";
import ChangePwd from "./components/changePwd/index.js";
import './index.css';

const Authentication = ()=>{
 const [show, setShow] = useState('Authentication');
 const userInfo = getSubRoute(5);
 const [showForgotPwd, setShowForgotPwd ] = useState(false);
 useEffect(()=>{
  document.title = 'Authentication | VKAbroad';
  document.body.style.backgroundImage = "url('./assets/logo/bubbles.gif')";
 },[]);
 return (<div>
 <div align="center"><img src="./assets/logo/logo-flat.png" style={{ marginTop:'15px', width:'160px', height:'auto' }} /></div>
 {/*<Header menulinks={HeaderMenu()} activeId="Authentication" />*/}
 {show === 'Authentication' && (<>
      <ContainerFluid>
      <Row>
       <Col xxl={6} xl={6} style={{ paddingTop:'2%', paddingLeft:'12%', paddingRight:'12%' }}>
          <Card padding={15}><Register /></Card>
       </Col>
       <Col xxl={6} xl={6} style={{ paddingTop:'2%', paddingLeft:'12%', paddingRight:'12%' }}>
       <Card padding={15}>{showForgotPwd?<ForgotPwd setShowForgotPwd={setShowForgotPwd} />:
       <Login setShowForgotPwd={setShowForgotPwd} />}</Card>
       </Col> 
      </Row>
      </ContainerFluid>
      </>
   )}
   {show === 'ChangePassword' && (<>
      <ContainerFluid style={{ marginTop:'8px' }}>
      <Row>
       <Col xxl={12} xl={12} style={{ backgroundColor:'#fff' }}>
          <ChangePwd userInfo={userInfo} />
       </Col> 
      </Row>
      </ContainerFluid>
      </>
   )}
 <div className="vkac-footer">
   <Row>
      <Col md={12}>
      <div align="center" style={{ fontSize:'11px' }}>
         Copyright &#169; 2021 - 2024 | All Rights Reserved | VkAbroadConsultancy.com
      </div>
      </Col>
   </Row>
 {/*<Row>
   <Col md={7}>
      <div align="left" style={{ fontSize:'11px' }}><b>Address:</b> Flat No:310, Third Floor, M N Reddy Complex, Beside Rajadhani Theater Lane, above Central Bank of India, Dilsukhnagar, Hyderabad - 500060</div>
   </Col>
   <Col md={2}><b>Mobile:</b> +91-9948390094 </Col>
   <Col md={3}>
      <div align="right" style={{ fontSize:'11px', paddingRight:'15px' }}>&#169; VK Abroad Consultancy, 2021 - 2024</div>
   </Col>
 </Row> */}
 
 </div>
 </div>);
};

export default Authentication;