import React, { useState } from "react";
import { Icon } from "e-ui-react";
import ProfileTechStack from "./components/profile-tech-stack/index.js";
import { data } from './data.js';
import './index.css';

const ProjectOverview = () =>{
  
 const Company = ({ title, duration})=>{
  return (<div className="resume-header-sub1 pt-1 pb-1 px-3 mb-3">
	<span className="uppercase"><b>{title}</b></span>
	<span className="pull-right"><b>({duration})</b></span>
  </div>);
 };

 const Header = ({ title })=>{
  return (<div className="mbot15p"><span className="resume-project-subtitle "><b>{title}</b></span></div> );
 };

const isJSON = (value) => {
  const isPlainObject = (value) => value && typeof value === "object" && !React.isValidElement(value) && !Array.isArray(value);
  if (isPlainObject(value)) return true; // plain object, recurse
  if (typeof value !== "string") return false; // not a string, not JSON
  try {
    const parsed = JSON.parse(value);
    return isPlainObject(parsed) || Array.isArray(parsed);
  } catch {
    return false;
  }
};

/*
 const ProfileTech = ({ title, data }) =>{
  const stackKeys = data? Object.keys(data):[];
  const [showStack, setShowStack] = useState(null);
  return (<div>
  {title?.length>0 && <Header title={title} />}
  {stackKeys?.map((stackKey,i)=>{
    const stackVal = data?.[stackKey];
    // If the value is JSON, parse it and render recursively
    if (isJSON(stackVal)) {
      const parsedVal = typeof stackVal === "string" ? JSON.parse(stackVal) : stackVal;
      return (<div>
      <div style={{ borderTop:'1px dotted #ccc', borderBottom:'1px dotted #ccc', paddingTop:'5px', paddingBottom:'5px',
          cursor:'pointer', fontSize:'12px' }}><b>{stackKey} <span className="float-end" onClick={()=>setShowStack(i)}>
              <Icon type="FontAwesome" name={(showStack===i)?"fa-angle-double-down":"fa-angle-double-up"} size={16} />
            </span></b></div>
      <div className={(showStack===i)?"collapse in":"collapse"}>
      <ProfileTech data={parsedVal} />
      </div>
      </div>);
    } else {
    // Otherwise, render normally
      return (<div key={i} className="row mtop5p mbot5p">
        <div className="col-xl-5 text-grey2"><b>{stackKey}:</b></div>
        <div className="col-xl-7">{stackVal}</div>
      </div>);
    }
  })}   
  </div>);
 };
 */
 const ProjectDetails = ({ project }) =>{
  const [showDetails, setShowDetails] = useState(false);
  const ShowMoreView = ()=>{
    return (<div align="right" className="mtop15p">
        <span className="curpoint" style={{ border:'1px solid #777', padding:'6px 8px', borderRadius:'8px' }} 
        onClick={()=>setShowDetails(!showDetails)}>{showDetails?<span>- View Less</span>:<span>+ View More</span>}</span>
    </div>);
  };
  const RR = ({ data }) =>{
    console.log(data);
    return ((<div>
      <ol>
        {data?.map((d,i)=>{
          return (<li key={i} style={{ marginTop:'4px', marginBottom:'4px' }}>{d}</li>);
        })}
      </ol>
    </div>));
  };
  const Challenges = ({ data }) =>{
    return (<div>
        {data?.map((d,i)=>{
          return (<div key={i} className="mbot15p">
            {/*<div className="text-grey1" style={{ padding:'5px', marginBottom:'8px', color:'#282c34', backgroundColor:'#aaa' }}>
              <b>{d?.title}:</b>
            </div>*/}
            <div className="text-grey1"><b>{d?.title}:</b></div>
            <div style={{ padding:'5px' }}>
              <div><span className="text-grey1"><b>Challenge:</b></span> {d?.challenge}</div>
              <div><span className="text-grey1"><b>Solution:</b></span> {d?.solution}</div>
            </div>
          </div>);
        })}
    </div>);
  };
  const Achievements = ({ data }) =>{
    return (<div>
      <ol>
        {data?.map((d,i)=>{
          return (<li key={i} style={{ marginTop:'4px', marginBottom:'4px' }}>{d}</li>);
        })}
        
      </ol>
    </div>);
  };
  return (<div>
    <ShowMoreView />
    <div className={showDetails?"collapse show":"collapse"}>
      <ProfileTechStack title="Project Tech Stack" data={project?.projectTechStack} /> 
      <Header title="My Role and Responsibilities" />
      <RR data={project?.rolesAndresponsibilities} />
      <div className="mtop15p">
      <Header title="Challenges and Problem Solving Solutions" />
      <Challenges data={project?.challenges} />
      </div>
      <div style={{ marginBottom:'8px' }}>
      <Header title="Project Achievements and Outcomes" />
      <Achievements data={project?.achievements} />
      </div>
    </div>
  </div>);
 };
 return (<div>
 {data?.map((dat,i1)=>{
    return (<div key={i1}>
     <ul className="timeline-ui">
     {dat?.timelines?.map((t,i2)=>{
      return (<li key={i2} className="timeline-event">
       <label className="timeline-event-icon"></label>
       <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">{t?.timeline}</p>
        
        <div>
         <h4 className="resume-project-title">{i2+1}. <span className="uppercase">{t?.workTitle}</span></h4>
         <div>
         {t?.projects?.map((project,i3)=>{
           return (<div key={i3} style={{ padding:'15px', marginBottom:'15px', borderRadius:'8px', border:'1px dashed #777' }}>
            <div className="resume-project-title uppercase">{project?.title} 
              {project?.isProject && (<span className="badge bg-warning pull-right text-black fs11">PROJECT</span>)}
              {project?.isPOC && (<span className="badge bg-success pull-right text-white fs11">POC</span>)}
            </div>
            <div className="mtop15p">
              <div className="mbot15p"><span className="resume-project-subtitle"><b>About Project</b></span></div>
              <div>{project?.desc}</div>
              <div className="mtop5p">
              {project?.tags?.map((tag,i)=>{
                return (<span key={i} className="badge resume-project-badge fs11">{tag}</span>);
              })}
              </div>
              <div className="mtop15p">
              <ProfileTechStack title="Project Summary" data={project?.projectDetails} />
              </div>
              <ProjectDetails project={project} />
            </div>
          </div>);
         })}
         </div>
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