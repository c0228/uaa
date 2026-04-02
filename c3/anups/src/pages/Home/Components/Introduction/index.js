import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const Introduction = () =>{
 return (<div>
    <div align="center">
        <h5 className="home-titleBar">Your Big Ideas, Creative People with New Technologies - Build's your Startup Company</h5>
    </div>
    <ContainerFluid className="home-introSection-div">
        <Row>
            <Col align="center" md={12} className="home-introSection-title">
                <h1>World's No.1 # Design at your Service</h1>
            </Col>
        </Row>
        <Row>
            <Col md={2}></Col>
            <Col align="center" md={8} className="pad15p">
                <h4 className="home-introSection-subTitle">
	                We are a Kick-ass Web and Mobile App Development Company from India <br/>
	                who creates Awesome Websites, Android and IOS Apps.
	            </h4>
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row>
            <Col md={4}></Col>
            <Col md={4} className="pad15p">
                <div className="input-group">
	                <input type="text" className="form-control" placeholder="Enter your Email Address" 
                        style={{ border:'1px solid green' }} />
                    <div className="input-group-btn">
                        <button class="btn" style={{ paddingLeft:'18px', paddingRight:'18px', color: '#fff', 
                                backgroundColor:'green', borderColor: 'green', borderTopLeftRadius:'0px', 
                                borderBottomLeftRadius:'0px' }}><b>Let's Get Started</b></button>
                    </div>
                </div>
            </Col>
            <Col md={4}></Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default Introduction;