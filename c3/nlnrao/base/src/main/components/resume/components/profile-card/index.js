import React from "react";
import SocialMediaIcons from "./../social-media-icons/index.js";
import DownloadButton from "./../download-button/index.js";

const ProfileCard = ()=>{
	const data = {
		img:process.env.PROJECT_URL+'assets/profile.png',
		name:"Nellutla L N Rao",
		title:"Full Stack Development Engineer",
		desc:(<>
		Over <span className="text-grey1">11+ years</span> of dynamic experience in software development, with a proven track record 
		of successful project contributions across 
		Telecom, Transportation, E-Commerce, Health, Banking, Automobile and Insurance industries.
		</>),
		kpis:[{
			"label":"Projects",
			"tooltip":"Official Projects worked with IT Companies",
			"value": 9
		},{
			"label":"POC's",
			"tooltip":"Proof of Concepts which were developed to supports these Official Projects",
			"value": 6
		}]
	};
	return (<div align="center" className="pt-3">
	<img src={data?.img} className="resume-profilepic" />  
	<div className="resume-title mt-2"><b>{data?.name}</b></div>
	<div><b>{data?.title}</b></div>
		   <SocialMediaIcons />
		   <DownloadButton />
		   <div className="mt-3">{data?.desc}</div>
		   <div className="mt-2 resume-flex-container">
			   {data?.kpis?.map((kpi,index)=>{
				return (<div key={index} className="resume-flex-box">
					<div className="curpoint" data-bs-toggle="tooltip" data-bs-placement="right" title={kpi?.tooltip}>
				 		<div className="fs12 uppercase" style={{ color:'#fff', paddingBottom:'4px' }}><b>{kpi?.label}</b></div>
						<div className="text-grey1 fs20">{kpi?.value}</div>
					</div>
				</div>);
			   })}
		   </div>
	   </div>);
 };

 export default ProfileCard;