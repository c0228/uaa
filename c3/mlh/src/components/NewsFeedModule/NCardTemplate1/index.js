import React from "react";
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";
import AuthorIdentity from "@Components/NewsFeedModule/AuthorIdentity/index.js";
import ArticleCategoryTag from "@Components/NewsFeedModule/ArticleCategoryTag/index.js";
import './index.css';

const NCardTemplate1 = () =>{
 const DateTemplate = () =>{
    return (<div class="date-style-3">
        <span class="month">APR 2026</span>
        <span class="day">16</span>
    </div>);
 };
 const CategoryTag = () =>{
    return (<>
        <div style={{ display: 'inline-flex',color:'#2196f3', fontSize:'11px', backgroundColor:'#e4f3ff', 
            padding:'5px', borderRadius:'6px', border:'1px solid #2196f3' }}>
            <div style={{ marginTop:'5px', marginLeft:'5px', marginRight:'5px', width:'5px', height:'5px', 
                backgroundColor:'#2196f3', borderRadius:'50%' }}></div>
            <b>BUSINESS & INNOVATION</b>
        </div>
    </>);
 };


 return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div style={{ padding:'15px', border:'1px solid #ddd', backgroundColor:'#fff', borderRadius:'12px', overflow:'hidden' }}>
                <Row>
                    <Col md={6}>
                        <ArticleCategoryTag category="Community & Society" subCategory="Local Events" />
                    </Col>
                    <Col md={6}>
                        <div align="right">
                            <Icon type="FontAwesome" name="fa-bookmark-o" size="13" style={{ marginRight:'5px' }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        
                        <div>
                            <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=500&q=80"
                             style={{ borderRadius: '15px' }} />
                        </div>
                        {/*<div style={{ position:'relative'}}>
                            
                            <div style={{ position: 'absolute', top:'12px', left: '12px', zIndex:'2' }}>
                                <CategoryTag />     
                            </div>
                        </div> */}
                    </Col>
                    <Col md={7}>
                        <div style={{ display:'flex' }}>
                            <div style={{ width:'75%' }}>
                                <AuthorIdentity />
                            </div>
                            <div style={{ width:'25%' }}>
                                <div align="right"><DateTemplate /></div>
                            </div>
                        </div>

                        {/** */}
                        <div>
                            <div className="mtop5p">
                                <NewsPropertyTag type="article" />
                                <NewsPropertyTag type="polls" />
                                <NewsPropertyTag type="ideas" />
                                <NewsPropertyTag type="social_movements" />
                            </div>
                            <div className="mtop5p">
                                <h4><b>The Future of Local Businesses: Building Stronger Communities</b></h4>
                            </div>
                            <div className="mtop5p" style={{ color:'#777' }}>
                                Discover how local businesses are transforming neighborhoods through innovation, 
                                community participation and sustainable growth.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}></Col>
                </Row>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default NCardTemplate1;