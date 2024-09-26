import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import FeatureTile from './../../utils.js';

const Employees = () =>{
    const data = [{
      icon:'fa-laptop', 
      size: 90,
      title:'Access to Top IT Companies', 
      desc:'We partner with leading IT organizations to offer you exclusive opportunities across various '+
        'roles—whether you\'re a software developer, data scientist, or system administrator.'
    },{
      icon:'fa-suitcase',
      size: 100,
      title:'Career Growth', 
      desc:' We don\'t just find you a job; we help you grow your career by matching you with companies '+
        'where your skills will be valued and developed.'
    },{
      icon:'fa-puzzle-piece',
      size: 102,
      title:'Personalized Job Search', 
      desc:'We understand your unique strengths and aspirations and work to find the perfect role for you, '+
        'whether you\'re just starting or looking to advance to the next level.'
    },{
      icon:'fa-handshake-o',
      size: 78,
      title:'Ongoing Support', 
      desc:'From resume reviews and interview coaching to negotiating your offer, we provide end-to-end '+
        'support throughout the hiring process.'
    }];
    return (<div className="pt-3 pb-3">
      <div align="center" className="pt-3 pb-3">
          <h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Shape Your IT Career with Us</b></h4>
      </div>
      <div style={{ fontSize:'16px', lineHeight:'32px' }}>
      At Work Day Consultancy, we connect IT professionals like you with opportunities that match your skills, experience, 
      and career goals. Whether you're looking for a new challenge, better growth prospects, or a company that values your 
      contributions, we're here to help you find the perfect job.
      </div>
      <div className="pt-5 pt-2">
          <h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Why Work with Us?</b></h4>
      </div>
      <div className="pt-3">
      <ContainerFluid>
       <Row>
          {data?.map((d,i)=>{
            return (<Col key={i} md={6}>
              <FeatureTile icon={d?.icon} size={d?.size} 
                title={d?.title} desc={d?.desc} config={{ color:{ icon:'#0c9712', title:'#0b7b10' } }} />
            </Col>);
          })}
       </Row>
      </ContainerFluid>
      </div>
      <div className="pt-3" style={{ fontSize:'16px', lineHeight:'32px' }}>
        <b>Your Future Awaits:</b> Let us help you unlock new opportunities and advance your career in the IT industry.
      </div>
    </div>);
   };

export default Employees;