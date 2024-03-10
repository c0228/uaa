import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { Carousel } from './Components/Carousel/index.js';
import { ContainerFluid, Row, Col, Icon, Button } from "e-ui-react";

const Home = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />

 <Carousel id="listing" items={[{ image:'assets/carousel/la.jpg', alt:'Los Angeles', caption:{ title:'Los Angeles', desc:'We had such a great time in LA!' } },
{ image:'assets/carousel/chicago.jpg', alt:'Chicago', caption:{ title:'Chicago', desc:'Thank you, Chicago!' } },
{ image:'assets/carousel/ny.jpg', alt:'New York', caption:{ title:'New York', desc:'We love the Big Apple!' } }]} />

 <ContainerFluid>
    <Row>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center" style={{ padding:'30px' }}>
                <Icon type="FontAwesome" name="fa-calendar-check-o" size={38} />
                <div style={{ fontSize:'24px', marginTop:'15px' }}><b>Quality Product</b></div>
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center" style={{ padding:'30px' }}>
                <Icon type="FontAwesome" name="fa-clock-o" size={38} />
                <div style={{ fontSize:'24px', marginTop:'15px' }}><b>On-Time Installation</b></div>
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center" style={{ padding:'30px' }}>
                <Icon type="FontAwesome" name="fa-user-secret" size={38} />
                <div style={{ fontSize:'24px', marginTop:'15px' }}><b>Fast & Flexible Support</b></div>
            </div>
        </Col>
    </Row>
 </ContainerFluid>

    <Row>
        <Col xs={12} xl={12} xxl={12}>
            <div style={{ padding:'42px', backgroundColor:'#ec8931' }}>
                <div align="center">
                <h3><b>Welcome to Rolls and Blinds</b></h3> 
                </div>
                <div style={{ fontSize:'22px', marginTop:'25px' }}>
                    "Where your search for the perfect window covering ends. Our expert team has crafted a collection 
                    of stunning blinds that are both functional and fashionable. From classic whites to bold statement 
                    colors, we have options to suit any style and space. Our products are made with premium materials and 
                    state-of-the-art technology to ensure the highest quality, durability and ease of use. Whether you're 
                    looking to add warmth to your home or enhance your commercial space, Hide and Seek Blinds has everything 
                    you need to create a look you'll love. Elevate your windows, elevate your life - with Hide and Seek Blinds."
                </div>
            </div>
        </Col>
    </Row>

    <div style={{ paddingBottom:'45px' }}>
    <Row>
        <Col xs={12} xl={12} xxl={12}>
            <div style={{ padding:'42px' }}>
                <div align="center">
                <h3><b>Our Working process</b></h3> 
                </div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-mobile" size={96} />
                <div className="mtop35p"><h4><b>Select your Product</b></h4></div>
            </div>
        </Col>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-comments" size={96} />
                <div className="mtop35p"><h4><b>Get The Quotation</b></h4></div>
            </div>
        </Col>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-shopping-bag" size={96} />
                <div className="mtop35p"><h4><b>Order Confirmation</b></h4></div>
            </div>
        </Col>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center">
                <Icon type="FontAwesome" name="fa-truck fa-flip-horizontal" size={96} />
                <div className="mtop35p"><h4><b>Final Installation</b></h4></div>
            </div>
        </Col>
    </Row>
    </div>


    <div style={{ backgroundColor:'#ccc', padding:'35px' }}>
        <ContainerFluid>
            <Row>
                <Col xs={12} xl={6} xxl={6}></Col>
                <Col xs={12} xl={6} xxl={6}>
                    <div style={{  marginTop:'35px' }}>
                        <div><h3><b>Why to Choose Us ?</b></h3></div>
                        <div style={{ fontSize:'18px' }}>
                            At Roll Easy Blinds, we understand the importance of finding the perfect window coverings to enhance 
                            the aesthetics and functionality of your space.
                        </div>
                        <div>
                            <ul>
                                <li style={{ marginTop:'20px' }}>
                                    <div><span style={{ fontSize:'20px' }}><b>Extensive Selection</b></span></div>
                                    <div style={{ fontSize:'18px' }}>
                                    We offer an extensive selection of blinds in various styles, materials, and colors, allowing 
                                    you to find the perfect match for your décor and personal preferences
                                    </div>
                                </li>
                                <li style={{ marginTop:'20px' }}>
                                    <div><span style={{ fontSize:'20px' }}><b>Superior Quality</b></span></div>
                                    <div style={{ fontSize:'18px' }}>
                                    Our products are crafted using premium materials and are built to withstand the test of time.
                                    </div>
                                </li>
                                <li style={{ marginTop:'20px' }}>
                                    <div><span style={{ fontSize:'20px' }}><b>Customization Options</b></span></div>
                                    <div style={{ fontSize:'18px' }}>
                                    We believe that window coverings should be as unique as the spaces they adorn. That's why we offer a 
                                    range of customization options
                                    </div>
                                </li>
                                <li style={{ marginTop:'20px' }}>
                                    <div><span style={{ fontSize:'20px' }}><b>Professional Installation</b></span></div>
                                    <div style={{ fontSize:'18px' }}>
                                    Proper installation is crucial for optimal functionality and aesthetics of your blinds.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
    </div>

    <div align="center" style={{ paddingTop:'120px', paddingBottom:'120px' }}>
        <div>
            <h2><b>Looking for any modern and luxurious blinds solutions for your home or office ?</b></h2>
            <span style={{ fontSize:'18px' }}>We have a large number of meterial to make your space beautiful..</span>
        </div>
        <div style={{ marginTop:'25px' }}>
            <Button type="primary" label="Get Started" size={12} />
        </div>
    </div>


 </>);
};

export default Home;