import React from "react";
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";
import './index.css';

const FeaturedServices = () =>{
 const data = [{ 
    icon:'fa-database', size:60, 
    title:'Medical Billing and Coding', 
    desc:'Our expert team ensures accurate and timely medical coding and billing, maximizing your revenue while minimizing errors and denials.' 
  },
  { 
    icon:'fa-cogs', 
    size:60, 
    title:'Revenue Cycle Management', 
    desc:'Streamline your revenue cycle with our solutions, including claims submission and accounts receivable management.' 
  },
  { 
    icon:'fa-users', 
    size:60, 
    title:'Compliance and Regulatory Support', 
    desc:'Stay compliant with our team keeps you updated and ensures your practice adheres to all guidelines.' 
  }];
 
  const FeatureTile = ({ icon, size, title, desc, config }) =>{
    return (<div className="wApp-featureTile-section">
        <div className="wApp-featureTile-iconDiv">
            <Icon type="FontAwesome" name={icon} className="wApp-featureTile-icon" color={config?.color?.icon} />
        </div>
        <div className="wApp-featureTile-titleDiv">
            <div className="wApp-featureTile-title" style={{ color:config?.color?.title }}><b>{title}</b></div>
            <div className="wApp-featureTile-desc">{desc}</div>
        </div>
     </div>);
  };

 return (<div className="wApp-featureService-section">
    <div align="center">
      <div className="wApp-featureService-title"><b>FEATURED SERVICES</b></div>
    </div>
    <div>
       <Row>
          {data?.map((d,i)=>{
            return (<Col key={i} md={4} className="wApp-featureService-col">
              <FeatureTile icon={d?.icon} size={d?.size} title={d?.title} desc={d?.desc} config={{ color: { title: '#fff' }}} />
            </Col>);
          })}
       </Row>
      </div>
 </div>);
};

export default FeaturedServices;