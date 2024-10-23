import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Icon, Button, Card  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import EmpInfo from "./components/EmpInfo/index.js";
import CompanyInfo from "./components/CompanyInfo/index.js";

const empInfoData = {
 "Industry":{ label: "Mechanical / Auto / Automotive, Civil / Construction", icon:"fa-building-o" },
 "Job level":{ label: "Experienced (Non - Manager)", icon:"fa-user" },
 "Salary":{ label: "$800 - $1000", icon: "fa-money" },
 "Experience":{ label: "1 - 2 years", icon: "fa-id-badge" },
 "Job Type":{ label: "Permanent", icon: "fa-file-text " },
 "Deadline":{ label: "10/08/2022", icon: "fa-clock-o" },
 "Updated":{ label: "10/07/2022", icon: "fa-clock-o" },
 "Location":{ label: "Dallas, Texas", icon: "fa-map-marker" }
};

const companyData = {
    "img":"https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/avatar.png",
    "companyName":"Workday Consulting",
    "desc":"The Workday Consulting Team has a vision to establish a trusted platform that enables productive and healthy enterprises "+
        "in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational "+
        "resiliency. The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative "+
        "design and typography. This candidate will have experiences in working with numerous different design platforms such as digital "+
        "and print forms.",
    "location":"New York City, USA",
    "openJobs": 2,
    "details":[{
       "icon":"fa-building-o",
       "label":"Address",
       "value":"205 North Michigan Avenue, Suite 810 Chicago, 60601, USA"
    },{
       "icon":"fa-phone",
       "label":"Phone",
       "value":"+1 (123) 456-7890"
    },{
       "icon":"fa-envelope",
       "label":"Email",
       "value":"contact@workdayconsulting.com"
    }],
    "skills":["A portfolio demonstrating well thought through and polished end to end customer journeys",
        "5+ years of industry experience in interactive design and / or visual design",
        "Excellent interpersonal skills",
        "Aware of trends inmobile, communications, and collaboration",
        "Ability to create highly polished design prototypes, mockups, and other communication artifacts",
        "The ability to scope and estimate efforts accurately and prioritize tasks and goals independently",
        "History of impacting shipping products with your work",
        "A Bachelor's Degree in Design (or related field) or equivalent professional experience",
        "Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch"],
    "prefExps":["Designing user experiences for enterprise software / services",
        "Creating and applying established design principles and interaction patterns",
        "Aligning or influencing design thinking with teams working in other geographies"]
 };

const jobList = [{
    "img": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/avatar.png",
    "workMode":"Full Time",
    "posted":"3 min ago",
    "jobTitle":"UI / UX Designer",
    "location":"New York City, USA",
    "salaryInHr":"$.250"
   },{
    "img": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/avatar.png",
    "workMode":"Full Time",
    "posted":"5 min ago",
    "jobTitle":"Java Full Stack Engineer",
    "location":"Kansas City, Kansas",
    "salaryInHr":"$.500"
   },{
    "img": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/avatar.png",
    "workMode":"Full Time",
    "posted":"8 min ago",
    "jobTitle":"Frontend Developer",
    "location":"Los Angeles, California",
    "salaryInHr":"$.650"
   },{
    "img": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/avatar.png",
    "workMode":"Full Time",
    "posted":"8 min ago",
    "jobTitle":"Cloud Engineer",
    "location":"Chicago, Illinois",
    "salaryInHr":"$.380"
   },{
    "img": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/avatar.png",
    "workMode":"Full Time",
    "posted":"8 min ago",
    "jobTitle":"Devops Engineer",
    "location":"Pittsburgh, Pennsylvania",
    "salaryInHr":"$.160"
   }];

const SimiliarJobs = () =>{
 return (<Card padding={15}>
    <div style={{ marginTop:'15px', marginBottom:'15px', fontFamily: 'MetropolisBold' }}>
      <h4><b>Similiar Jobs</b></h4>
    </div>
    {jobList?.map((list,index)=>{
      return (<div>
        <hr/>
        <div style={{ marginTop:'15px' }}>
       <Row key={index}>
        <Col md={4}>
          <img src={list?.img} />
        </Col>
        <Col md={8}>
            <div style={{ marginTop:'5px', marginBottom:'12px' }}>
                <span style={{ padding:'5px', borderRadius:'8px', border:'1px solid #555', color:'#555', backgroundColor:'#f3f3f3' }}>
                    <Icon type="FontAwesome" name="fa-briefcase" size={12} />
                    <span style={{ marginLeft:'5px' }}>{list?.workMode}</span>
                </span>
                <span style={{ marginLeft:'5px', borderRadius:'8px', padding:'5px', border:'1px solid #555', color:'#555', backgroundColor:'#f3f3f3' }}>
                    <Icon type="FontAwesome" name="fa-clock-o" size={12} />
                    <span style={{ marginLeft:'5px' }}>{list?.posted}</span>
                </span>
            </div>
            <div><h5><b>{list?.jobTitle}</b></h5></div>
            <div>
                <div style={{ width:'100%', marginTop:'8px', color:'#aaa' }}>
                    <Icon type="FontAwesome" name="fa-map-marker" size={14} />
                    <span style={{ marginLeft:'5px', fontSize:'13px' }}>{list?.location}</span>
                </div>
            </div>
            <div style={{ display:'flex' }}>
                <div style={{ width:'50%', marginTop:'5px' }}>
                    <span style={{ fontSize:'18px' }}><b>{list?.salaryInHr}</b></span>
                    <span style={{ fontSize:'14px', color:'#777', marginLeft:'5px' }}><b>/ hour</b></span>
                </div>
            </div>
        </Col>
       </Row>
       </div>
       </div>);
    })}
  </Card>);
};

