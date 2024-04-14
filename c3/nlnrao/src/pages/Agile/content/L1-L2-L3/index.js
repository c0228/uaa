import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Breadcrumb from '@Components/breadcrumb/index.js';

const DefineL1L2L3 = () =>{
 return (<ContainerFluid>
    <Row>
        <Col all={8}>
            <Breadcrumb data={[{ "label": "Agile Methodology", "url":"#" },
                    { "label": "What is L1, L2, L3 Tier System of Remote IT Support?", "url":"#" }]} />
            <div className="mtop15p">
                <h3><b>What is L1, L2, L3 Tier System of Remote IT Support?</b></h3>
            </div>
            <div style={{ fontSize: '14px', lineHeight:'26px' }}>
            <i>In the context of Agile methodology, the terms <b>L1</b>, <b>L2</b> and <b>L3</b> typically refer to different tiers or levels 
            of support provided to the Client by IT Team for an Application in the Production.  These tiers are commonly 
            associated with remote IT support, but they can apply to various support structures.</i>
            </div>
            <div className="mtop35p"><h4 align="center"><b>Level-1 (L1) Tier Support</b></h4></div>
            <div className="mtop15p" style={{ fontSize: '14px', lineHeight:'26px' }}>
             <u><i>Level-1 (L1) Tier Support</i></u> serves as the frontline assistance for users encountering technical issues. These support agents are 
             often the initial point of contact, handling basic inquiries and routine tasks of the Application. 
            </div>
            <div class="mtop15p"><h5><b>Roles and Responsibilities</b></h5></div>
            <div class="mtop15p" style={{ fontSize: '14px', lineHeight:'26px' }}>
                <ul>
                    <li><b>Initial Point of Contact:</b> L1 support serves as the first line of contact for users encountering 
                    technical issues, providing a friendly and responsive interface for issue resolution.</li>
                    <li><b>Basic Troubleshooting:</b> L1 support agents perform initial diagnosis and troubleshooting of common 
                    technical problems, such as password resets, software installations, and connectivity issues.</li>
                    <li><b>Ticket Triage:</b> They categorize and prioritize incoming tickets based on severity and impact, ensuring 
                    timely resolution of critical issues.</li>
                    <li><b>Documentation:</b> L1 support maintains comprehensive documentation of troubleshooting steps, resolutions, and 
                    user interactions for future reference and knowledge sharing.</li>
                    <li><b>Escalation:</b> When unable to resolve an issue, L1 support escalates it to L2 support with detailed information 
                    to facilitate further investigation and resolution.</li>
                </ul>
            </div>
            <div className="mtop15p"><h5><b>Support Timeline</b></h5></div>
            <div className="mtop15p" style={{ fontSize: '14px', lineHeight:'26px' }}>
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
        </Col>
        <Col all={4}>
        </Col>
    </Row>
 </ContainerFluid>);
};

export default DefineL1L2L3;