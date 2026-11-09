import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import './index.css';

const NCardTemplate1 = () =>{
 const DateTemplate = () =>{
    return (<div class="date-style-3">
        <span class="month">APR 2026</span>
        <span class="day">16</span>
    </div>);
 };
 return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div style={{ border:'1px solid #ddd', backgroundColor:'#fff', borderRadius:'12px', overflow:'hidden' }}>
                <Row>
                    <Col md={6}>
                        <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fi" />
                    </Col>
                    <Col md={6}>
                        <div style={{ display:'flex', padding:'15px' }}>
                            <div style={{ width:'15%'}}>
                                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80" 
                                 style={{ width:'45px', height:'45px', borderRadius:'50%' }} />
                            </div>
                            <div style={{ width:'60%'}}>
                                <div style={{ marginTop:'2px' }}>
                                    <div><b>Dr. Aris Thorne</b></div>
                                    <span style={{ fontSize:'12px', border:'1px solid #ccc', padding:'3px 8px', 
                                        borderRadius:'5px', backgroundColor:'#eee', color:'#555' }}>Local Business Owner</span>
                                </div>
                            </div>
                            <div style={{ width:'25%' }}>
                                <div align="right">
                                    {/** */}
                                    <DateTemplate />
                                    {/** */}
                                </div>
                            </div>
                        </div>

                        {/** */}
                        <div>
                            <span style={{ color:'#2196f3', fontSize:'11px', backgroundColor:'#e4f3ff', 
                                padding:'5px', borderRadius:'6px', border:'1px solid #2196f3' }}>
                                <b>BUSINESS & INNOVATION</b>
                            </span>
                            <div className="mtop5p">
                                <h3><b>The Future of Local Businesses: Building Stronger Communities</b></h3>
                            </div>
                            <div className="mtop5p" style={{ color:'#777' }}>
                                Discover how local businesses are transforming neighborhoods through innovation, 
                                community participation and sustainable growth.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default NCardTemplate1;