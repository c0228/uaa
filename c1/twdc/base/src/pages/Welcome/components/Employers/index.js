import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import FeatureTile from './../../utils.js';

const Employers = () =>{
    const data = [{
      icon:'fa-laptop', 
      size: 90,
      title:'Expert IT Recruitment', 
      desc:'We focus exclusively on IT roles, ensuring you get '+
          'candidates who are tech-savvy and aligned with your business needs.'
    },{
      icon:'fa-suitcase',
      size: 100,
      title:'Faster Time to Hire',
      desc:'With access to a large pool of pre-screened professionals, we can fill your critical '+
          'roles quickly, keeping your projects on schedule.'
    },{
      icon:'fa-puzzle-piece',
      size: 102,
      title:'Customized Hiring Solutions',
      desc:'Whether you\'re hiring for a short-term project or building a full-time team, we offer '+
          'flexible hiring models tailored to your unique requirements.'
    },{
      icon:'fa-handshake-o',
      size: 78,
      title:'Comprehensive HR Support',
      desc:'Beyond recruitment, we offer HR solutions that cover everything from employee onboarding to payroll and compliance.'
    }];
    return (<div className="pt-3 pb-3">
      <div align="center" className="pt-3 pb-3">
          <h2 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Find the Right Talent, Faster</b></h2>
      </div>
      <div style={{ fontSize:'18px', lineHeight:'32px' }}>
      At Work Day Consultancy, we help you overcome recruitment challenges by connecting you with highly skilled IT 
      professionals who are the perfect fit for your company. Our specialized IT recruitment process ensures that you 
      only meet candidates who meet your technical and cultural needs.
      </div>
      <div className="pt-5 pt-2">
          <h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Why Partner with Us?</b></h4>
      </div>
      <div className="pt-3">
      <ContainerFluid>
       <Row>
          {data?.map((d,i)=>{
            return (<Col key={i} md={6}>
              <FeatureTile icon={d?.icon} size={d?.size} title={d?.title} desc={d?.desc} 
                config={{ color:{ icon:'#ef0b17', title:'#ef0b17' } }} />
            </Col>);
          })}
       </Row>
      </ContainerFluid>
      </div>
      <div className="pt-3" style={{ fontSize:'18px', lineHeight:'32px' }}>
      <b>Our Promise:</b> We deliver top talent, reduce your time-to-hire, and ensure a smooth recruitment process 
      that leads to long-term success.
      </div>
    </div>);
   };

export default Employers;