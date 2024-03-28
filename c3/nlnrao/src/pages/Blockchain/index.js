import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, TextBox, Button, Select, Card, Switch } from "e-ui-react";

const Quotation = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="BlockchainIntroduction" />
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={12} xxl={12}>
            <div>
                <h4 style={{ fontFamily:'BebasNeue', letterSpacing:'2px' }}><b>Request a Quotation</b></h4><hr/>
            </div>

            <div style={{ color:'#999', fontSize:'14px', marginTop:'10px' }}>
                Fill the Required Details below to get Free Quotation:
            </div>
            
            <Row>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="name" label={<><span className="font-red">*</span>Name</>} placeholder="Enter your Name" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="email" label={<><span className="font-red">*</span>Email Address</>} placeholder="Enter your Email Address" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="phone" label={<><span className="font-red">*</span>Phone Number</>} placeholder="Enter your Phone Number including (+1)" />
                  </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} xl={12} xxl={12}>
                    <div align="right" style={{ marginTop:'15px', marginBottom:'55px' }}>
                        <Button type="primary" label="Ask for Quotation" size={11} />
                    </div>
                </Col>
            </Row>
            
                {/*sessionStorage.getItem("QUOTATION_PRODUCTS")*/}
            
        </Col>
        <Col xs={12} xl={6} xxl={6}>
        </Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default Quotation;