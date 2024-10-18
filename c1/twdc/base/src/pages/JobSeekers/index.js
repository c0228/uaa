import React from "react";
import { ContainerFluid, Row, Col, Card, Icon, Button } from "e-ui-react";
import JobFilter from './components/JobFilter/index.js';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const JobSeekers = ()=>{
 const Title = () =>{
  return (<div align="center" style={{ backgroundColor:'#000040', color:'#fff', padding:'15px' }}>
    <h4 style={{ textTransform:'uppercase', marginTop:'6px', fontSize:'23px', fontFamily:'MetropolisBold' }}>
     <b>Job Seekers</b>
    </h4>
  </div>);
 };
 const JobCard = () =>{
  return (<div style={{ marginBottom:'25px' }}>
  <Card padding={15} border="1px solid #0d6efd">
    <div align="center"><h4><b>Senior Full Stack Developer</b></h4></div>
    <div align="center">
        <span className="badge bg-primary" style={{ fontSize:'12px' }}>Full-time</span>
        <span className="badge bg-primary" style={{ marginLeft:'5px', fontSize:'12px' }}>$.140K - $.150K</span>
        <span className="badge bg-primary" style={{ marginLeft:'5px', fontSize:'12px' }}>Day Shift</span>
    </div>
    <div style={{ marginTop:'15px' }}>
    <Row>
        <Col md={6}>
        <Icon type="FontAwesome" name="fa-map-marker" size={18} color="#777" /> 
        <span style={{ marginLeft:'5px', fontSize:'16px', color:'#777' }}>California, USA</span>
        </Col>
        <Col md={6}>
        <div align="right">
        <Icon type="FontAwesome" name="fa-clock-o" size={18} color="#777" /> 
        <span style={{ marginLeft:'5px', fontSize:'16px', color:'#777' }}>0 - 5 years</span>
        </div>
        </Col>
    </Row>
    </div>
    <div style={{ marginTop:'10px', fontSize:'13px', color:'#777', lineHeight:'22px' }}>
    Work Consultancy is a global organization that delivers care, aided by technology to help millions of people 
    live healthier lives. The work you do with our team will directly improve health outcomes by connecting people 
    with the care, pharmacy benefits, data and resources they need to feel their best.
    </div>
    <div align="right">
        <Button className="btn btn-outline-primary"><b>Know more</b></Button>
    </div>
</Card>
</div>);
 };
 return (<>
 <Header menulinks={HeaderMenu} activeId="JobSeekers" />
 <Title />
 <div className="mtop15p">
 <ContainerFluid>
    <Row>
        <Col md={3}>
          <JobFilter />
        </Col>
        <Col md={9}>
            {/* */}
            <ContainerFluid>
              <Row>
                <Col md={6}><JobCard /></Col>
                <Col md={6}><JobCard /></Col>
                <Col md={6}><JobCard /></Col>
                <Col md={6}><JobCard /></Col>
              </Row>
            </ContainerFluid>
            {/* */}
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default JobSeekers;