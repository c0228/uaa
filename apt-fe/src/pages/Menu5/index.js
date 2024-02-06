import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { Card, Colors, ContainerFluid, Row, Col, Avatar, Button, Icon } from "e-ui-react";

const CardComponents1 = () =>{
    return (<>
    <div>
        <Row>
            <Col xl={1} xxl={1}>
            <Avatar size={60} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
            </Col>
            <Col xl={11} xxl={11}>
                <div className="mtop15p" >
                    <Row>
                        <Col xl={10} xxl={10}><h4 class="bs-header"><b>Ontoria Parliament University</b></h4>
                        <div style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                        @OntoriaParlUniversity</div>
                        </Col>
                        <Col xl={2} xxl={2}>
                        <Button type="outline-primary" label="Subscribe" size={11} />
                        </Col>
                    </Row>
                </div>
                <div className="mtop15p">
                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Discover thought-provoking articles on cutting-edge research, 
                educational trends, and campus life. Uncover fascinating perspectives on academia, innovation, 
                and student experiences. Join our subscription list for regular updates.</h5>
                </div>
            </Col>
        </Row>
    </div>
    </>);
   };

const CardComponents2 = ()=> {
return(<>
    <div className="mtop15p">
        <Row>
            <Col xl={1} xxl={1}>
            <Avatar size={60} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
            </Col>
            <Col xl={11} xxl={11}>
                <div className="mtop15p" >
                    <Row>
                        <Col xl={10} xxl={10}><h4 class="bs-header"><b>Ontoria Parliament University</b></h4>
                        <div style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                        @OntoriaParlUniversity</div>
                        </Col>
                        <Col xl={2} xxl={2}>
                        <Button type="primary" label="Subscribed" size={11} />
                        </Col>
                    </Row>
                </div>
                <div className="mtop15p">
                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Discover thought-provoking articles on cutting-edge research, 
                educational trends, and campus life. Uncover fascinating perspectives on academia, innovation, 
                and student experiences. Join our subscription list for regular updates.</h5>
                </div>
            </Col>
        </Row>
    </div>
</>);
};

const CardComponents3 = ()=> {
    return(<>
        <div className="mtop15p">
            <Row>
                <Col xl={1} xxl={1}>
                <Avatar size={60} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                </Col>
                <Col xl={11} xxl={11}>
                    <div className="mtop15p" >
                        <Row>
                            <Col xl={10} xxl={10}><h4 class="bs-header"><b>Ontoria Parliament University</b></h4>
                            <div style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                            @OntoriaParlUniversity</div>
                            </Col>
                            <Col xl={2} xxl={2}>
                                <Button type="outline-primary" label="Subscribe" size="11"/>
                            </Col>
                        </Row>
                    </div>
                    <div className="mtop15p">
                    <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Discover thought-provoking articles on cutting-edge research, 
                    educational trends, and campus life. Uncover fascinating perspectives on academia, innovation, 
                    and student experiences. Join our subscription list for regular updates.</h5>
                    </div>
                </Col>
            </Row>
        </div>
    </>);
    };

    
const CardComponents4 = ()=> {
    return(<>
        <div className="mtop15p">
            <Row>
                <Col xl={1} xxl={1}>
                <Avatar size={60} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                </Col>
                <Col xl={11} xxl={11}>
                    <div className="mtop15p" >
                        <Row>
                            <Col xl={10} xxl={10}><h4 class="bs-header"><b>Ontoria Parliament University</b></h4>
                            <div style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                            @OntoriaParlUniversity</div>
                            </Col>
                            <Col xl={2} xxl={2}>
                            <Button type="primary" label="Subscribed" size={11} />
                            </Col>
                        </Row>
                    </div>
                    <div className="mtop15p">
                    <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Discover thought-provoking articles on cutting-edge research, 
                    educational trends, and campus life. Uncover fascinating perspectives on academia, innovation, 
                    and student experiences. Join our subscription list for regular updates.</h5>
                    </div>
                </Col>
            </Row>
        </div>
    </>);
    };

const Menu5 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu5" />
  <ContainerFluid>
    <Row>
        <Col xl={2} xxl={2}>
        </Col>
        <Col xl={8} xxl={8}>
            <div className="mtop15p">
                <div className="mbot15p">
                    <Row>
                        <Col xl={3} xxl={3}>
                        <h3 class="bs-header"><b>Join Our Community</b></h3>
                        </Col>
                        <Col xl={9} xxl={9}>
                        <Icon type="FontAwesome" name="fa-users" size={26} />
                        </Col>
                    </Row>
                    
                    
                </div>
                <div class="mbot15p" style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                    Never miss a beat! From trending topics to in-depth analyses, our newsletter keeps you informed and empowered.
                </div>  
                <div className="mbot15p">
                    <Card className="intro" padding={15} backgroundColor={Colors.light}>
                        <CardComponents1 /><hr/>
                        <CardComponents2/><hr/>
                        <CardComponents3/><hr/>
                        <CardComponents4 /><hr/>
                        <CardComponents2/>
                    </Card>
                </div>
            </div>
        </Col>
        <Col xl={2} xxl={2}>
        </Col>
    </Row>
  </ContainerFluid>
  
 </>);
};

export default Menu5;