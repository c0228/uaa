import React from "react";
import { ContainerFluid, Row, Col, Icon, TextArea, Button } from "e-ui-react";
import './index.css';

const Footer = () =>{
    return(<>
    <div className="footer-title">
        <ContainerFluid>
            <Row>
                <Col xl={3} xxl={3}>
                    <div className="mtop15p" style={{marginLeft:"8px"}}>
                        <a className="navbar-brand" href="#">
                            <div style={{ fontFamily: 'kvfont001', fontSize:'22px', marginTop:'8px' }}>
                                <span style={{ color:'#fff' }}>KalyanaVeena.com</span>
                            </div>
                        </a>
                    </div>
                    <div className="mbot15p text-white-50" style={{fontFamily:"Franklin Gothic Book", fontSize:"16px", marginLeft:"8px"}}>
                    Bringing Hearts Together with Love and Commitment.
                    Your Trusted Partner in Matrimonial Bliss. 
                    Connecting Souls for a Lifetime of Happiness.
                    Where Love Finds Its Perfect Match<br/>
                    </div>
                </Col>
                <Col xl={3} xxl={3}>
                    <div className="mtop15p" style={{fontFamily:"Franklin Gothic Book" }} align="center">
                        <div style={{ color:"#fff" }}>
                            <h4><b>Quick Links</b></h4>
                        </div>
                        <div className="text-white-50" style={{ fontSize:"16px" }} >
                            <div>Match Calculator</div>
                            <div>My Dashboard</div>
                            <div>Browse Matrimony</div>
                            <div>Create New Profile</div>
                        </div>
                    </div>
                </Col>
                <Col xl={4} xxl={4}>
                    <div className="mtop15p" style={{fontFamily:"Franklin Gothic Book" }} >
                        <div align="center" style={{ color:"#fff" }}>
                            <h4><b>Contact Us</b></h4>
                        </div>
                        <div className="input-group text-white-50">
                            <Icon type="FontAwesome" name="fa-envelope-o" style={{ marginTop:'5px' }}size={16} />
                            <span className="text-white-50" style={{marginLeft:"5px", fontSize:'16px' }}>kalyanaveena.matrimonialservices@gmail.com</span>
                        </div>
                        <div>
                            <div className="mtop15p">
                                <TextArea name="message" placeholder="Enter your Queries" lines={2} />
                            </div>
                            <div align="right" className="mtop10p">
                                <Button type="warning" label="Send Message" size={11} />
                            </div>
                        </div>
                    </div> 
                </Col>
                <Col xl={2} xxl={2}>
                <div className="mtop15p" style={{fontFamily:"Franklin Gothic Book" }} >
                        <div align="center" style={{ color:"#fff" }}>
                            <h4><b>Follow Us</b></h4>
                        </div>
                        <div align="center" style={{ display:'flex', justifyContent:'center' }}>
                        
                        <div className="facebook social-media-icon mtop15p" style={{ width:'40px', height:'40px', 
                            padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px", float:'left' }}>
                            <a href="https://www.facebook.com" target="_blank" className="text-white">
                                <Icon type="FontAwesome" name="fa-facebook" size={20} />
                            </a>
                        </div>
                        
                        <div className="instagram  social-media-icon mtop15p" style={{ width:'40px', height:'40px', 
                        padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px", float:'left'  }}>
                            <a href="https://www.instagram.com" target="_blank" className="text-white">
                                <Icon type="FontAwesome" name="fa-instagram" size={20} />
                            </a>
                        </div>
                        
                        <div className="linkedin social-media-icon mtop15p" style={{ width:'40px', height:'40px', 
                        padding:'10px', border:'1px solid #fff', borderRadius:"20px", marginRight:"8px", float:'left'  }}>
                            <a href="https://www.whatsapp.com" target="_blank" className="text-white">
                                <Icon type="FontAwesome" name="fa-whatsapp" size={20} />
                            </a>
                        </div>
                        
                        </div>
                    </div> 
                </Col>
            </Row>
        </ContainerFluid>
    </div>
   <div class="kv-footer">
   &copy;  Copyrights 2023. All Rights are Reserved by ANUPS HT-CLAN (OPC) PRIVATE LIMITED.
   <span className="pull-right" style={{ marginRight:'15px' }}><b>App Version :</b> 1.0.0</span>
</div>
    </>
    );
};

export default Footer;