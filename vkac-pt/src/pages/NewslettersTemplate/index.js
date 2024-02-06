import React from "react";
import { ContainerFluid, Row, Col, Card, Colors, TextBox, Button } from "e-ui-react";

const NewslettersTemplate = ()=>{
    return(<>
    <ContainerFluid>
        <Row>
            <Col xl={3} xxl={3}></Col>
            <Col xl={6} xxl={6}>
            <div className="mtop15p mbot15p">
            <div className="mtop15p mbot15p" align="center">
            <h2 class="bs-header" style={{marginBottom:"5px"}}><b>Join Our <span className="text-primary">Newsletter</span></b></h2>
                <h4 class="bs-header" style={{ opacity:".65"}}>For more updates, subscribe us:</h4>
            </div>
            <div className="mtop15p mbot15p input-group" align="center">
            <TextBox name="newsletter" placeholder="Search channels, Topics etc." />
            <Button type="danger" label="Search" size={11} />
            </div>
        </div>
            </Col>
            <Col xl={3} xxl={3}></Col>
        </Row>
        
    </ContainerFluid>
    </>);
};


export default NewslettersTemplate;