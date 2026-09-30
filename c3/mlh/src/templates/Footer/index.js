import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import './index.css';

const pages = [{ label:"Child Safety Standards Policy", url: "declarations/child-safety-standards-policy" },
            { label:"Privacy Policy", url: "declarations/privacy-policy" }];

const Footer = () =>{
 const NewTabPage = (url) =>{
   window.open(url, '_blank');
 };
 return (<div className="mlh-fixed-footer f-metropolis">
    <ContainerFluid>
        <Row>
            <Col md={6}></Col>
            <Col md={6}>
                <div align="right" style={{ fontSize:'11px' }}>
                    {pages?.map((p,i)=>{
                        return (<span key={i}>
                            <span className="mlh-policy-links" onClick={()=>NewTabPage(p?.url)}>{p?.label}</span>
                            {i<(pages?.length-1) && <span style={{ color:'#000', paddingLeft:'8px', paddingRight:'8px' }}>|</span>}
                        </span>);
                    })}
                </div>
                
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default Footer;