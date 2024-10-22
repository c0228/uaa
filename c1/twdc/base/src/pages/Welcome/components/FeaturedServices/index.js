import React from "react";
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";
import FeatureTile from "./../../utils.js";

const FeaturedServices = () =>{
 const data = [{ icon:'fa-database', size:60, title:(<div>AI-Powered <br/>Recruitment</div>), desc:'Leverage advanced AI algorithms to streamline recruitment processes and find the perfect candidates.' },
    { icon:'fa-cogs', size:60, title:'Talent Acquisition Automation', desc:'Automate repetitive tasks to save time and focus on strategic talent acquisition.' },
    { icon:'fa-users', size:60, title:'Employee Engagement Platform', desc:'Foster a positive and engaging workplace culture with our employee engagement platform.' }];
 return (<div>
    <div align="center"><h4 style={{ fontFamily:'MetropolisBold' }}><b>FEATURED SERVICES</b></h4></div>
    <div className="pt-3">
      <ContainerFluid>
       <Row>
          {data?.map((d,i)=>{
            return (<Col key={i} md={4}>
              <FeatureTile icon={d?.icon} size={d?.size} title={d?.title} desc={d?.desc} />
            </Col>);
          })}
       </Row>
      </ContainerFluid>
      </div>
 </div>);
};

export default FeaturedServices;