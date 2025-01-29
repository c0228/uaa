import React, { useState } from "react";
import { ContainerFluid, Row, Col, Modal } from "e-ui-react";

const FeHeader = () =>{
 const [ showModel, setShowModal ] = useState(false);

 const Hgl = ({ title, desc, children }) =>{
  return (<div style={{ border:'1px dashed #ccc', backgroundColor:'#fafafa', padding:'15px', borderRadius:'8px' }}>
   <div align="center" style={{ fontFamily: 'BebasNeue', borderRadius:'8px', boxShadow:'1px 1px 1px 1px #ddd', 
    letterSpacing:'1.2px', marginBottom:'10px', paddingTop:'8px', paddingBottom:'3px', textTransform:'uppercase', 
    backgroundColor:'#ccc' }}><h4>{title}</h4></div>
     <div align="center" style={{ marginBottom:'5px' }}><i>({desc})</i></div>
     <div className="lh25p" style={{ fontSize:'14px' }}>{children}</div>
  </div>);
 };

 const WebStackModal = ()=>{
  return (<div>
   <div className="lh25p"><u>React</u>, <u>Vue</u>, and <u>Angular</u> primarily support Web 2.0 applications but can be 
   extended to work with Web 3.0 technologies through additional libraries.</div>
   <div className="lh25p">Here's how they align:</div>
   <div>
    <ul>
        <li className="mtop15p lh25p"><b>Web 1.0 (Static Web) –</b> Not their primary use case, but they can render 
        static content.</li>
        <li className="mtop15p lh25p"><b>Web 2.0 (Interactive Web) –</b> Fully supported; these frameworks are designed 
        for dynamic, interactive, and modern web applications.</li>
        <li className="mtop15p lh25p"><b>Web 3.0 (Decentralized Web) –</b> Indirectly supported via integrations with 
        blockchain libraries (e.g., ethers.js, web3.js).</li>
    </ul>
   </div>
  </div>);
 };

 return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col md={4}>
            <Hgl title="React Js" desc="Component based Library">
            It is a javaScript library for building user interfaces, primarily focused on creating reusable UI components.
            </Hgl>
        </Col>
        <Col md={4}>
            <Hgl title="Angular Framework" desc="Full-fledged Framework">
            It comes with everything you need to build a web application which includes a strict structure, in-built tools, etc.
            </Hgl>
        </Col>
        <Col md={4}>
            <Hgl title="Vue Framework" desc="Progressive Framework">
            It is designed to be incrementally adopted. You can start with small parts and gradually integrate more features as needed.
            </Hgl>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <div align="center" className="mtop15p">
            <u>React</u>, <u>Angular</u> and <u>Vue</u> primarily support <b>Web 2.0</b> applications but can be extended to work 
            with <b>Web 3.0</b> technologies 
            through additional libraries - <span style={{ color:'blue', cursor:'pointer' }} onClick={()=>setShowModal(true)}><u>See How?</u></span></div>
        </Col>
    </Row>
  </ContainerFluid>
  <Modal title="Web Overview" show={showModel} onClose={setShowModal}>
    <WebStackModal />
  </Modal>
 </div>);
};

export default FeHeader;