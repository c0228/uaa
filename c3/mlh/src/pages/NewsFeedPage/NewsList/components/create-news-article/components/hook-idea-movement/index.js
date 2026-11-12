import React from "react";
import { Row, Col } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";

const HookIdeaMovement = () =>{
 return (<div style={{ padding:'15px', border:'1px solid #dee2e6', backgroundColor:'#f9f9f9', marginBottom:'25px' }}>
    <Row>
        <Col md={12}>
            <NewsPropertyTag type="ideas" />
            <NewsPropertyTag type="social_movements" />
        </Col>
    </Row>
 </div>);
};

export default HookIdeaMovement;