import React from "react";
import { Row, Col } from "e-ui-react";
import FeatureCard from '@Components/FeatureCard/index.js';

const Benefits = () =>{
 const Items = () =>{
    const data = [{
          icon:'fa-window-maximize',
          title:'Maximized Reimbursement',
          content:'Our medical coding and claims submission expertise boosts your reimbursement rates.'
        },{
          icon:'fa-money',
          title:'Optimized Cash Flow',
          content:'Efficient claims processing and timely payment collection streamline your financial operations.'
        },{
          icon:'fa-cog',
          title:'Minimized Administrative Overhead',
          content:'Our streamlined processes and automation tools reduce your administrative burden.'
        },{
          icon:'fa-shield',
          title:'Assured Compliance',
          content:'We stay updated on the latest industry regulations to ensure compliance and mitigate risks.'
        },{
          icon:'fa-database',
          title:'Prioritized Data Security',
          content:'We safeguard your sensitive patient information with robust security measures.'
        },{
          icon:'fa-tachometer',
          title:'Improved Efficiency',
          content:'Our solutions enhance your overall operational efficiency, saving you time and resources.'
        }];
        return (<FeatureCard data={data} />);
      };
      return (<div className="wApp-template-grid">
            <Row>
                <Col md={12}>
                    <div className="pad15p">
                    <div align="center" className="bis-hgl-header"><b>The Benefits of Partnering with Broadway Info Services</b></div>
                    <div align="center" className="bis-hgl-text mtop15p">
                    By choosing Broadway Info Services as your healthcare billing partner, you can enjoy the 
                    following benefits:</div>
                    <div className="mtop15p"><Items /></div>
                    </div>
                </Col>
            </Row>
        
      </div>);
};

export default Benefits;