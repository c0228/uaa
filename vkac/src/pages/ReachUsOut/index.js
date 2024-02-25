import React from "react";
import { ContainerFluid, Row, Col, Icon, Card, Colors } from "e-ui-react";

const ReachUsOut = ()=> {
    return(<>
    <ContainerFluid>
        <Row>
            <Col xl={1} xxl={1}>
            </Col>
            <Col xl={10} xxl={10}>
            <div className="mtop15p mbot15p" align="center">
            <h1 class="bs-header" style={{cursor:"pointer", marginBottom:"5px"}}><b><span className="text-danger">Reach</span> Us Out !</b></h1>            
            <div className="mtop15p mbot15p">
                <div className="mtop15p mbot15p" align="center">
                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Looking to get in touch? We'd love to hear from you! Whether you have questions, 
            feedback, or just want to chat, we're here and ready to assist you. Reach out to us through any of the following channels</h5>
                </div>
                <div className="mtop15p mbot15p">
            <Row>
                <Col xl={4} xxl={4}>
                    <div className="mtop15p" align="center">
                        <h3 class="bs-header" style={{cursor:"pointer", marginBottom:"5px"}}><b><span>Phone</span></b></h3>
                        <span className="text-primary"><Icon type="FontAwesome" name="fa-phone" size={56} /></span>
                        <div className="mtop15p">
                        <h5 class="bs-header" style={{color:"black", opacity:".65"}}>+91-9948390094</h5>
                        </div>
                    </div>
                </Col>
                <Col xl={4} xxl={4}>
                    <div className="mtop15p" align="center">
                        <h3 class="bs-header" style={{cursor:"pointer", marginBottom:"5px"}}><b><span>Email Id</span></b></h3>
                        <span className="text-info"><Icon type="FontAwesome" name="fa-envelope-o" size={56} /></span>
                        <div className="mtop15p">
                        <h5 class="bs-header" style={{color:"black", opacity:".65"}}>vkabroadconsultancy@gmail.com</h5>
                        </div>
                    </div>
                </Col>
                <Col xl={4} xxl={4}>
                    <div className="mtop15p" align="center">
                        <h3 class="bs-header" style={{cursor:"pointer", marginBottom:"5px"}}><b><span>Address</span></b></h3>
                        <span className="text-danger"><Icon type="FontAwesome" name="fa-map-marker" size={56} /></span>
                        <div className="mtop15p">
                        <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Flat No- 310, Third Floor, M N Reddy Complex, Beside to 
                        Rajadani Theater Lane, above Central Bank of India, Dilsukhnagar, Hyderabad</h5>
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
            </div>
        </div>
            </Col>
            <Col xl={1} xxl={1}>
            </Col>
        </Row>
    </ContainerFluid>
    </>);
};

export default ReachUsOut;