import React from "react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from '@MainComponents/order-list/index.js';

const Integration = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Integrating Security Testing into the Spring Boot Lifecycle</b></h2></div>
    <div className="mtop15p"><BlogIndexHeader type="h4" index="2.1" title="Static Code Analysis (SAST)" /></div>
    <div>
    Static Application Security Testing (SAST) helps detect vulnerabilities early in the development phase. This approach involves 
    scanning source code to identify security flaws before the code is compiled and deployed.
    </div>

    <div className="mtop15p"><b>Tools for SAST in Spring Boot:</b></div>
    <div>
        <OrderList data={[(<div><b>SonarQube:</b> Analyzes code for security vulnerabilities and code smells.</div>),
            (<div><b>Checkmarx:</b> Provides deep static analysis for detecting OWASP Top 10 vulnerabilities.</div>),
            (<div><b>FindSecBugs:</b> A plugin for FindBugs that detects security vulnerabilities in Java applications.</div>)]} />
    </div>
 
    <div className="mtop15p"><b>Best Practices for SAST Integration:</b></div>
    <div>
        <OrderList data={[(<div>Automate SAST as part of your CI/CD pipeline.</div>),
                        (<div>Define security rules and quality gates to break builds on detecting critical vulnerabilities.</div>),
                        (<div>Perform regular scans to detect newly introduced vulnerabilities.</div>)]} />
    </div>

    <div className="mtop15p"><BlogIndexHeader type="h4" index="2.2" title="Dependency Scanning" /></div>
    <div>Spring Boot applications rely heavily on third-party libraries, which can introduce security vulnerabilities. 
        Keeping dependencies updated and free from known vulnerabilities is crucial.</div>

    <div className="mtop15p"><b>Tools for Dependency Scanning:</b></div>
    <div>
        <OrderList data={[(<div><b>OWASP Dependency-Check:</b> Identifies dependencies with known vulnerabilities.</div>),
                (<div><b>Snyk:</b> Continuously monitors dependencies and alerts about security issues.</div>),
                (<div><b>Whitesource Bolt:</b> Integrates with CI/CD pipelines for dependency security management.</div>)]} />
    </div>

    <div className="mtop15p"><b>Best Practices:</b></div>
    <div>
        <OrderList data={[(<div>Regularly scan dependencies for known vulnerabilities.</div>),
                (<div>Avoid using outdated or unmaintained libraries.</div>),
                (<div>Use dependency management tools like Dependabot.</div>)]} />
    </div>

    <div className="mtop15p"><BlogIndexHeader type="h4" index="2.3" title="Dynamic Application Security Testing (DAST)" /></div>
    <div>DAST helps identify runtime vulnerabilities by testing a running instance of the application.</div>
    <div className="mtop15p"><b>Tools for DAST:</b></div>
    <div>
        <OrderList data={[(<div><b>OWASP ZAP (Zed Attack Proxy):</b> Automates scanning for web application vulnerabilities.</div>),
            (<div><b>Burp Suite:</b> Conducts penetration testing and dynamic security assessments.</div>),
            (<div><b>Netsparker:</b> Provides automated web security scanning.</div>)]} />
    </div>
    <div className="mtop15p"><b>Best Practices:</b></div>
    <div>
        <OrderList data={[(<div>Perform periodic security testing on staging environments.</div>),
                (<div>Automate DAST scans in CI/CD pipelines.</div>),
                (<div>Validate security findings and prioritize remediation efforts.</div>)]} />
    </div>

    <div className="mtop15p"><BlogIndexHeader type="h4" index="2.4" title="Penetration Testing" /></div>
    <div>Penetration testing simulates real-world attacks to identify exploitable vulnerabilities.</div>
    <div className="mtop15p"><b>Common Penetration Testing Techniques:</b></div>
    <div>
        <OrderList data={[(<div>SQL Injection testing</div>),
            (<div>Cross-Site Scripting (XSS) detection</div>),
            (<div>Authentication and authorization testing</div>),
            (<div>API security assessment</div>)]} />
    </div>
    <div className="mtop15p"><b>Best Practices:</b></div>
    <div>
        <OrderList data={[(<div>Conduct penetration tests at least once per release cycle.</div>),
            (<div>Use both automated tools and manual testing techniques.</div>),
            (<div>Engage ethical hackers for comprehensive security assessments.</div>)]} />
    </div>
 </div>);
};

export default Integration;