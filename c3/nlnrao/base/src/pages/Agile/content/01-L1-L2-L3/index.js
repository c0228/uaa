import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const DefineL1L2L3 = ({ meta }) =>{

 useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }); },[]); // Smooth scroll to top

 const L1Support = ()=>{
  return (<>
    <div className="mtop35p"><h4 align="center" className="blog-head"><b>Level-1 (L1) Tier Support</b></h4></div>
    <div className="mtop15p blog-desc">
        <u><i>Level-1 (L1) Tier Support</i></u> serves as the frontline assistance for users encountering technical issues. These support 
        agents are often the initial point of contact, handling basic inquiries and routine tasks of the Application. 
    </div>
    <div class="mtop15p"><h5 className="blog-head"><b>Roles and Responsibilities</b></h5></div>
    <div class="mtop15p blog-desc">
        <ul>
            <li><b>Initial Point of Contact:</b> L1 support serves as the first line of contact for users encountering 
            technical issues, providing a friendly and responsive interface for issue resolution.</li>
            <li className="mtop15p"><b>Basic Troubleshooting:</b> L1 support agents perform initial diagnosis and troubleshooting of common 
            technical problems, such as password resets, software installations, and connectivity issues.</li>
            <li className="mtop15p"><b>Ticket Triage:</b> They categorize and prioritize incoming tickets based on severity and impact, ensuring 
            timely resolution of critical issues.</li>
            <li className="mtop15p"><b>Documentation:</b> L1 support maintains comprehensive documentation of troubleshooting steps, resolutions, and 
            user interactions for future reference and knowledge sharing.</li>
            <li className="mtop15p"><b>Escalation:</b> When unable to resolve an issue, L1 support escalates it to L2 support with detailed information 
            to facilitate further investigation and resolution.</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Support Timeline</b></h5></div>
    <div className="mtop15p blog-desc">
        <ul>
            <li>
                <div><b>Initial Response Time (0-2 hours) :</b></div>
                <div>L1 support aims to provide an initial response to user inquiries or reported issues promptly, usually 
                within minutes to a few hours, depending on the urgency and Service Level Agreements (SLAs).</div>
                <div><b>Example:</b> A user reports an issue with accessing their email account. L1 support responds within 
                30 minutes, acknowledging the ticket and initiating basic troubleshooting steps.</div>
            </li>
            <li className="mtop15p">
                <div><b>Resolution Time (Same day to 2 business days) :</b></div>
                <div>L1 support strives to resolve issues quickly, often within the same business day or within a few hours 
                for standard problems. Complex issues that require escalation to higher tiers may take longer to resolve, 
                but L1 support agents focus on swift troubleshooting and basic resolutions.</div>
                <div><b>Example:</b> An employee encounters difficulty installing a software application. L1 support troubleshoots 
                the issue, provides step-by-step instructions, and resolves it within the same business day.</div>
            </li>
        </ul>
    </div>
  </>);
 };

 const L2Support = ()=>{
  return (<>
    <div className="mtop35p"><h4 align="center" className="blog-head"><b>Level-2 (L2) Tier Support</b></h4></div>
    <div className="mtop15p blog-desc">
    <u><i>Level-2 (L2) Tier Support</i></u> comprises specialized technicians who handle escalated issues from Level 1 support. These agents possess 
    deeper technical knowledge and expertise to tackle complex problems that require advanced troubleshooting. They maintain open 
    communication channels with both users and Level 1 support to ensure seamless issue resolution and knowledge transfer.
    </div>
    <div class="mtop15p"><h5 className="blog-head"><b>Roles and Responsibilities</b></h5></div>
    <div class="mtop15p blog-desc">
        <ul>
            <li><b>Advanced Troubleshooting:</b> L2 support agents possess deeper technical expertise and undertake complex 
            troubleshooting tasks beyond the scope of L1 support, including system configuration, software conflicts, and 
            performance optimization.</li>
            <li className="mtop15p"><b>Escalation Handling:</b> They receive escalated issues from L1 support and conduct in-depth analysis to 
            identify root causes, leveraging specialized tools and resources for diagnosis.</li>
            <li className="mtop15p"><b>Knowledge Base Maintenance:</b> L2 support contributes to the development and maintenance of knowledge base 
            articles, troubleshooting guides, and best practices to empower L1 support and enhance overall support efficiency.</li>
            <li className="mtop15p"><b>Collaboration:</b> L2 support collaborates with other support tiers, development teams, and stakeholders to 
            resolve complex issues, provide technical guidance, and contribute to continuous improvement initiatives.</li>
            <li className="mtop15p"><b>Training and Mentoring:</b> They participate in training sessions to stay updated on emerging technologies, 
            industry trends, and organizational processes, and may mentor junior team members.</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Support Timeline</b></h5></div>
    <div className="mtop15p blog-desc">
        <ul>
            <li>
                <div><b>Escalation Time (Within 2-4 hours)</b></div>
                <div>Issues escalated from L1 to L2 support are typically addressed promptly, with escalation occurring within a 
                    predefined timeframe outlined in SLAs. This timeframe may range from a few hours to one business day, depending 
                    on the severity and impact of the issue.</div>
                <div><b>Example:</b> L1 support escalates an issue related to network connectivity issues affecting multiple users. 
                L2 support receives the escalation and begins investigating within 2 hours.</div>
            </li>
            <li className="mtop15p">
              <div><b>Resolution Time (1-3 business days)</b></div>
              <div>L2 support aims to provide comprehensive resolutions for escalated issues within a reasonable timeframe, often 
                within one to three business days. Complex problems may require additional investigation, testing, and coordination 
                with other teams, resulting in longer resolution times.</div>
              <div><b>Example:</b> A recurring software crash issue is escalated to L2 support. They conduct in-depth analysis, identify a 
                configuration conflict, and implement a solution within 2 business days</div></li>
        </ul>
    </div>
  </>);
 };

 const L3Support = ()=>{
    return (<>
      <div className="mtop35p"><h4 align="center" className="blog-head"><b>Level-3 (L3) Tier Support</b></h4></div>
      <div className="mtop15p blog-desc">
        <u><i>Level-3 (L3) Tier Support</i></u> represents the highest tier of expertise, comprising specialized engineers or 
        subject matter experts. These individuals possess extensive technical knowledge and experience in specific domains or 
        technologies. L3 support handles the most challenging and critical issues that require advanced diagnostics, code-level 
        analysis, or architectural changes. They collaborate closely with development teams to troubleshoot complex software bugs 
        or performance issues, often involving in-depth code reviews and testing. L3 support may also engage in capacity planning, 
        system optimization, and proactive maintenance to enhance overall system reliability and performance.
      </div>
      <div class="mtop15p"><h5 className="blog-head"><b>Roles and Responsibilities</b></h5></div>
      <div class="mtop15p blog-desc">
        <ul>
            <li><b>Specialized Expertise:</b> L3 support comprises highly skilled specialists or subject matter experts with in-depth 
            knowledge of specific technologies, systems, or domains.</li>
            <li class="mtop15p"><b>Complex Issue Resolution:</b> L3 support undertakes the resolution of the most challenging and critical issues, 
            involving advanced diagnostics, code-level analysis, and architectural changes.</li>
            <li class="mtop15p"><b>Collaboration with Development:</b> They collaborate closely with development teams to troubleshoot complex software 
            bugs, performance issues, and infrastructure challenges, providing insights for long-term solutions.</li>
            <li class="mtop15p"><b>Continuous Improvement:</b> L3 support drives continuous improvement initiatives, offering recommendations for system 
            enhancements, optimizations, and preventive measures to enhance overall reliability and performance.</li>
            <li class="mtop15p"><b>Strategic Planning:</b> They contribute to strategic planning activities, such as capacity planning, technology 
            roadmaps, and risk assessments, to align support efforts with organizational objectives and future requirements.</li>
        </ul>
      </div>
      <div className="mtop15p"><h5 className="blog-head"><b>Support Timeline</b></h5></div>
    <div className="mtop15p blog-desc">
        <ul>
            <li>
                <div><b>Escalation Time: Within 1-2 business days</b></div>
                <div>Issues that require escalation to L3 support are usually identified by L2 support based on their complexity, 
                impact, or specialized expertise needed for resolution. Escalation to L3 support typically occurs within a shorter 
                timeframe, often within hours or the same business day.</div>
                <div><b>Example:</b> L2 support escalates a critical system outage affecting production servers to L3 support. L3 support 
                begins investigation and coordination with development teams within 1 business day.</div>
            </li>
            <li className="mtop15p">
                <div><b>Resolution Time: 3 business days to 2 weeks</b></div>
                <div>L3 support addresses highly complex or critical issues that may require in-depth analysis, code-level debugging, 
                or architectural changes. Resolution times for L3 support can vary significantly depending on the nature of the problem, 
                ranging from a few days to several weeks for particularly challenging issues or those requiring collaboration with 
                development teams.</div>
                <div><b>Example:</b> An intricate issue involving database performance degradation is escalated to L3 support. They 
                conduct thorough analysis, collaborate with development and infrastructure teams, and implement optimizations over the 
                course of 1 week, followed by monitoring for stability for an additional week.</div>
            </li>
        </ul>
        It's important to note that these timelines are general estimates and may vary depending on the specific context, organizational 
        priorities, and resources available. Effective communication, clear SLAs, and collaboration between support tiers are essential 
        for ensuring timely and efficient issue resolution while meeting the needs of users and stakeholders.
    </div>
    </>);
 };

 return (<div>
    <Header menulinks={HeaderMenu} activeId="Home" />
 <ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <div className="mtop15p blog-desc">
            In the context of Agile methodology, the terms <b>L1</b>, <b>L2</b> and <b>L3</b> typically refer to different tiers or levels 
            of support provided to the Client by IT Team for an Application in the Production.  These tiers are commonly 
            associated with remote IT support, but they can apply to various support structures.
            </div>
            <L1Support />
            <L2Support />
            <L3Support />
            <div className="mtop35p mbot60p blog-desc">
            In terms of developers' involvement:
            <ul>
                <li className="mtop15p">L1 support may involve junior developers or support staff who handle basic troubleshooting and triage.</li>
                <li className="mtop15p">L2 support typically involves more experienced developers with a deeper understanding of the system's 
                architecture and codebase.</li>
                <li className="mtop15p">L3 support often requires highly skilled developers, architects, or specialists who can delve into complex 
                technical issues and provide advanced solutions.</li>
            </ul>
            Each level collaborates closely with the others, with issues escalating from L1 to L2 and potentially to L3 if necessary. 
            Effective communication and collaboration between these support tiers are essential for quickly and efficiently resolving 
            production issues and maintaining system reliability.
            </div>
        </Col>
        <Col all={4}>
        </Col>
    </Row>
 </ContainerFluid>
 </div>);
};

export default DefineL1L2L3;