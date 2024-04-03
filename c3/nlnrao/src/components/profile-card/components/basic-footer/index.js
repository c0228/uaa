import React, { useContext } from "react";
import { Row, Col, Icon, Button } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";

const BasicFooter = () =>{
  const { setShowResume } = useContext(ProfileContext);
    return (<>
    <Row>
      <Col all={6}>
      <div align="left" className="mtop10p" style={{ color:'#555', fontSize:'14px' }}>
          <Icon type="FontAwesome" name="fa-map-marker" size={16} style={{ color:'red', marginRight:'5px' }} />
          <span className="mLeft5p"><b>Hyderabad, India</b></span>
      </div>
      </Col>
      <Col all={6}>
          <div align="right">
              <Button type="outline-primary" style={{ marginTop:'6px' }}
               label={<>
                  <b>Explore more</b>
                  <Icon type="FontAwesome" name="fa-arrow-right" size={13} style={{ marginLeft:'8px' }} />
                  </>} size={12}
                  onClick={()=>setShowResume('100%')}/>
          </div>
      </Col>
  </Row>
  </>);
};

export default BasicFooter;