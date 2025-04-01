import React from "react";
import { Row, Col } from "e-ui-react";

const BlogListHeader =  ({ label })=>{
 return (<Row>
  <Col all={12}>
    <div className="mtop15p mbot15p">
      <div className="list-header">{label}</div>
    </div>
  </Col>
 </Row>);
};

export default BlogListHeader;