import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Button, Carousel } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { BgHgtTitle } from '@Templates/Titles/index.js';
import { FeaturedList } from '@Pages/Home/Components/featured/index.js';
import DevChoice from '@Pages/Home/Components/dev-choice/index.js';
import AboutBlog from './Components/about-blog/index.js';
import Keywords from '@Components/keywords/index.js';
import KeywordData from '@StaticData/keywords-all.json';

const Home = ()=>{

 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';
 },[]);

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div>
 <ContainerFluid>
    <Row>
        <Col xxl={9} xl={9}>
            <div className="mtop15p">
            <BgHgtTitle align="left" title="Featured Technologies" bgColor="#ebd09a" color="#000" />
            </div>
            <Row>
                <Col xxl={8} xl={8}>
                    <FeaturedList />
                </Col>
                <Col xxl={4} xl={4}>
                    <div className="mtop15p mbot15p">
                        <BgHgtTitle align="center" title="Today's Developer's Choice" bgColor="#ebd09a" color="#000" />
                        <DevChoice />
                    </div>
                </Col>
            </Row>
            
        </Col>
        <Col xxl={3} xl={3}>
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