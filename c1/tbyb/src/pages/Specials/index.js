import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Contact from './../Home/Components/Contact/index.js';
import Footer from '@Templates/Footer/index.js';

const Specials = () =>{
 return (<div>
    <div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{ padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="Specials" />
    </div>
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col xxl={12} xl={12}>
                <div align="center" className="heading-title"><b>Specials</b></div>
            </Col>
        </Row>
        
            <div style={{  paddingLeft:'12px', paddingRight:'15px' }}>
            <Row>
            {['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png']?.map((d,i)=>{
                return (<Col md={3}>
                    <img src={process.env.PROJECT_URL+'assets/specials/'+d} 
                  style={{ marginTop:'25px', borderRadius:'8px', boxShadow:'2px 2px 2px 2px #808080'}} />
                </Col>);
            })}
            </Row>
            </div>
        
    </ContainerFluid>
    </div>
 <Contact />
 <Footer />
 </div>);
};

export default Specials;