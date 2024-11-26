import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SlimImageTitles from '@Components/SlimImageTitles/index.js';
import './index.css';

const Services = () =>{
 const data = [{ id:'medical-billing', label:(<div>Medical<br/> Billing</div>), img:'5.png' },
                { id:'medical-transcription', label:(<div>Medical<br/> Transcription</div>), img:'6.png' },
                { id:'medical-coding', label:(<div>Medical<br/> Coding</div>), img:'7.png' },
                { id:'compliance-audits', label:(<div>Compliance<br/> Audits</div>), img:'8.png' },
                { id:'practice-consulting', label:(<div>Practice<br/> Consulting</div>), img:'9.png' },
                { id:'credentialing-services', label:(<div>Credentialing<br/> Services</div>), img:'10.png' }];
   
 const Title = ()=>{
  return (<div align="center" className="wApp-hgl-headerDiv">
    <div className="bis-hgl-header metropolisBoldFont">Broadway Info Services - One Stop Solution</div>  
  </div>);
 };

 const Images = () => {
  return (<SlimImageTitles data={data?.map((d,i)=>{
    return ({
     img: process.env.PROJECT_URL+"assets/images/"+d?.img,
     content: (<div align="center" className="wApp-services-image-hover">
        <a href={process.env.PROJECT_URL+'services#'+d?.id} style={{ color:'#fff', textDecoration:'none' }}>{d?.label}</a>
        </div>)
    }); 
 })} />);
 };

 return (<div className="wApp-home-services-section">
  <ContainerFluid>
    <Row><Col md={12}><Title /></Col></Row>
    <Row><Col md={12}><Images /></Col></Row>
  </ContainerFluid>
 </div>);
};

export default Services;