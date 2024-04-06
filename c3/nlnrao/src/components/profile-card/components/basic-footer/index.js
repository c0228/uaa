import React, { useContext } from "react";
import { Row, Col, Icon, Button } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";

const BasicFooter = () =>{
  const { updateResumeStatus } = useContext(ProfileContext);
    return (<>
    <Row>
      <Col all={6}>
      <div align="left" className="mtop10p" style={{ paddingLeft:'5px', color:'#555', fontSize:'14px' }}>
          <Icon type="FontAwesome" name="fa-map-marker" size={16} style={{ color:'red', marginRight:'5px' }} />
          <span className="mLeft5p"><b>Hyderabad, India</b></span>
      </div>
      </Col>
      <Col all={6}>
          <div align="right">
              <Button type="outline-primary" style={{ marginTop:'6px', marginRight:'5px' }}
               label={<>
                  <b>Explore more</b>
                  <Icon type="FontAwesome" name="fa-arrow-right" size={13} style={{ marginLeft:'8px' }} />
                  </>} size={12}
                  onClick={()=>updateResumeStatus('open')}/>
          </div>
      </Col>
  </Row>
  </>);
};

export default BasicFooter;