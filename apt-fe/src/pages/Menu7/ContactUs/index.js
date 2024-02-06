import React from "react";
import { ContainerFluid, Row, Col, Card, Colors, Icon, TextBox, TextArea, Button } from "e-ui-react";

const Component1 = () => {
return(<>
<ContainerFluid>
    <Row>
        <Col xl={5} xxl={5}>
        <div style={{paddingTop:"100px"}}>
            <div className="mtop15p mbot15p">
            <Card className="intro" padding={10} borderRadius={10} backgroundColor={Colors.light}>
                <div className="input-group">
                <Icon type="FontAwesome" name="fa-phone" size={20} />
                <p style={{marginLeft:"5px"}}>+91 - 9052344403</p>
                </div>
            </Card>
            </div>
            <div className="mtop15p mbot15p">
            <Card className="intro" padding={15} borderRadius={10} backgroundColor={Colors.light}>
                <div className="input-group">
                <Icon type="FontAwesome" name="fa-envelope-o" size={18} />
                <span style={{marginLeft:"5px"}}>naveenkanvasa@gmail.com</span>
                </div>
            </Card>
            </div>
            <div className="mtop15p mbot15p">
            <Card className="intro" padding={10} borderRadius={10} backgroundColor={Colors.light}>
                <div className="input-group">
                <Icon type="FontAwesome" name="fa-map-marker" size={20} />
                <p style={{marginLeft:"5px"}}>Hyderabad, India</p>
                </div>
            </Card>
            </div>
        </div>
        </Col>
        <Col xl={7} xxl={7}>
            <div className="mtop15p mbot15p">
                <Card className="intro" padding={15} borderRadius={10} backgroundColor={Colors.light}>
                    <div>
                        <h4><b>Send Message</b></h4>
                        <p>Please let me know when you're available for a chat or if there's a 
                            preferred mode of communication that works best for you</p>
                            <Row>
                                <Col xl={6} xxl={6}>
                                    <div className="mtop15p mbot15p">
                                        <TextBox name="name" placeholder="Enter your Name" />
                                    </div>
                                    <div className="mtop15p mbot15p">
                                        <TextBox name="phone" placeholder="Enter your number" />
                                    </div>
                                </Col>
                                <Col xl={6} xxl={6}>
                                    <div className="mtop15p mbot15p">
                                        <TextBox name="email" placeholder="Enter your mail" />
                                    </div>
                                    <div className="mtop15p mbot15p">
                                        <TextBox name="subject" placeholder="Enter subject" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mtop15p mbot15p">
                                        <TextArea name="surname" placeholder="Enter message" lines={3} />
                                    </div>
                                    <div className="mtop15p mbot15p">
                                        <Button type="warning" label="Send Message" size={11} />
                                    </div>
                                </Col>
                            </Row>
                    </div>
                </Card>
            </div>
        </Col>
    </Row>
</ContainerFluid>
</>);
};

const Component2 = () => {
    return(<>
    <ContainerFluid>
        <Row>
            <Col xl={4} xxl={4}>
            <div className="mtop15p mbot15p">
                <h2><b>Contact Us</b></h2>
            </div>
            <div className="mtop15p mbot15p">
                <h5 style={{opacity:"0.65"}}><b>Tourist Visits</b></h5>
                    <div className="mtop15p mbot15p">
                        <p>9:00 am - 5:00 pm</p>
                    </div>
            </div>
            <div className="mtop15p mbot15p">
                <Icon type="FontAwesome" name="fa-facebook" size={20} style={{marginRight:"10px"}} />
                <Icon type="FontAwesome" name="fa-instagram" size={20} style={{marginRight:"10px"}} />
                <Icon type="FontAwesome" name="fa-twitter" size={20} style={{marginRight:"10px"}} />
            </div>
            </Col>
            <Col xl={8} xxl={8}>
            <div className="mtop15p mbot15p">
                <p>We value your feedback, inquiries, and any comments you may have. Please don't hesitate to 
                get in touch with us. Here's how you can reach us:</p>
            </div>
            <div className="mtop15p mbot15p">
            <h4><b>Commercial Request</b></h4>
            </div>
            <div className="mtop15p mbot15p">
                <TextBox name="name" placeholder="Enter your Name" />
            </div>
            <div className="mtop15p mbot15p">
                <TextBox name="mail" placeholder="Enter your Mail" />
            </div>
            <div className="mtop15p mbot15p">
                <TextBox name="phone" placeholder="Enter your Number" />
            </div>
            <div className="mtop15p mbot15p">
                <TextArea name="surname" placeholder="Enter message" lines={4} />
            </div>
            <div className="mtop15p mbot15p">
                <Button type="warning" label="Send Message" size={11} />
            </div>
            </Col>
        </Row>
    </ContainerFluid>
    </>);
};

const ContactUs = () => {
    return(<>
    <ContainerFluid>
        <Row>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p">
                <Component1 />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p">
                <Component2 />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
    </>);
};

export default ContactUs;