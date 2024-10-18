import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const Introduction = () =>{

 const ImgTemplate = ({ img, title, desc}) =>{
  return (<div style={{ display:'flex', flex:1, marginTop:'35px' }}>
    <div align="center" style={{ width:'40%' }}>
        <img src={process.env.PROJECT_URL+"assets/images/"+img} 
            style={{ border:'3px solid #06156c', marginTop:'5px', width:'150px', height:'150px', borderRadius:'50%' }} />
    </div>
    <div style={{ width:'60%' }}>
        <div><h4 style={{ color:'#06156c' }}><b>{title}</b></h4></div>
        <div>{desc}</div>
    </div>
</div>);   
 };

 return (<div style={{ minHeight:'500px', backgroundColor:'#f6f6f6' }}>
  <div style={{ paddingTop:'65px', paddingBottom:'65px', padding:'5%'  }}>
  <Row>
    <Col md={12}>
        <div align="center" style={{ color:'#06156c' }}>
            <div style={{ }}><h1><b>Welcome to <span style={{ color:'#ef0b17', textTransform:'uppercase' }}>Workday Consulting</span></b></h1></div>
            <div style={{ lineHeight:'30px', marginTop:'15px', fontSize:'16px', color:'#777' }}><b><i>"Your trusted partner for optimizing human capital management. We specialize in implementing and supporting Workday solutions, helping businesses 
                streamline HR processes and drive employee engagement."</i></b></div>
            <div style={{ lineHeight:'32px', marginTop:'15px', fontSize:'18px', color:'#000' }}>
                Workday Consultancy is your trusted advisor for optimizing your human capital management (HCM) processes. 
                As a leading HR consultancy firm, we specialize in implementing and supporting Workday solutions, helping organizations 
                streamline their HR operations and drive employee engagement. With our deep expertise in Workday, we provide comprehensive 
                services tailored to your unique needs.</div>
        </div>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
        <div style={{ padding:'15px', fontSize:'18px', color:'#000' }}>
            <ImgTemplate img="intro-01.png" title="Workday Implementation" 
                desc="We provide expert guidance and support throughout the entire Workday implementation process, ensuring a 
                    smooth and successful transition." />
           
            <ImgTemplate img="intro-02.png" title="Workday Support" 
                desc="Our ongoing support services help you maximize the value of your Workday investment by providing ongoing maintenance, troubleshooting, and optimization." />
        </div>
    </Col>
    <Col md={6}>
        <div style={{ padding:'15px', fontSize:'18px', color:'#000' }}>
            <ImgTemplate img="intro-03.png" title="Workday Consulting" 
                desc="We offer strategic consulting services to help you identify and address your unique HR challenges and achieve your business objectives." />
            
            <ImgTemplate img="intro-04.png" title="Workday Training" 
                desc="Our comprehensive training programs empower your employees to effectively use Workday, maximizing its benefits and driving productivity." />

        </div>
    </Col>
  </Row>
  </div>
  
  </div>);
};

export default Introduction;