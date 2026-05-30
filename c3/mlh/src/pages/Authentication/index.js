import React, { useState } from "react";
import { ContainerFluid, Row, Col, getSubRoute } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import Login from "./components/login/index.js";
import Register from "./components/register/index.js";
import ForgotPwd from "./components/forgotPwd/index.js";
import ChangePwd from "./components/changePwd/index.js";
import './index.css';

const Authentication = ()=>{
 const show = getSubRoute(4);
 const userInfo = getSubRoute(5);
 const [showForgotPwd, setShowForgotPwd ] = useState(false);
 return (<>
  <nav className="navbar navbar-expand-sm">
 <div className="container-fluid mtop5p">
 <a className="navbar-brand" href="#">
   <img src={process.env.PROJECT_URL+"assets/logo/logo-black-blue.png"} style={{ marginTop:'-15px', width: '135px', height:'auto' }}/>
 </a>
 </div>
 </nav>
 <div align="center" style={{ padding:'15px', backgroundColor:'#065fc5', color:'#fff', textTransform:'uppercase', letterSpacing:'0.9px', }}>
   <b>Your link to local Democracy through Participation in Decisions that matters</b>
 </div>
 {show === 'authentication' && (<>
      <ContainerFluid>
      <Row>
       <Col xxl={6} xl={6} style={{ backgroundColor:'#fff', paddingTop:'2%', paddingLeft:'12%', paddingRight:'12%' }}>
          <Register />
       </Col>
       <Col xxl={6} xl={6} style={{ backgroundColor:'#fff', paddingTop:'2%', paddingLeft:'12%', paddingRight:'12%' }}>
         {showForgotPwd?<ForgotPwd setShowForgotPwd={setShowForgotPwd} />:<Login setShowForgotPwd={setShowForgotPwd} />}  
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
 </>);
};

export default Authentication;