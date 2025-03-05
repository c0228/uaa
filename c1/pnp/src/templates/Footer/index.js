import React from "react";
import { Row, Col } from "e-ui-react";
import './index.css';

const Footer = () =>{
 return (<div className="bis-footer">
    <Row>
       <Col md={12}>
        <div align="center" className="fs11">
          Copyright &#169; 2024 | All Rights Reserved | www.petsandpawskennels.com
        </div>
       </Col>
    </Row>
  </div>);
};

export default Footer;