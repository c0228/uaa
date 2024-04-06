import React, { useContext } from "react";
import { Icon, Button } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";

const LeftContainer = ()=>{
 const { updateResumeStatus } = useContext(ProfileContext);

 const GoBack = ()=>{
  return (<Button type="outline-light" label={<>
    <Icon type="FontAwesome" name="fa-arrow-left" size={12} style={{ marginRight:'5px' }} />
    <b>Go Back</b>
  </>} size={11}
  onClick={()=>updateResumeStatus('closed')} />);
 };

 const SocialMediaIcons = () =>{
  const data = [{
    "url":"https://twitter.com/NLNRao0228",
    "icon":"twitter", 
  },{
    "url":"#",
    "icon":"instagram"
  },{
    "url":"#",
    "icon":"linkedin"
  },{
    "url":"#",
    "icon":"github"
  },{
    "url":"#",
    "icon":"envelope"
  }];
  return (<div className="mt-2 resume-socialMedia">
    {data?.map((d, i)=>{
        return (
        <div key={i} className="resume-socialMedia-icon">
            <a href={d?.url} target="_blank" style={{ textDecoration:'none', color:'#999' }}>
            <i className={"fa fa-"+d?.icon+" fs24"} aria-hidden="true"></i>
            </a>
        </div>);
    })}
  </div>);
 };

 const DownloadButton = ()=>{
  return (<div className="mt-2">
  <Button type="outline-warning" label={<>
<Icon type="FontAwesome" name="fa-download" size={14} style={{ marginRight:'5px' }} />
<span style={{ fontFamily:'Arial, sans-serif' }}><b>Download My Resume</b></span>
</>} size={12} />
  </div>);
 };

 return (<>
 <GoBack />
 <div align="center" className="pt-3">
 <img src="https://storage.googleapis.com/turing_developers/avatar/1696419094281_WhatsApp%20Image%202023-10-04%20at%2017.00.51.jpeg" className="resume-profilepic" />  
 <div className="resume-title mt-2"><b>Nellutla L N Rao</b></div>
 <div><b>Full Stack Development Engineer</b></div>
		<SocialMediaIcons />
		<DownloadButton />
		<div className="mt-2">
{/*<style>
.textRed-bgDark { color:#ebb5b1;padding-bottom:3px;border-bottom:1px solid #ebb5b1;cursor:pointer; }
.textRed-bgDark:hover { color:#f99b95;border-bottom:1px solid #f99b95; }
</style>
			<span className="textRed-bgDark">Check My Availability</span>*/}
		</div>
		<div className="mt-3">
		Over <span className="text-grey1">11+ years</span> of dynamic experience in software development, with a proven track record of successful project contributions across 
		Telecom, Transportation, E-Commerce, Health, Banking, Automobile and Insurance industries.
		</div>
		<div className="mt-2 resume-socialMedia">
			
			<div className="resume-socialMedia-icon">
				<span className="curpoint" data-bs-toggle="tooltip" data-bs-placement="right" title="Official Projects worked with IT Companies">
				 <span className="fs12 text-grey1"><b>PROJECTS</b></span><br/><span className="mt-2 f18">9</span>
				</span>
			</div>
			<div className="resume-socialMedia-icon">
				<span className="curpoint" data-bs-toggle="tooltip" data-bs-placement="right" title="Proof of Concepts which were developed to supports these Official Projects">
				 <span className="fs12 text-grey1"><b>POC's</b></span><br/><span className="mt-2 f18">6</span>
				</span>
			</div>
		</div>
	</div>
    <div className="pt-2">
		<div className="resume-header-main"><b>My Projects List (Industry-wise)</b></div>
		  <div id="resume-industry-projects" align="left">
				<div className="mb-1 white"><b>TELECOMMUNICATION INDUSTRY</b></div>
				<ol>
					<li>
					<b>Cisco - Voice Developers Portal</b>
					<ul>
						<li>
							<a href="#resumeProject1" className="resume-hyperlink">
								<div className="pt-1 pb-1">
									<b>CCBU Demo Portal <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
								</div>
							</a>
						</li>
						<li>
							<a href="#resumeProject2" className="resume-hyperlink">
								<div className="pt-1 pb-1"><b>Vocal Flow Simulator <span className="badge bg-success pull-right f11">POC</span></b></div>
							</a>
						</li>
					</ul>
					</li>
					<li>
					<a href="#resumeProject2" className="resume-hyperlink">
					<div className="pt-1 pb-1"><b>Roger's IVR Solutions <span className="badge bg-warning pull-right black f11">PROJECT</span></b></div>
					</a>
					</li>
				</ol>
				
				<div className="mb-1 white"><b>TRANSPORTATION INDUSTRY</b></div>
				<ol start="3">
					<li>
					<b>Greyhound Bus Transportation</b>
					<ul>
						<li>
							<a href="#resumeProject1" className="resume-hyperlink">
								<div className="pt-1 pb-1">
									<b>Fleet Management and Booking System <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
								</div>
							</a>
						</li>
						<li>
							<a href="#resumeProject2" className="resume-hyperlink">
								<div className="pt-1 pb-1"><b>Live GPS Tracking and Geofencing System <span className="badge bg-success pull-right f11">POC</span></b></div>
							</a>
						</li>
					</ul>
					</li>
					<li>
					<a href="#resumeProject2" className="resume-hyperlink">
					<div className="pt-1 pb-1"><b>Toyota's Car Dealer System <span className="badge bg-warning pull-right black f11">PROJECT</span></b></div>
					</a>
					</li>
				</ol>
				
				<div className="mb-1 white"><b>E-COMMERCE INDUSTRY</b></div>
				<ol start="5">
					<li>
					<b>Safeway Retail Service</b>
					<ul>
						<li>
							<a href="#resumeProject1" className="resume-hyperlink">
								<div className="pt-1 pb-1">
									<b>Order, Returns and Refund System <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
								</div>
							</a>
						</li>
						<li>
							<a href="#resumeProject2" className="resume-hyperlink">
								<div className="pt-1 pb-1"><b>Personalized Recommendation Engine <span className="badge bg-success pull-right f11">POC</span></b></div>
							</a>
						</li>
						<li>
							<a href="#resumeProject2" className="resume-hyperlink">
								<div className="pt-1 pb-1"><b>Visual Search & Augmented Reality <span className="badge bg-success pull-right f11">POC</span></b></div>
							</a>
						</li>
					</ul>
					</li>
					<li>
					<a href="#resumeProject2" className="resume-hyperlink">
					<div className="pt-1 pb-1"><b>Walmart's Payment Gateway <span className="badge bg-warning pull-right black f11">PROJECT</span></b></div>
					</a>
					</li>
				</ol>
				
				<div className="mb-1 white"><b>INSURANCE INDUSTRY</b></div>
				<ol start="7">
					<li>
						<a href="#resumeProject1" className="resume-hyperlink">
							<div className="pt-1 pb-1">
								<b>United Health Group (UHG)'s Cirrus System <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
							</div>
						</a>
					</li>
					<li>
						<a href="#resumeProject1" className="resume-hyperlink">
							<div className="pt-1 pb-1">
								<b>All State Insurance Company's Canonical Modeling Tool <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
							</div>
						</a>
					</li>
				</ol>
				
				<div className="mb-1 white"><b>BANKING INDUSTRY</b></div>
				<ol start="9">
					<li>
						<b>Northern Trust Bank</b>
						<ul>
							<li>
								<a href="#resumeProject1" className="resume-hyperlink">
									<div className="pt-1 pb-1">
										<b>Nexus System <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
									</div>
								</a>
							</li>
							<li>
								<a href="#resumeProject1" className="resume-hyperlink">
									<div className="pt-1 pb-1">
										<b>Pinnacle Files : A Comprehensive File Management Platform <span className="badge bg-success pull-right f11">POC</span></b>
									</div>
								</a>
							</li>
							<li>
								<a href="#resumeProject1" className="resume-hyperlink">
									<div className="pt-1 pb-1">
										<b>Blockchain based Audit Trial and Logging System <span className="badge bg-success pull-right f11">POC</span></b>
									</div>
								</a>
							</li>
						</ul>
					</li>
				</ol>
				
				<div className="mb-1 white"><b>CLOUD AND INFRASTRUCTURE INDUSTRY</b></div>
				<ol start="10">
					<li>
						<a href="#resumeProject1" className="resume-hyperlink">
							<div className="pt-1 pb-1">
								<b>ZS Cloud System <span className="badge bg-warning pull-right black f11">PROJECT</span></b>
							</div>
						</a>
					</li>
				</ol>
		  </div>
	</div>

 </>);
};

export default LeftContainer;