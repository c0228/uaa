import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Puzzle from './components/puzzle/index.js';

const NotFound = () =>{
 useEffect(()=>{
  console.log("#000");
  document.body.style.backgroundColor='#085564';
 },[]);
 return (<div>
  <Header menulinks={HeaderMenu} />
  <div style={{ display:'flex', minHeight: '80vh', flex:1, justifyContent:'center', alignItems:'center' }}>
    <ContainerFluid>
        <Row>
            <Col md={1}></Col>
            <Col md={4}>
                <Puzzle />
            </Col>
            <Col md={6}>
                <div>
                    <div style={{ fontSize:'72px', color:'#fff', paddingBottom:'15px', borderBottom:'1px solid #ccc', marginBottom:'25px' }}>OOPS!</div>
                    <div style={{ fontSize:'28px', letterSpacing:'2px', color:'#fff' }}>
                        We couldn't find what you were looking for.
                    </div>
                    <div style={{ marginTop:'12px', fontSize:'18px', color:'#ddd', lineHeight:'36px' }}>
                        Unfortunately, the page you were looking for could not be found. 
                        It may be temporarily unavailable, moved or no longer exist.
                        Check the URL you entered for any mistakes and try again. 
                        Alternatively, search for whatever is missing or take a look around the rest of our site.
                    </div>
                </div>
            </Col>
            <Col md={1}></Col>
        </Row>
    </ContainerFluid>
  </div>
 
 </div>);
};

export default NotFound;