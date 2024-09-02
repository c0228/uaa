import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, getSubRoute } from "e-ui-react";
import Footer from '@Templates/Footer/index.js';
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
  <Footer />
 </div>);
};

export default Authentication;