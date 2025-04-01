import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const RESTRICT_ACCESS_FIREWALLS = `iptables -A INPUT -p tcp --dport 9093 -s 192.168.1.100 -j ACCEPT
iptables -A INPUT -p tcp --dport 9093 -j DROP`;

const NetworkSecurity = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Network Security</b></h2></div>

    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="3.1" title="Restricting Access with Firewalls" />
    <div className="padLeft5p">
        <div>Limit Kafka access to trusted IPs using firewall rules (iptables, AWS Security Groups, or Cloud Network ACLs).</div>
        <div className="mtop15p"><b>Example:</b></div>
            <Highlight content={RESTRICT_ACCESS_FIREWALLS} lang="html" />
        </div>
    </div>

    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="3.2" title="Isolating Kafka Using Private Networks" />
        <div className="padLeft5p">
            <OrderList data={[(<div>Deploy Kafka in a <b>private subnet</b> and use VPN or bastion hosts for secure access.</div>),
            (<div>Use <b>VPC peering</b> or <b>service mesh</b> for controlled inter-service communication.</div>)]} />
        </div>
    </div>

    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="3.3" title="Securing ZooKeeper" />
        <div className="padLeft5p">
            <div>Kafka relies on <b>ZooKeeper</b>, which must also be secured:</div>
            <OrderList data={[(<div>Restrict access to ZooKeeper nodes.</div>),
                (<div>Enable authentication using <b>Digest-MD5</b> or <b>Kerberos</b>.</div>),
                (<div>Encrypt traffic using TLS.</div>)]} />
        </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Monitoring and Logging</b></h2></div>
    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="4.1" title="Enable Audit Logging" />
    <div className="padleft5p">Kafka provides logging via <b>log4j</b>. Configure it to log security-related events such as 
    authentication failures and ACL modifications.</div>
    </div>

    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="4.2" title="Use SIEM for Threat Detection" />
    <div className="padLeft5p">
        <OrderList data={[(<div>Integrate Kafka logs with <b>Security Information and Event Management (SIEM)</b> tools 
            such as Splunk, ELK, or Datadog.</div>),
            (<div>Set up alerts for anomalies like excessive authentication failures.</div>)]} />
    </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>5. Vulnerability Scanning and Penetration Testing</b></h2></div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="5.1" title="Regular Vulnerability Scanning" />
        <div className="padLeft5p">
            <div>Use security scanners like:</div>
            <OrderList data={[(<div><b>Nessus</b></div>),
                (<div><b>OpenVAS</b></div>),
                (<div><b>Qualys</b></div>),
                (<div><b>AWS Inspector</b> (for Cloud Deployments)</div>)]} />
            <div>Scan Kafka brokers, ZooKeeper nodes, and client applications for known vulnerabilities and outdated 
                dependencies.</div>
        </div>
    </div>

    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="5.2" title="Conducting Penetration Testing" />
        <div className="padLeft5p">
            <div>Perform penetration testing using:</div>
            <OrderList data={[(<div><b>Burp Suite</b> for API security testing</div>),
                (<div><b>Metasploit</b> for exploit detection</div>),
                (<div><b>Kali Linux tools</b> for network security testing</div>),
                (<div><b>Apache Kafka Security Toolkits</b> for stress testing authentication and encryption</div>)]} />
        </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>6. Security Patching and Updates</b></h2></div>

    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="6.1" title="Keeping Kafka and Dependencies Updated" />
        <div className="padLeft5p">
            <div>Regularly update:</div>
            <OrderList data={[(<div>Kafka Brokers</div>),
                (<div>ZooKeeper</div>),
                (<div>Java Runtime (JDK)</div>),
                (<div>Security Libraries (e.g., BouncyCastle, OpenSSL)</div>)]} />
        </div>
    </div>
            
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="6.2" title="Automating Security Patch Management" />
        <div className="padLeft5p">
            <div>Use automated tools like:</div>
            <OrderList data={[(<div><b>Ansible</b> or <b>Puppet</b> for patch deployment</div>),
                (<div><b>AWS Systems Manager Patch Manager</b> for cloud environments</div>),
                (<div><b>Docker Image Scanners</b> for containerized Kafka deployments</div>)]} />
        </div>
    </div>

 </div>);
};

export default NetworkSecurity;