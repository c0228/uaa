import React from "react";
import { Row, Col, Icon } from "e-ui-react";
import './index.css';

const FeaturedServices = () =>{
 const data = [{ 
    icon:'fa-bed', size:60, 
    title:'Overnight Boarding',
    desc:'Our caring staff provides comfortable and secure overnight accommodations for your furry friends. We ensure their well-being with regular feeding, exercise, and plenty of love and attention.' 
  },
  { 
    icon:'fa-paw',
    size:60, 
    title:'Daycare & Playtime', 
    desc:'Give your pet the gift of socialization and fun! Our daycare program offers supervised playtime in spacious play areas, allowing your pet to interact with other pets and burn off energy.' 
  },
  { 
    icon:'fa-scissors', 
    size:60, 
    title:'Grooming & Pampering', 
    desc:'From baths and haircuts to nail trims and pawdicures, our professional groomers will have your pet looking and feeling their best. We use high-quality products and cater to all breeds and coat types.' 
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