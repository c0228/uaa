import React from "react";
import SocialMediaIcons from "./../SocialMediaIcons/index.js";
import DownloadButton from "./../DownloadButton/index.js";

const ProfileCard = ()=>{
	const data = {
		img:"https://storage.googleapis.com/turing_developers/avatar/1696419094281_WhatsApp%20Image%202023-10-04%20at%2017.00.51.jpeg",
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
					<span className="curpoint" data-bs-toggle="tooltip" data-bs-placement="right" title={kpi?.tooltip}>
				 		<span className="fs12 text-grey1 uppercase"><b>{kpi?.label}</b></span><br/>
						<span className="mt-2 f18">{kpi?.value}</span>
					</span>
				</div>);
			   })}
		   </div>
	   </div>);
 };

 export default ProfileCard;