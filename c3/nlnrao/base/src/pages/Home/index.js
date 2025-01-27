import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, getAppContext, Button, Carousel } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { BgHgtTitle } from '@Templates/Titles/index.js';
import { FeaturedList } from '@Pages/Home/Components/featured/index.js';
import DevChoice from '@Pages/Home/Components/dev-choice/index.js';
import AboutBlog from './Components/about-blog/index.js';
import ProfileBasic from '@Components/profile-basic/index.js';
import Resume from '@Components/resume/index.js';
import Keywords from '@Components/keywords/index.js';
import KeywordData from '@StaticData/keywords-all.json';
import BlogItems from '@Components/blog-items/index.js'; 
import BlogData from '@StaticData/home-blog-list.json';

const Home = ()=>{
 const { setContextData } = getAppContext();
 useEffect(()=>{
  if (window.location.hash === '#resume') { setContextData({ resumeStatus: 'open' }) }
 },[]);

 const BlogTitle = ({ label })=>{
  return (<Row>
    <Col all={12}>
        <div className="mtop35p mbot15p">
          <div className="list-header">{label}</div>
        </div>
    </Col>
</Row>);
 };

 const BlogContent = ({ label })=>{
    return (<Row>
        <Col xxl={4} xl={4}><BlogItems itemList={BlogData?.[label]?.row1} /></Col>
        <Col xxl={4} xl={4}><BlogItems itemList={BlogData?.[label]?.row2} /></Col>
        <Col xxl={4} xl={4}><BlogItems itemList={BlogData?.[label]?.row3} /></Col>
    </Row>);
 };

 return (<>
 <Resume />
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div>
 <ContainerFluid>
    <Row>
        <Col xxl={9} xl={9}>
            <div className="mtop15p">
            <BgHgtTitle align="left" title="Featured Technologies" bgColor="#555" color="#fff" />
            </div>
            <Row>
                <Col xxl={8} xl={8}>
                    <FeaturedList />
                </Col>
                <Col xxl={4} xl={4}>
                    <div className="mtop15p mbot15p">
                        <BgHgtTitle align="center" title="Today's Developer's Choice" bgColor="#c5c5c5" color="#000" />
                        <DevChoice />
                    </div>
                </Col>
            </Row>
            <BlogTitle label="Agile Methodology - Technical Leads / Architect's Point of View" />
            <BlogContent label="agile" />
            <BlogTitle label="Mastering Guide to Node JS" />
            <BlogContent label="node" />
            <BlogTitle label="Docker and Kubernetes" />
            <BlogContent label="dockub" />
            <BlogTitle label="Kafka Messaging Queues" />
            <BlogContent label="kafka" />
            <BlogTitle label="System Design in Distributed Systems" />
            <BlogContent label="sysd" />
            <BlogTitle label="Data Structures and Algorithms" />
            <BlogContent label="dsAlgo" />
        </Col>
        <Col xxl={3} xl={3}>
            <ProfileBasic />
            <AboutBlog />
            <Keywords data={KeywordData} />
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 {/*<Welcome />
 <Highlight1 />
 <Why />
 <Highlight2 />
 <Starters />
 <Footer />*/}
 </>);
};

export default Home;