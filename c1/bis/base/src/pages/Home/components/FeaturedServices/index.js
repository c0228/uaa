import React from "react";
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";
import FeatureTile from "./../../utils.js";

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
 
 return (<div>
    <div align="center"><h4 style={{ fontFamily:'MetropolisBold' }}><b>FEATURED SERVICES</b></h4></div>
    <div className="pt-3">
       <Row>
          {data?.map((d,i)=>{
            return (<Col key={i} md={4} style={{ paddingBottom:'45px' }}>
              <FeatureTile icon={d?.icon} size={d?.size} title={d?.title} desc={d?.desc} />
            </Col>);
          })}
       </Row>
      </div>
 </div>);
};

export default FeaturedServices;