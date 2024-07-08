import React, { useState } from "react";
import './index.css';

const data = [{
 "companyName":"Synergy Netsoft pvt. ltd",
 "workDuration":"5 years 8 months",
 "timelines":[{
    "timeline":"June 2012 ~ August 2013",
    "workTitle":"Cisco - Voice Developers Platform",
    "projects":[{
        "title":"CCBU Demo Portal",
        "projectType":"Project",
        "desc":(<div>Customer Contact Business Unit (CCBU) is an IVR Architecture based telecom platform that is used to deploy and test the 
        IVR Phone-call projects. This Project consists of VXML Server that configured to a Phone Number and a Web Portal where customer can remotely 
        deploy their VXML Application into the VXML Server.</div>),
        "tags":["Website"],
        "projectTechStack":{
            "Software Life Cycle": "Agile Methodology",
            "Project Architecture": "Microservice Architecture",
            "Management Tools": "Jira, Atlassian Confluence",
            "Frontend Stack": "HTML, CSS, Javascript, Bootstrap, JQuery, Ajax, Angular JS",
            "Frontend Unit Testing": "Jasmine Framework and Karma Test Runner",
            "Backend Stack": "Java 7, Spring Framework (v.3), Spring MVC with Hibernate (Backend API Development)",
            "Backend Unit Testing": "JUnit Testing Framework and Mockito Framework",
            "Telecom Stack": "VoIP Gateway, Cisco Unified Intelligent Contact Management Enterprise (ICME), VXML Server, Cisco Call Studio",
            "End-to-End Testing": "Java Selenium Framework",
            "Protocols Used": "HTTP / HTTPS, SIP, H.323, WebSocket protocols and WebRTC Technologies",
            "Database Server": "Microsoft SQL Server",
            "Web Server": "GlassFish Web Server",
            "DevOps & CICD Tools": "Github (Source Version Control), Jenkins (Pipeline Orchestration), FindBugs and SonarCube Code Coverage Tool",
            "Integrated Development Environment (IDE)": (<div>NetBeans IDE,<br/> Cisco Call Studio</div>),
            "Browsers Supported": "Mozilla FireFox, Google Chrome and Internet Explorer 5, 6, 7"
        }
    }]
 }]
}];

const ProjectOverview = () =>{
 const Company = ({ title, duration})=>{
  return (<div className="resume-header-sub1 pt-1 pb-1 px-3 mb-3">
	<span className="uppercase"><b>{title}</b></span>
	<span class="pull-right"><b>({duration})</b></span>
  </div>);
 };
 const ProjectDetails = ({ project }) =>{
  const [showDetails, setShowDetails] = useState(false);
  const stackKeys = Object.keys(project?.projectTechStack);
  const ShowMoreView = ()=>{
    return (<div align="right">
        <span className="curpoint" onClick={()=>setShowDetails(!showDetails)}>{showDetails?<span>- View Less</span>:<span>+ View More</span>}</span>
    </div>);
  };

  return (<div>
    <ShowMoreView />
    <div className={showDetails?"collapse show":"collapse"}>
    <div className="mbot15p"><span className="resume-project-subtitle "><b>Project Tech Stack</b></span></div> 
    {stackKeys?.map((stackKey,i)=>{
      const stackVal = project?.projectTechStack?.[stackKey];
      return (<div key={i} className="row mtop5p mbot5p">
        <div className="col-xl-5 text-grey2"><b>{stackKey}:</b></div>
        <div className="col-xl-7">{stackVal}</div>
      </div>);
    })}    
    </div>
  </div>);
 };
 return (<div>
 {data?.map((dat,i1)=>{
    return (<div key={i1}>
     <Company title={dat?.companyName} duration={dat?.workDuration} />
     <ul className="timeline-ui">
     {dat?.timelines?.map((t,i2)=>{
      return (<li className="timeline-event">
       <label className="timeline-event-icon"></label>
       <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">{t?.timeline}</p>
        
        <div>
         <h4 className="resume-project-title">{i2+1}. <span className="uppercase">{t?.workTitle}</span></h4>
         {t?.projects?.map((project,i3)=>{
           return (<div>
            <div className="resume-project-title uppercase">{project?.title} <span className="badge bg-warning text-black pull-right">{project?.projectType}</span></div>
            <div className="mtop15p mbot15p">
              <div className="mbot15p"><span className="resume-project-subtitle"><b>About Project</b></span></div>
                <div>{project?.desc}</div>
                <div className="mtop5p">
                {project?.tags?.map((tag,i)=>{
                  return (<span key={i} className="badge fs11" style={{ color:'#ccc', border:'1px solid #ccc', padding:'6px' }}>{tag}</span>);
                })}
              </div>
              <ProjectDetails project={project} />
            </div>
          </div>);
         })}
        </div>
      </div>
     </li>);
    })}
   </ul>
  </div>);
 })}
 </div>);
};

export default ProjectOverview;