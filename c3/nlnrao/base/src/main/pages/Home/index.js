import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, getAppContext, Button, Carousel } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import Footer from '@MainTemplates/Footer/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import { BgHgtTitle } from '@MainTemplates/Titles/index.js';
import { FeaturedList } from '@MainPages/Home/Components/featured/index.js';
import DevChoice from '@MainPages/Home/Components/dev-choice/index.js';
import AboutBlog from './Components/about-blog/index.js';
import ProfileBasic from '@MainComponents/profile-basic/index.js';
import Resume from '@MainComponents/resume/index.js';
import Keywords from '@MainComponents/keywords/index.js';
import KeywordData from '@MainStaticData/keywords-all.json';
import BlogItems from '@MainComponents/blog-items/index.js'; 
import BlogData from '@MainStaticData/home-blog-list.json';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import Routes from "@MainPages/Java/component.routes.json";
import AgileRoutes from "@MainPages/Agile/component.routes.json";

const Home = ()=>{
 const { setContextData } = getAppContext();
 
 useEffect(()=>{
  document.body.style.backgroundColor='#fff';
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
 <div align="center" style={{ fontFamily:'OpenSansRegular', letterSpacing:'0.8px', fontSize:'13px', backgroundColor:'#eee', 
    color:'#323232', padding:'10px', borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc' }}>
   <b> "Programming is not just writing the Code, it's a living thing that grows, adapts, and continuously refined 
    by an intension for better tomorrow"</b>
 </div>
 <div>
 <ContainerFluid>
    <Row>
        <Col xxl={12} xl={12}>
            
        </Col>
    </Row>
    <Row>
        <Col xxl={9} xl={9}>
            <div className="mtop15p">
            <BgHgtTitle align="left" title="Featured Technologies" bgColor="#0f172b" color="#fff" />
            </div>
            <Row>
                <Col xxl={8} xl={8}>
                    <FeaturedList />
                </Col>
                <Col xxl={4} xl={4}>
                    <div className="mtop15p mbot15p" style={{ backgroundColor:'#eee', 
                        borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px' }}>
                        <BgHgtTitle align="center" title="Today's Developer's Choice" bgColor="#c3c3c3" color="#000" />
                        <div style={{ paddingLeft:'15px', paddingRight:'15px', paddingBottom:'25px' }}>
                            <DevChoice />
                        </div>
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
            <Terminologies title="Java 07 Features" isIndex={true} prefix="tech/java-07-features/" data={Routes?.urls} />
            <Terminologies title="Java 08 Features" isIndex={true} prefix="tech/java-08-features/" data={Routes?.urls} />
            <Terminologies title="Related Articles" isIndex={true} prefix="tech/related-articles/" data={AgileRoutes?.urls} />
            <Keywords data={KeywordData} />
        </Col>
    </Row>
 </ContainerFluid>
 <Bottom />
 <Footer />
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