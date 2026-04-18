import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: How Micro Frontend Came Into Existence</b></h4></div>
		<div className="mtop5p">In the early days of web development, applications were simple. A single HTML file, some CSS, 
			and a bit of JavaScript were enough. As businesses grew, <b>monolithic frontend applications</b> emerged—large 
			codebases where UI, business logic, and state management lived together.</div>
		<div>With the rise of <b>Single Page Applications (SPAs)</b> using frameworks like <b>Angular, React, and Vue.js,</b> frontends 
			became more powerful—but also more complex.</div>
		<div className="mtop15p"><h5 className="blog-head"><b>Problems with Large Frontend Monoliths:</b></h5></div>
		<div>
			<ul>
				<li className="mtop5p">One small change required rebuilding and redeploying the entire app</li>
				<li className="mtop5p">Multiple teams working on the same codebase caused merge conflicts</li>
				<li className="mtop5p">Scaling development speed became difficult</li>
				<li className="mtop5p">Technology upgrades were risky and time-consuming</li>
			</ul>
		</div>
		<div className="mtop5p">At the same time, backend teams successfully solved similar 
			problems using <b>Microservices</b>. This naturally led to a question:</div>
		<div className="mtop5p"><i>If we can split backend systems into microservices, why not do the same for the frontend?</i></div>
		<div>This idea led to the birth of <b>Micro Frontend Architecture</b> — first popularized by <b>ThoughtWorks</b> around 2016.</div>
		</Card>
	</div>
    
	<div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is Micro Frontend?</b></h2></div>
	<div className="mtop5p"><b>Micro Frontend</b> is an architectural approach where a frontend application is decomposed 
	into <b>small, independent, and loosely coupled UI applications,</b> owned by different teams.</div>
	<div className="mtop5p">Each micro frontend:</div>
	<div>
		<ul>
			<li className="mtop5p">Represents a <b>business feature</b> (e.g., Cart, Profile, Payments)</li>
			<li className="mtop5p">Can be developed, tested, and deployed <b>independently</b></li>
			<li className="mtop5p">Can use <b>different frameworks or versions</b></li>
			<li className="mtop5p">Is integrated into a single user experience</li>
		</ul>
	</div>
	<div className="mtop5p"><b>Simple Definition:</b></div>
	<div className="mtop5p"><b>Micro Frontend = Microservices for the UI layer</b></div>
 </div>);
};

export default Introduction;