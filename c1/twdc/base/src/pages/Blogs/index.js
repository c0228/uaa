import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import './index.css';

const Blogs = ()=>{
 const Title = () =>{
  return (<div align="center" style={{ backgroundColor:'#000040', color:'#fff', padding:'15px' }}>
    <h4 style={{ textTransform:'uppercase', marginTop:'6px', fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Blogging Chronicles - Trends & Beyond</b></h4>
  </div>);
 };

 const BlogContainer = () =>{
  return (<div style={{ marginBottom:'20px', padding:'15px', border:'1px solid #ccc', borderRadius:'8px' }}>
    <div className="blogImgZoom">
        <img src="http://localhost/cons/img/blog-1.jpg" />
    </div>
    <div style={{ marginTop:'15px', fontFamily:'MetropolisBold' }}>
        <h4 style={{ lineHeight:'28px' }}><b>Graphic Design Trends That Will Help Your Business</b></h4>
    </div>
    <div style={{ color:'#999', fontSize:'14px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.
    </div>
    <div align="right" style={{ marginTop:'8px'}}>PUBLISHED ON 01 OCT 2024</div>
    </div>);
 };

 const RecentBlogContainer = () =>{
  return (<div style={{ marginTop:'8px' }}>
    <Card padding={8}>
            <div>
                <Row>
                    <Col md={5}>
                      <img src="http://localhost/cons/img/blog-1.jpg" style={{ width:'100%', borderRadius:'8px' }} />
                    </Col>
                    <Col md={7}>
                        <span style={{ lineHeight:'26px', fontFamily:'MetropolisBold', fontSize:'15px' }}>Graphic Design Trends That Will Help Your Business</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <div className="mtop15p" style={{ color:'#999' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div align="right" style={{ marginTop:'8px'}}>PUBLISHED ON 01 OCT 2024</div>
                    </Col>
                </Row>
            </div>
            </Card>
  </div>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="Blogs" />
 <Title />
 <div className="mtop15p" style={{ marginBottom:'65px' }}>
 <ContainerFluid>
    <Row>
        <Col md={9}>
            <Row>
                <Col md={4}><BlogContainer /></Col>
                <Col md={4}><BlogContainer /></Col>
                <Col md={4}><BlogContainer /></Col>
                <Col md={4}><BlogContainer /></Col>
                <Col md={4}><BlogContainer /></Col>
                <Col md={4}><BlogContainer /></Col>
                <Col md={4}><BlogContainer /></Col>
            </Row>
        </Col>
        <Col md={3}>
            <h3><b>Recent Posts</b></h3><hr/>
             <RecentBlogContainer />
             <RecentBlogContainer />
             <RecentBlogContainer />
             <RecentBlogContainer />
             <RecentBlogContainer />
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Blogs;