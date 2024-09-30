import React from "react";
import { ContainerFluid, Row, Col, Button } from "e-ui-react";

const SplitContent = () =>{
  const Template = ({ title, desc, btn }) =>{
    return (<div align="center">
      <div><h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>{title}</b></h4></div>
      <div style={{ fontSize:'16px', lineHeight:'32px' }}>{desc}</div>
      <div className="pt-3 pb-2">
        <a href={process.env.PROJECT_URL+btn?.link}><Button type={"outline-"+btn?.type}><b>{btn?.title}</b></Button></a>
      </div>
    </div>);
  };

  return (<div>
    <div align="center" className="pt-3 pb-3">
      <h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Your Trusted Partner for Talent Acquisition</b></h4>
    </div>
    <div style={{ fontSize:'16px', lineHeight:'32px' }}>
      Streamline your hiring process and connect with top-tier talent. Our comprehensive HR solutions are tailored to meet 
      the unique needs of employers and consultants.
    </div>
    <div className="pt-5 pb-2">
    <ContainerFluid>
      <Row>
        <Col md={6}>
          <Template title="Discover Your Next Career Opportunity" 
            desc="Empower your job search with our extensive database and personalized guidance. Find your ideal match today."
            btn={{ type:"primary", title:"Explore Opportunities", link:"job-seekers" }}/>
        </Col>
        <Col md={6}>
          <Template title="Stay Informed with Our HR Insights" 
            desc="Access valuable industry news, expert advice, and practical tips through our informative blog. Stay ahead of the curve."
            btn={{ type:"danger", title:"Get Insights", link:"blogs" }}/>
        </Col>
      </Row>
    </ContainerFluid>
    </div>
  </div>)
};

export default SplitContent;