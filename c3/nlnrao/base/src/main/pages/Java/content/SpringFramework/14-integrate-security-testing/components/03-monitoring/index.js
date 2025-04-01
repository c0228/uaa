import React from "react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from '@MainComponents/order-list/index.js';

const Monitoring = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div className="mtop15p"><h2 className="blog-head"><b>3. Real-Time Security Monitoring and Incident Response</b></h2></div>
    
    <div><BlogIndexHeader type="h4" index="3.1" title="Logging and Monitoring" /></div>
    <div>Proper logging and monitoring help detect security incidents in real time.</div>
    <div className="mtop15p"><b>Tools for Security Logging and Monitoring:</b></div>
    <div>
        <OrderList data={[(<div><b>ELK Stack (Elasticsearch, Logstash, Kibana):</b> Collects and analyzes logs for security threats.</div>),
                (<div><b>Prometheus & Grafana:</b> Monitors application health and security metrics.</div>),
                (<div><b>Splunk:</b> Provides real-time security analytics.</div>)]} />
    </div>
    <div className="mtop15p"><b>Best Practices:</b></div>
    <div>
        <OrderList data={[(<div>Use structured logging for better visibility.</div>),
            (<div>Monitor authentication and access logs.</div>),
            (<div>Set up alerts for unusual activities.</div>)]} />
    </div>

    <div><BlogIndexHeader type="h4" index="3.2" title="Intrusion Detection and Prevention Systems (IDPS)" /></div>
    <div>IDPS helps detect and mitigate security threats in real time.</div>
    <div className="mtop15p"><b>Recommended IDPS Tools:</b></div>
    <div>
        <OrderList data={[(<div><b>Wazuh:</b> Open-source security monitoring and intrusion detection.</div>),
                (<div><b>Snort:</b> Network intrusion detection system (NIDS).</div>),
                (<div><b>OSSEC:</b> Host-based intrusion detection system (HIDS).</div>)]} />
    </div>
    <div className="mtop15p"><b>Best Practices:</b></div>
    <div>
        <OrderList data={[(<div>Deploy IDPS on critical network segments.</div>),
                (<div>Regularly update threat detection signatures.</div>),
                (<div>Automate incident response workflows.</div>)]} />
    </div>

    <div><BlogIndexHeader type="h4" index="3.3" title="Secure API Gateway and Web Application Firewalls (WAFs)" /></div>
    <div>A secure API gateway and WAF protect against API abuse, DDoS attacks, and other web threats.</div>
    <div className="mtop15p"><b>Recommended Tools:</b></div>
    <div>
        <OrderList data={[(<div><b>Spring Cloud Gateway:</b> Provides security features like rate limiting and authentication.</div>),
                (<div><b>AWS WAF:</b> Protects applications from common threats.</div>),
                (<div><b>Cloudflare WAF:</b> Offers DDoS mitigation and security filtering.</div>)]} />
    </div>
    <div className="mtop15p"><b>Best practices:</b></div>
    <div>
        <OrderList data={[(<div>Enforce rate limiting on sensitive APIs.</div>),
                (<div>Use JWT for secure authentication.</div>),
                (<div>Enable logging and auditing for API requests.</div>)]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p mbot15p">Integrating security testing into the Spring Boot lifecycle is crucial for building robust and secure 
        applications. By incorporating SAST, DAST, dependency scanning, and penetration testing, developers can identify 
        vulnerabilities early and remediate them before they become major threats. Additionally, real-time monitoring using 
        logging, IDPS, and WAFs ensures quick detection and response to security incidents.<br/><br/>
        By following best practices and leveraging the right tools, organizations can enhance the security posture of their 
        Spring Boot applications and protect against evolving cyber threats. Security should be a continuous process embedded 
        within the SDLC rather than an afterthought, ensuring a resilient and secure application ecosystem.
    </div>
 </div>);
};

export default Monitoring;