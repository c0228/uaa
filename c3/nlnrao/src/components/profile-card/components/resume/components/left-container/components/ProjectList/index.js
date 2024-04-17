import React from "react";

const ProjectList = () =>{
 const data = {
    "Telecommunication Industry":[{
        "title": "Cisco - Voice Developers Portal",
        "works": [{
            "title": "CCBU Demo Portal",
            "isProject": true
        },{
            "title":"Vocal Flow Simulator",
            "isPOC": true
        }]
    },{
        "title": "Roger's IVR Solutions",
        "isProject": true
    }],
    "Transportation Industry":[{
        "title": "Greyhound Bus Transportation",
        "works": [{
            "title": "Fleet Management and Booking System",
            "isProject": true
        },{
            "title": "Live GPS Tracking and Geofencing System",
            "isPOC": true
        }]
    },{
        "title":"Toyota's Car Dealer System",
        "isProject": true
    }],
    "E-Commerce / Retailers Industry":[{
        "title":"Safeway Retail Service",
        "works":[{
            "title": "Order, Returns and Refund System",
            "isProject": true
        },{
            "title": "Personalized Recommendation Engine",
            "isPOC": true
        },{
            "title": "Visual Search & Augmented Reality",
            "isPOC": true
        }]
    },{
        "title": "Walmart Retailer Corp.",
        "works":[{
            "title":"Payment Gateway",
            "isProject": true
        }]
    },{
        "title":"ZS AI & Analytics CRM",
        "works":[{
            "title":"Personalize.AI Solution",
            "isProject": true
        }]
    }],
    "Insurance Industry":[{
        "title":"United Health Group",
        "works":[{
            "title":"Cirrus System",
            "isProject": true
        }]
    },{
        "title":"All State Insurance",
        "works":[{
            "title":"Canonical Modeling Tool",
            "isProject": true
        }]
    }],
    "Banking Industry":[{
        "title":"Northern Trust Bank",
        "works":[{
            "title":"Nexus System",
            "isProject": true
        },{
            "title":"Pinnacles Files: A Comprehensive File Management Platform",
            "isPOC": true
        },{
            "title":"Blockchain based Audit Trial and Logging System",
            "isPOC": true
        }]
    }]
 };
 return (<div className="pt-2">
	<div className="resume-header-main"><b>My Projects List (Industry-wise)</b></div>
    <div id="resume-industry-projects" align="left">
    {Object.entries(data).map(([industry, projects], ind) => {
 return (<div key={ind} style={{ marginBottom:'20px', float:'left' }}>
    <div className="mb-1 white uppercase" style={{ color:'#ccc' }}><b>{industry}</b></div>
    <ol>
    {projects?.map((project,index)=>{
        return (
            <li key={index}  style={{  width:'100%', marginTop:'5px', marginBottom:'5px', float:'left' }}>
            <div style={{ width:'100%', float:'left' }}>
                <div style={{ width: '75%', height:'auto', float:'left' }}>
                    <a href="#" className="resume-hyperlink">
                        <b>{project?.title}</b>
                    </a>
                </div>
                <div style={{ width: '25%', height:'auto', float:'left' }}>
                        {project?.isProject && (<span className="badge bg-warning pull-right text-black fs12">PROJ</span>)}
                        {project?.isPOC && (<span className="badge bg-success pull-right text-white fs12">POC</span>)}
                </div>
            </div>
            <div style={{ width:'100%', float:'left' }}>
            <ul>
            {project?.works?.map((work,i)=>{
                return (<li key={i} style={{  width:'100%', marginTop:'5px', marginBottom:'5px', float:'left' }}>
                    <div style={{ width: '75%', height:'auto', float:'left' }}>
                        <a href="#resumeProject1" className="resume-hyperlink">
                            <b>{work?.title}</b>
                        </a>
                    </div>
                    <div style={{ width: '25%', height:'auto', float:'left' }}>
                        {work?.isProject && (<span className="badge bg-warning pull-right text-black fs12">PROJ</span>)}
                        {work?.isPOC && (<span className="badge bg-success pull-right text-white fs12">POC</span>)}
                    </div>
                </li>);
            })}
            </ul>
            </div>
            </li>
        );
    })}</ol>
    </div>);
    })}
 </div>
 </div>);
};

export default ProjectList;