const JobDetails = () =>{
 
 return (<div>
  <Header menulinks={HeaderMenu} activeId="JobSeekers" />
  <ContainerFluid>
    <Row>
        <Col md={12}>
        <Breadcrumb backgroundColor={Colors.light} 
            data={[{ label:'Job Listing', url: process.env.PROJECT_URL+'job-seekers' },
                { label:'Senior Full Stack Engineer', url:'#' }]} />
        </Col>
    </Row>
    <Row>
        <Col md={8}>
          <div style={{ paddingTop:'15px', paddingLeft:'2px' }}>

            <h2 style={{ fontFamily: 'MetropolisBold' }}>Senior Full Stack Engineer</h2>

            <div style={{ display:'flex' }}>
                <div style={{ color:'#bbb' }}>
                    <Icon type="FontAwesome" name="fa-briefcase" size={12} />
                    <span style={{ marginLeft:'5px' }}>Full Time</span>
                </div>

                <div style={{ marginLeft:'12px', color:'#bbb' }}>
                    <Icon type="FontAwesome" name="fa-clock-o" size={12} />
                    <span style={{ marginLeft:'5px' }}>3 min ago</span>
                </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div align="right">
            
            <div>
             <Icon type="FontAwesome" name="fa-facebook" size={22} color="#3c65f5" style={{ paddingTop:'15px', cursor:'pointer', }} />
             <Icon type="FontAwesome" name="fa-twitter" size={22} color="#1da1f2" style={{ paddingTop:'15px', cursor:'pointer', marginLeft:'18px' }} />
             <Icon type="FontAwesome" name="fa-whatsapp" size={24} color="#42bd70" style={{ paddingTop:'15px', cursor:'pointer', marginLeft:'18px' }} />
             <Icon type="FontAwesome" name="fa-linkedin-square" size={24} color="#3c65f5" style={{ paddingTop:'15px', cursor:'pointer', marginLeft:'18px', marginRight:'15px' }} />
             <Button type="primary" style={{ marginTop:'-12px' }}><b>Apply Now</b></Button>
            </div>
          </div>
        </Col>
    </Row>
    <hr/>
    <div style={{ marginTop:'15px' }}>
        <Row>
            <Col md={8}>
              <Card padding={15} backgroundColor="#f9f9f9">
                <div><h4><b>Employment Information</b></h4><hr/></div>
                <EmpInfo data={empInfoData} />
              </Card>
              <div style={{ marginTop:'35px' }}>
                    <div style={{ marginTop:'15px', marginBottom:'15px' }}><h3><b>Welcome to {companyData?.companyName} Team</b></h3></div>
                    <div style={{ fontSize:'16px', lineHeight:'30px' }}>{companyData?.desc}</div>
              </div>
              <div style={{ marginTop:'35px' }}>
                <div style={{ marginTop:'15px', marginBottom:'15px' }}><h3><b>Essential Knowledge, Skills, and Experience</b></h3></div>
                <div style={{ fontSize:'16px', lineHeight:'30px' }}>
                    <ul>
                        {companyData?.skills?.map((skill,index)=>{
                            return (<li key={index}>{skill}</li>);
                        })}
                    </ul>
                </div>
              </div>
              <div style={{ marginTop:'35px' }}>
                <div style={{ marginTop:'15px', marginBottom:'15px' }}><h3><b>Preferred Experience</b></h3></div>
                <div style={{ fontSize:'16px', lineHeight:'30px' }}>
                    <ul>
                        {companyData?.prefExps?.map((prefExp,index)=>{
                            return (<li key={index}>{prefExp}</li>);
                        })}
                    </ul>
                </div>
              </div>
              <hr/>
              <div style={{ marginTop:'25px', marginBottom:'35px' }}>
                <Row>
                    <Col md={4}>
                        <Button type="primary" size={12}><b>Apply Now</b></Button>
                    </Col>
                    <Col md={8}>
                        <div className="pull-right">
                        <span style={{ fontSize:'16px', color:'#555' }}><b>Share this</b></span>
                        <span style={{ margin:'15px' }}>
                            <Icon type="FontAwesome" name="fa-facebook" size={22} color="#3c65f5" style={{ cursor:'pointer' }} />
                            <Icon type="FontAwesome" name="fa-twitter" size={22} color="#1da1f2" style={{ cursor:'pointer', marginLeft:'18px' }} />
                            <Icon type="FontAwesome" name="fa-whatsapp" size={24} color="#42bd70" style={{ cursor:'pointer', marginLeft:'18px' }} />
                            <Icon type="FontAwesome" name="fa-linkedin-square" size={24} color="#3c65f5" style={{ cursor:'pointer', marginLeft:'18px' }} />
                        </span>
                        </div>
                    </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
                <CompanyInfo data={companyData} />
                <div className="mtop15p">
                  <SimiliarJobs />
                </div>
            </Col>
        </Row>
    </div>
  </ContainerFluid>
 </div>);
};

export default JobDetails; 