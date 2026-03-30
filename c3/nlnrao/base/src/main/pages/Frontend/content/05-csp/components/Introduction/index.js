import React from "react";
import { Card, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const WoCSP_EXAMPLE_JS = `<script>
  eval(userInput);
</script>`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: Why CSP Was Introduced</b></h4></div>
		<div className="mtop5p">As web applications evolved from static pages to highly dynamic platforms, security threats 
			also grew in sophistication. One of the most dangerous and widespread attacks was <b>Cross-Site Scripting (XSS).</b></div>
		<div className="mtop15p">
			<div>In early web architectures:</div>
			<ul>
				<li className="mtop5p">Browsers trusted almost all JavaScript loaded by a page</li>
				<li className="mtop5p">Inline scripts were common</li>
				<li className="mtop5p">External scripts could be injected via user input or third-party libraries</li>
			</ul>
			<div className="mtop5p">Attackers exploited this trust to:</div>
			<ul>
				<li className="mtop5p">Steal cookies and session tokens</li>
				<li className="mtop5p">Execute malicious scripts in users’ browsers</li>
				<li className="mtop5p">Deface websites or redirect users</li>
			</ul>
			<div className="mtop15p">To address this <b>browser-side trust problem,</b> security researchers and browser 
			vendors collaborated under <b>W3C</b> to introduce a defensive mechanism that allows developers 
			to <b>explicitly declare what a browser is allowed to load and execute.</b></div>
			<div className="mtop5p">This mechanism became known as <b>Content Security Policy (CSP).</b></div>
		</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is Content Security Policy?</b></h2></div>
	<div className="mtop15p"><b>Content Security Policy (CSP)</b> is a browser security standard that allows web developers 
	to define <b>trusted sources of content</b> for a web application.</div>
	<div className="mtop5p">
		<div><b>Core idea:</b></div>
		<div className="mtop5p">“Only allow scripts, styles, images, and other resources from explicitly trusted sources.”</div>
	</div>
	<div className="mtop5p">Instead of trying to detect malicious code, CSP <b>prevents it from running in the first place.</b></div>

	<div className="mtop15p"><h5 className="blog-head"><b>What Problems Does CSP Solve?</b></h5></div>
	<div className="mtop5p">
		<div>CSP primarily protects against:</div>
		<ul>
			<li className="mtop5p">Cross-Site Scripting (XSS)</li>
			<li className="mtop5p">Data injection attacks</li>
			<li className="mtop5p">Clickjacking (in combination with other headers)</li>
			<li className="mtop5p">Malicious third-party scripts</li>
		</ul>
	</div>

	<div className="mtop15p"><h4 className="blog-head"><b>How CSP Works (Conceptually)?</b></h4></div>
	<div>
		<ol>
			<li className="mtop5p">The server sends a CSP policy via HTTP headers (or meta tags)</li>
			<li className="mtop5p">The browser reads the policy</li>
			<li className="mtop5p">The browser enforces it strictly</li>
			<li className="mtop5p">Any violation is blocked and optionally reported</li>
		</ol>
	</div>
	<div className="mtop5p">
		<div><b>Inportant:</b></div>
		<div className="mtop5p">CSP is <b>enforced by the browser,</b> not by JavaScript.</div>
	</div>

	<div className="mtop15p"><h2 className="blog-head"><b>Basic CSP Example</b></h2></div>
	<div className="mtop5p"><h5 className="blog-head"><b>Without CSP (Vulnerable)</b></h5></div>
	<div className="mtop5p">
		<Highlight content={WoCSP_EXAMPLE_JS} lang="html" />
	</div>
	<div className="mtop5p">If <code><b>userInput</b></code> contains malicious code, it executes.</div>
	<div className="mtop5p"><h5 className="blog-head"><b>With CSP (Protected)</b></h5></div>
	<div className="mtop5p">
		<Highlight content={`Content-Security-Policy: script-src 'self'`} lang="html" />
	</div>
	<div className="mtop5p">
		<div>Now:</div>
		<ul>
			<li className="mtop5p">Inline scripts <Icon type="FontAwesome" name="fa-times" style={{ marginRight:'5px', color:'red' }} /> blocked</li>
			<li className="mtop5p">External scripts from unknown domains <Icon type="FontAwesome" name="fa-times" style={{ marginRight:'5px', color:'red' }} /> blocked</li>
			<li className="mtop5p">Only scripts from the same origin <Icon type="FontAwesome" name="fa-check" style={{ marginRight:'5px', color:'green' }} /> allowed</li>
		</ul>
	</div>
	<div className="mtop5p"><h5 className="blog-head"><b>Key CSP Directives (Most Common)</b></h5></div>
	<div className="mtop5p">
		<SimpleTable header={["Directive", "Purpose"]} 
                columns={[
                    [(<code><b>default-src</b></code>), "Fallback for all resource types"],
					[(<code><b>script-src</b></code>), "Controls JavaScript sources"],
					[(<code><b>style-src</b></code>), "Controls CSS"],
					[(<code><b>img-src</b></code>), "Controls images"],
					[(<code><b>connect-src</b></code>), "Controls APIs, WebSockets"],
					[(<code><b>font-src</b></code>), "Controls fonts"],
					[(<code><b>frame-src</b></code>), "Controls iframes"],
					[(<code><b>object-src</b></code>), "Controls plugins (Flash, etc.)"]
				]} />
	</div>
 </div>);
};

export default Introduction;