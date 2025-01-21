import React, { useContext } from "react";
import { Row, Col, Icon, Button } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";

const BasicFooter = () =>{
  const { updateResumeStatus } = useContext(ProfileContext);
    return (<>
    <Row>
      <Col all={12}>
          <div align="right">
              <Button type="outline-dark" style={{ marginTop:'6px', marginRight:'5px' }} size={12}
                onClick={()=>updateResumeStatus('open')}>
                  <b>Explore more</b>
                  <Icon type="FontAwesome" name="fa-arrow-right" size={13} style={{ marginLeft:'8px' }} />
              </Button>
          </div>
      </Col>
  </Row>
  </>);
};

export default BasicFooter;