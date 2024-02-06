import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Icon, TextBox, Card, Colors, Avatar, Button } from "e-ui-react";

const CardComponent = ()=>{
    return(<>
        <Card className="intro" padding={15} backgroundColor={Colors.light}>
            <div className="mtop15p mbot15p" align="center">
                <Avatar size={100} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                <div className="mtop15p">
                    <h4 class="bs-header"><b>Global Gazette: Stay Informed Abroad</b></h4>
                </div>
                <div className="mtop15">
                    <h5 class="bs-header" style={{color:"black", opacity:".65"}}>
                    "Global Gazette: Stay Informed Abroad" is your passport to a world of insights, opportunities, 
                    and knowledge. In each issue, we curate a collection of articles, updates, and expert advice to 
                    keep you well-informed and empowered, no matter where your international journey takes you.
                    </h5>
                        <div className="mtop15p" align="end">
                            <Button type="primary" label="View Page" size={11} />
                        </div>
                </div>
            </div>
        </Card>
    </>);
};

const HeaderContent = ()=>{
    return(<>
        <div style={{backgroundColor:"#006EB3", color:"white"}}>
            <ContainerFluid>
                <Row>
                    <Col xl={1} xxl={1}>
                    </Col>
                    <Col xl={7} xxl={7}>
                        <div className="mtop5p mbot5p" align="left">
                            <Icon type="FontAwesome" name="fa-envelope" size={16} /> info@vkAbroadconsultancy.com
                        </div>
                    </Col>
                    <Col xl={4} xxl={4}>
                    <div className="mtop5p mbot5p" align="left">
                        <Icon type="FontAwesome" name="fa-plane" size={20} style={{ marginRight: '10px' }} />
                        <span style={{ marginRight: '10px' }}>USA</span>
                        <span style={{ marginRight: '10px' }}>UK</span>
                        <span style={{ marginRight: '10px' }}>AUS</span>
                        <span style={{ marginRight: '10px' }}>CANADA</span>
                        <span>+ Many More</span>
                    </div>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    </>);
};

const Newsletters = ()=>{
    return(<>
        <HeaderContent />
        <Header menulinks={HeaderMenu} activeId="Newsletters" />
        <div className="mtop15p mbot15p">
        <ContainerFluid>
        <Row>
            <Col xl={3} xxl={3}></Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p input-group" align="center" style={{ position: 'relative' }}>
                    <TextBox name="surname" placeholder="Search Newsletters based on Topics, Authors, Regions etc..." />
                    <Button type="primary" label="Search" size={13} />
                </div>
                <div className="mtop15p">
                    <Button type="danger" label="Featured" size={11} style={{marginRight:"10px"}} />
                    <Button type="light" label="Recently Published" size={11} style={{marginRight:"10px"}} />
                    <Button type="light" label="Top Rated Newsletters" size={11} style={{marginRight:"10px"}} />
                    <Button type="outline-danger" label="Self-Hosted Newsletters" size={11} style={{marginRight:"10px"}} />
                </div> 
            </Col>
            <Col xl={3} xxl={3}>
            </Col>
        </Row>
    </ContainerFluid>
        </div>
        <div className="mtop15p mbot15p">
            <ContainerFluid>
            <Row>
                <Col xl={3} xxl={3}>
                    <CardComponent />
                </Col>
                <Col xl={3} xxl={3}>
                    <CardComponent />
                </Col>
                <Col xl={3} xxl={3}>
                    <CardComponent />
                </Col>
                <Col xl={3} xxl={3}>
                    <CardComponent />
                </Col>
            </Row>
            </ContainerFluid>
            <ContainerFluid>
            <div className="mtop15 mbot15p">
                <div className="mtop15p" align="center">
                    <h3 class="bs-header" style={{color:"#120099"}}><b>Have no clue to check which Newsletter Page?<br/>
                    Let us help you with that !!!
                    </b></h3>
                </div>
                <div className="mtop15p mbot15p" style={{ position: 'relative' }}>
                    <Row>
                        <Col xl={3} xxl={3}></Col>
                        <Col xl={6} xxl={6}>
                            <div className="mtop15p input-group">
                                <TextBox name="surname" placeholder="Search Newsletters with the recommendations we suggest below" />
                                <Button type="danger" label="Search" size={13} />
                            </div>
                            
                        <div className="mtop15p">
                            <Card className="intro" padding={15}>
                                <div className="mtop15p">
                                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>
                                    <ul>
                                        <li><b>Highly Followed Authors:</b> N.L.N Rao, Kishore Nellutla</li>
                                        <li><b>Top Rated Newsletter Pages:</b>Global Gazette, World Connect, Around the Globe etc.</li>
                                    </ul>
                                </h5>
                                </div>
                            </Card>
                        </div>
                        </Col>
                        <Col xl={3} xxl={3}></Col>
                    </Row>
                </div>
            </div>
            </ContainerFluid>
        </div>
    </>);
};

export default Newsletters;