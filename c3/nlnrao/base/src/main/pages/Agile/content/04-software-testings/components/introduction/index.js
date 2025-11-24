import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 const IntroParagraph = ({ children }) =>{
	return (<div style={{ marginTop:'15px', borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', paddingTop:'5px', paddingBottom:'5px' }}>
		<div>{children}</div>
	</div>);
 }
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
			<div><h4 className="blog-head"><b>Pre-Introduction: How Software Testing Came Into the Picture</b></h4></div>
			<div className="mtop15p">Back in the early days of computing, software systems were extremely simple—small programs 
				designed to perform single tasks. As long as the code compiled and produced an expected output, developers 
				considered the job “done.”</div>
			<div className="mtop15p">But as software began to grow—more code, more users, more complexity—errors became a natural 
				and unavoidable part of development. A single bug could cause system crashes, financial losses, or even 
				life-threatening failures in fields like aviation and healthcare.</div>
			<div className="mtop15p">This rising complexity created a strong need to <b>verify software quality</b> before releasing 
			it. That’s how software testing slowly evolved from a small developer activity to a dedicated and highly specialized 
			discipline. Today, testing isn’t optional—it’s a crucial phase in every software development lifecycle.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
	<div className="mtop15p">Software testing is the process of evaluating a software application to ensure it meets the required 
		standards of quality, functionality, performance, security, and user experience. The goal is simple: <b>to identify 
			defects before the software reaches the user.</b></div>
	<div className="mtop15p">Testing helps developers build confidence in their code and ensures that the final product behaves as 
		expected under different conditions. Over the years, testing has expanded into multiple categories and methodologies, each 
		serving a specific purpose.</div>
	
	<div className="mtop15p"><h2 className="blog-head"><b>Types of Software Testing</b></h2></div>
	<div>Below are the major types of software testing widely used in modern development practices.</div>
	<IntroParagraph>
		Based on functionality and its scope, Testing is divided into 
		two parts - <i><u>Functional Testing</u></i> and <i><u>Non-Functional Testing</u></i>
	</IntroParagraph>
	<div className="mtop15p"><h4 className="blog-head"><b>1. Functional Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
		<div>Functional testing focuses on verifying <b>what the system does.</b> It checks whether every feature 
			works according to the requirement specification.</div>
		<div className="mtop5p"><b>Key sub-types include:</b> <i><u>Unit Testing</u></i>, <i><u>Integration Testing</u></i>, 
			<i><u>System Testing</u></i>, <i><u>User Acceptance Testing (UAT)</u></i>, 
			<i><u>Smoke & Sanity Testing</u></i> and <i><u>Regression Testing</u></i></div>
		<div className="list-group mtop15p">
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Unit Testing</b></h5></div>
				<div>Testing individual components or functions.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Integration Testing</b></h5></div>
				<div>Ensuring multiple modules work together.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>System Testing</b></h5></div>
				<div>Testing the entire application as a whole.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>User Acceptance Testing (UAT)</b></h5></div>
				<div>Final testing by end-users or clients.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Smoke & Sanity Testing</b></h5></div>
				<div>Quick checks to ensure basic functionality works.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Regression Testing</b></h5></div>
				<div>Whenever a new change is introduced—bug fix, feature addition, code improvement—it can accidentally 
					break existing features. Regression testing ensures old functionality still works as expected.</div>
				<div>Regression is often automated due to its repetitive nature.</div>
			</div>
		</div>
	</Card>

	<div className="mtop15p"><h4 className="blog-head"><b>2. Non-Functional Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
		<div>This type tests <b>how well</b> the system performs rather than what it does.</div>
		<div className="mtop15p"><b>Important sub-types include:</b> <i><u>Performance Testing</u></i>, 
			<i><u>Load & Stress Testing</u></i>, <i><u>Security Testing</u></i>, 
			<i><u>Usability Testing</u></i> and <i><u>Compatibility Testing</u></i></div>
		<div className="list-group">
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Performance Testing</b></h5></div>
				<div>Evaluates speed and scalability.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Load & Stress Testing</b></h5></div>
				<div>Checks how the system behaves under heavy usage.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Security Testing</b></h5></div>
				<div>Assesses vulnerabilities and attack resistance.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Usability Testing</b></h5></div>
				<div>Ensures the software is easy and intuitive to use.</div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Compatibility Testing</b></h5></div>
				<div>Verifies behavior across browsers, devices, or OS versions.</div>
			</div>
		</div>
	</Card>

	<IntroParagraph>
		Based on testing doing methods, Testing is divided into 
		two parts - <i><u>Manual Testing</u></i> and <i><u>Automation Testing</u></i>
	</IntroParagraph>

	<div className="mtop15p"><h4 className="blog-head"><b>1. Manual Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
		<div>In manual testing, testers execute test cases <b>without any automation tools.</b></div>
		<div>It is ideal for:</div>
		<div>
			<ul>
				<li className="mtop5p">Exploratory testing</li>
				<li className="mtop5p">Usability testing</li>
				<li className="mtop5p">Small projects</li>
				<li className="mtop5p">Cases where human judgment is essential</li>
			</ul>
		</div>
		<div>Manual testing relies heavily on the tester’s experience, creativity, and domain knowledge.</div>

		<div className="list-group">
			<div className="list-group-item">
				<div><h5><b>Exploratory Testing</b></h5></div>
				<div>This is a free-form testing approach where testers explore the application without pre-defined test cases.</div>
				<div>Best for discovering:</div>
				<div>
					<ul>
						<li className="mtop5p">Hidden bugs</li>
						<li className="mtop5p">UI issues</li>
						<li className="mtop5p">Edge cases</li>
					</ul>
				</div>
				<div>It relies on tester creativity and domain expertise.</div>
			</div>
		</div>
	</Card>

	<div className="mtop15p"><h4 className="blog-head"><b>2. Automation Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
		<div>Here, testers use tools to execute test cases and compare actual vs. expected results automatically.</div>
		<div>Automation is preferred for:</div>
		<div>
			<ul>
				<li className="mtop5p">Repetitive regression tests</li>
				<li className="mtop5p">Large-scale systems</li>
				<li className="mtop5p">CI/CD pipelines</li>
				<li className="mtop5p">High-volume test execution</li>
			</ul>
		</div>
		<div><b>Popular automation tools include:</b></div>
		<div>
			<ul>
				<li className="mtop5p">Selenium</li>
				<li className="mtop5p">Playwright</li>
				<li className="mtop5p">Cypress</li>
				<li className="mtop5p">Appium</li>
				<li className="mtop5p">JUnit & TestNG</li>
			</ul>
		</div>
	</Card>

	<IntroParagraph>
		Based on color box testing, Testing is divided into 
		three parts - <i><u>White Box Testing</u></i>, <i><u>Black Box Testing</u></i> and <i><u>Grey Box Testing</u></i>
	</IntroParagraph>

	<div className="mtop15p"><h4 className="blog-head"><b>1. White Box Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
		<div>This method involves testing the <b>internal structure</b> or logic of the code. Testers must know the internal 
			flow of the application.</div>
		<div>Types include:</div>
		<div>
			<ul>
				<li className="mtop5p">Code Coverage Testing</li>
				<li className="mtop5p">Control Flow Testing</li>
				<li className="mtop5p">Path Testing</li>
				<li className="mtop5p">Unit Testing</li>
			</ul>
		</div>
		<div className="list-group mtop15p">
	  		<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Code Coverage Testing</b></h5></div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Control Flow Testing</b></h5></div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Path Testing</b></h5></div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Unit Testing</b></h5></div>
			</div>
		</div>
	</Card>

	<div className="mtop15p"><h4 className="blog-head"><b>2. Black Box Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
	<div>This method tests the software <b>without any knowledge of internal code.</b> Testers focus on inputs and expected 
		outputs.</div>
	<div>Ideal for <i><u>Acceptance testing</u></i>, <i><u>System testing</u></i> and <i><u>User-oriented validations</u></i>.</div>
	<div className="list-group mtop15p">
	  <div className="list-group-item" style={{ backgroundColor:'#fff' }}>
		<div><h5><b>Acceptance Testing</b></h5></div>
		<div>This ensures the product is ready for release. It checks if the software meets business 
		requirements and provides value to the end-users. Acceptance testing is usually the final checkpoint before 
		deployment.</div>
	  </div>
	  <div className="list-group-item" style={{ backgroundColor:'#fff' }}>
		<div><h5><b>System Testing</b></h5></div>
		<div></div>
	  </div>
	  <div className="list-group-item" style={{ backgroundColor:'#fff' }}>
		<div><h5><b>User-oriented Testing</b></h5></div>
		<div></div>
	  </div>
	</div>
	</Card>

	<div className="mtop15p"><h4 className="blog-head"><b>3. Grey Box Testing</b></h4></div>
	<Card padding={15} backgroundColor="#f8f8f8">
		<div>A blend of white box and black box testing. Testers have partial knowledge of internal logic but focus mostly on 
		external behavior.</div>
		<div>Useful for <i><u>Integration testing</u></i>, <i><u>Security testing</u></i> and <i><u>End-to-end Testing</u></i>.</div>
		<div className="list-group mtop15p">
	  		<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Integration Testing</b></h5></div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>Security Testing</b></h5></div>
			</div>
			<div className="list-group-item" style={{ backgroundColor:'#fff' }}>
				<div><h5><b>End-to-end Testing</b></h5></div>
			</div>
		</div>
	</Card>

	<IntroParagraph>
		Based on environment testing, Testing is divided into 
		two parts - <i><u>Alpha Testing</u></i> and <i><u>Beta Testing</u></i>
	</IntroParagraph>

	<div className="mtop15p"><h4 className="blog-head"><b>Alpha and Beta Testing</b></h4></div>
	<Card padding={15} backgroundColor="#eee">
		<div>These testing types ensure real-world usage feedback before the final release.</div>
		<div>
			<ul>
				<li className="mtop5p"><b>Alpha Testing –</b> Done internally by the QA team or selected users.</li>
				<li className="mtop5p"><b>Beta Testing –</b> Done externally by real users in real environments.</li>
			</ul>
		</div>
		<div>This helps uncover usability issues, unexpected bugs, or environment-specific errors.</div>
	</Card>

 </div>);
};

export default Introduction;