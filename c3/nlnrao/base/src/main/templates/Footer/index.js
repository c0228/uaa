import React from "react";
import { Row, Col } from "e-ui-react";
import './index.css';

const Footer = () =>{
 return (<div className="app-blog-footer">
    <Row>
       <Col md={12}>
       <div align="center" style={{ fontSize:'11px' }}>
          Copyright &#169; 2021 - 2024 | All Rights Reserved | nellutlalnrao.com
       </div>
       </Col>
    </Row>
  </div>);
};

export default Footer;