import React, { useContext } from "react";
import { ContainerFluid, Row, Col, Icon, Button } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";

const Resume = () =>{
 const { showResume, setShowResume } = useContext(ProfileContext);
 return (<div className="resume-overlay" style={{ width: showResume }}>
 <ContainerFluid style={{ marginTop:'15px', marginBottom:'15px' }}>
     <Row>
         <Col xxl={3} xl={3} lg={3} sm={3}>
             <Button type="outline-light" label={<>
                     <Icon type="FontAwesome" name="fa-arrow-left" size={13} style={{ marginRight:'5px' }} />
                     <b>Go Back</b>
                     </>} size={12}
                     onClick={()=>setShowResume('0%')} />
         </Col>
     </Row>
 </ContainerFluid>
</div>);
};

export default Resume;