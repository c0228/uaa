import React from "react";
import { Row, Col, Icon, Button } from "e-ui-react";
import { getNichesContext } from "@Pages/OnBoarding/SetCategories/context.js";

const NichesFooter = () =>{    
 const nichesContext = getNichesContext();
 const handleNext = () =>{
    window.location.href=process.env.PROJECT_URL+'news-feed';
 };
 return (<> 
    {(nichesContext?.contextData?.userSelected?.selectedCount>3)?(
        <div className="mlh-onboarding-footer mlh-onboarding-footer-success">
        <Row>
        <Col md={8}>
            <div align="left" style={{ padding:'8px', color:'#000' }}>
                    <b>Your interests are all set! Let's take you to your Home Page.</b>
                </div>
        </Col>
        <Col md={4}>
            <div align="right">
                    <Button type="dark" size={14} style={{ marginRight:'8px' }} onClick={handleNext}>
                        <Icon type="FontAwesome" name="fa-save" size={14} style={{ marginRight:'8px' }} />
                        <b>Save and Continue</b></Button>
                </div>
        </Col>
       </Row>
       </div>):(<div className="mlh-onboarding-footer mlh-onboarding-footer-error">
        <Row>
            <Col md={8}>
                <div align="left" style={{ padding:'8px', color:'#000' }}>
                    <b>Please select at least 3 topics 
                        ({nichesContext?.contextData?.userSelected?.selectedCount || '0'} Selected)</b>
                </div>
            </Col>
            <Col md={4}>
        
            </Col>
       </Row>
    </div>)}
 </>);
};

export default NichesFooter;