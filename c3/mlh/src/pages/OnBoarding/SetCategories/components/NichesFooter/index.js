import React from "react";
import { Row, Col, Icon, Button } from "e-ui-react";
import { getNichesContext } from "@Pages/OnBoarding/SetCategories/context.js";

const NichesFooter = () =>{    
 const nichesContext = getNichesContext();
 const handleNext = () =>{
    window.location.href=process.env.PROJECT_URL+'news-feed';
 };
 return (<> 
    <div style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor:'#fff', 
        borderTop:'1px solid #ccc', boxShadow:'2px 2px 2px 2px #808080', padding:'8px' }}>
            <div>{JSON.stringify(nichesContext?.contextData?.userSelected?.selectedCount)}</div>
        <Row>
            <Col md={8}>
                <div align="left" style={{ padding:'8px', color:'#555' }}>
                    <b>Please select at least 3 topics 
                        ({nichesContext?.contextData?.userSelected?.selectedCount || '0'} Selected)</b>
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
 </div>
 </>);
};

export default NichesFooter;