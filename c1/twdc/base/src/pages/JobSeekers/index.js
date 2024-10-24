import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Icon, Button, Select, TextBox, Switch  } from "e-ui-react";
import JobFilter from './components/JobFilter/index.js';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import JobSeekersData from '@StaticData/job-seekers.json';
import ApplyJob from "@Pages/ApplyJob/index.js";

const JobSeekers = ()=>{
  const [advancedFilters, setAdvancedFilters] = useState({});

 const AdvancedFiltersData = (menu) =>{
  return JobSeekersData?.[menu]?.map((data)=>{ return { id:data, label: data, value: data } });
 };
    
 useEffect(()=>{
     setAdvancedFilters({ 
       locations: AdvancedFiltersData("locations"), 
       industry: AdvancedFiltersData("industry"),
       salaryRange: AdvancedFiltersData("salaryRange"),
       position: AdvancedFiltersData("position"),
       expLevel: AdvancedFiltersData("expLevel"),
       workMode: AdvancedFiltersData("workMode"),
       jobType: AdvancedFiltersData("jobType"),
       jobPosted: AdvancedFiltersData("jobPosted"),
      });
 },[]);

 const TitleCard = () =>{
  return (<div align="center" style={{ border:'1px solid #d8ecfb', borderRadius:'8px', backgroundColor:'#f2f6fd', padding:'15px' }}>
    <div><h2 style={{ fontFamily: 'MetropolisBold' }}>Explore Exciting Career Opportunities</h2></div>
    <div style={{ fontSize:'16px', color:'#777', lineHeight:'28px' }}>
      "Discover your dream job in a dynamic and supportive environment.<br/> 
      We're committed to fostering professional growth and offer competitive benefits packages.<br/> 
      Join our talented team and make a meaningful impact."</div>
   </div>);
 };

 const SearchForm = () =>{
  return (<ContainerFluid>
    <Row><Col md={12}><TitleCard /></Col></Row>
    <div style={{ marginTop:'15px' }}>
    <Row>
      <Col md={3} style={{ paddingRight:'0px' }}>
        <Select 
           placeholder="Select Location"
           options={advancedFilters?.locations}
           fontSize="12"
           onChange={(event) => {
              let option = event.target.value;
           }}
        />
      </Col>
      <Col md={8} style={{ paddingLeft:'2px', paddingRight:'0px' }}>
        <TextBox name="search" placeholder="Enter your Search" />
      </Col>
      <Col md={1} style={{ paddingLeft:'2px' }}>
        <Button type="primary" size={11} style={{ width:'100%' }}><b>Search</b></Button>
      </Col>
    </Row>
    </div>
   </ContainerFluid>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="JobSeekers" />
 <SearchForm />
 
 <div className="mtop15p">
 <ContainerFluid>
   <Row>
    <Col md={3} style={{ paddingRight:'0px' }}>
     <JobFilter advancedFilters={advancedFilters} />
    </Col>
    <Col md={9}>
      <Card padding={15} border="1px solid #d8ecfb" backgroundColor="#f2f6fd">
        <div style={{ width:'100%' }}>
            <div style={{ width:'50%', float:'left' }}>
            <Row>
              <Col md={12}>
                <a href={process.env.PROJECT_URL+'job-details'} style={{ textDecoration:'none' }}>
                <h4 style={{ fontFamily:'MetropolisBold', marginBottom:'15px' }}><b>Senior Full Stack Engineer</b></h4>
                </a>
                <div style={{ marginTop:'5px', marginBottom:'12px' }}>
                <span style={{ padding:'5px', borderRadius:'8px', border:'1px solid #555', color:'#555', backgroundColor:'#f3f3f3' }}>
                    <Icon type="FontAwesome" name="fa-briefcase" size={12} />
                    <span style={{ marginLeft:'5px' }}>Full time</span>
                </span>
                <span style={{ marginLeft:'5px', borderRadius:'8px', padding:'5px', border:'1px solid #555', color:'#555', backgroundColor:'#f3f3f3' }}>
                    <Icon type="FontAwesome" name="fa-clock-o" size={12} />
                    <span style={{ marginLeft:'5px' }}>3 min ago</span>
                </span>
            </div>
              </Col>
            </Row>
            </div>
            <div align="right" style={{ width:'50%',  float:'left' }}>
            <Row>
              <Col md={12}>
                <h4 style={{ fontFamily:'MetropolisBold' }}><b>Workday Consultancy</b></h4>
                <div style={{ color:'#777' }}>
                  <Icon type="FontAwesome" name="fa-map-marker" size={14} />
                  <span style={{ marginLeft:'5px', fontSize:'13px' }}>New York City, USA</span>
                </div>
              </Col>
            </Row>
            </div>
        </div>
        <div style={{ lineHeight:'28px', marginTop:'5px', width:'100%', float:'left', fontSize:'16px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.
        </div>
        <div style={{ marginTop:'8px', width:'100%', float:'left' }}>
          <div style={{ width:'90%', float:'left' }}>
            <span style={{ fontSize:'22px', color:'#000' }}><b>$.250</b></span> 
            <span style={{ marginLeft:'5px', fontSize:'16px' }}>/ hour</span>
          </div>
          <div style={{ width:'10%', float:'left' }}>
            <ApplyJob />
          </div>
        </div>
      </Card>
    </Col>
   </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default JobSeekers;