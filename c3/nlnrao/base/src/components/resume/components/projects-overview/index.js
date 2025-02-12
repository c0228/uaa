import React, { useState } from "react";
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

 const ProfileTech = ({ title, data }) =>{
  const stackKeys = data? Object.keys(data):[];
  return (<div>
  {title?.length>0 && <Header title={title} />}
  {stackKeys?.map((stackKey,i)=>{
    const stackVal = data?.[stackKey];
    return (<div key={i} className="row mtop5p mbot5p">
      <div className="col-xl-5 text-grey2"><b>{stackKey}:</b></div>
      <div className="col-xl-7">{stackVal}</div>
    </div>);
  })}   
  </div>);
 };
 const ProjectDetails = ({ project }) =>{
  const [showDetails, setShowDetails] = useState(false);
  const ShowMoreView = ()=>{
    return (<div align="right" className="mtop15p">
        <span className="curpoint" style={{ border:'1px solid #777', padding:'6px 8px', borderRadius:'8px' }} 
        onClick={()=>setShowDetails(!showDetails)}>{showDetails?<span>- View Less</span>:<span>+ View More</span>}</span>
    </div>);
  };
  const RR = ({ data}) =>{
    return ((<div>
      <div>{data?.desc}</div>
      <ol>
      {data?.details?.map((d,i1)=>{
        return (<li key={i1}><span className="text-grey1"><b>{d?.role}:</b></span>
          <ul>
            {d?.responsibilities?.map((l,i2)=><li key={i2}>{l}</li>)}
          </ul>
      </li>);
      })}
      </ol>
    </div>));
  };
  const Challenges = ({ data }) =>{
    return (<div>
      <ol>
        {data?.map((d,i)=>{
          return (<li key={i} className="mbot15p"><span className="text-grey1"><b>{d?.title}:</b></span>
            <div><span className="text-grey2"><b>Challenge:</b></span> {d?.challenge}</div>
            <div><span className="text-grey2"><b>Solution:</b></span>
              <ul>
              {d?.solution?.map((l,i2)=><li key={i2}>{l}</li>)}
              </ul>
            </div>
          </li>);
        })}
        
      </ol>
    </div>);
  };
  const Achievements = ({ data }) =>{
    return (<div>
      <ol>
        {data?.map((d,i)=>{
          return (<li key={i} className="mbot15p"><span className="text-grey1"><b>{d?.title}:</b></span>
            <div><span className="text-grey2"><b>Achievement:</b></span> {d?.achievement}</div>
            <div><span className="text-grey2"><b>Outcome:</b></span> 
              <ul>
              {d?.outcome?.map((l,i2)=><li key={i2}>{l}</li>)}
              </ul>
            </div>
          </li>);
        })}
        
      </ol>
    </div>);
  };
  return (<div>
    <ShowMoreView />
    <div className={showDetails?"collapse show":"collapse"}>
      <ProfileTech title="Project Tech Stack" data={project?.projectTechStack} /> 
      <Header title="My Role and Responsibilities" />
      <RR data={project?.rolesAndresponsibilities} />
      <Header title="Challenges and Problem Solving Solutions" />
      <Challenges data={project?.challenges} />
      <Header title="Project Achievements and Outcomes" />
      <Achievements data={project?.achievements} />
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
                return (<span key={i} className="badge fs11" style={{ color:'#ccc', border:'1px solid #ccc', padding:'6px', marginRight:'5px' }}>{tag}</span>);
              })}
              </div>
              <div className="mtop15p">
              <ProfileTech title="Project Summary" data={project?.projectDetails} />
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