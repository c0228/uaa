import React from "react";
import { Row, Col } from "e-ui-react";
import FeatureCard from '@Components/FeatureCard/index.js';

const Benefits = () =>{
 const Items = () =>{
    const data = [{
          icon:'fa-home',
          title:'Luxury Accommodations',
          content:'Your pet enjoys cozy suites, soft bedding, and a home-like atmosphere with personalized care and attention.'
        },{
          icon:'fa-paw',
          title:'Fun & Fitness Sessions',
          content:'Daily play sessions, agility training, and interactive toys ensure your pet stays active and engaged.'
        },{
          icon:'fa-calendar-check-o',
          title:'Special Themed Days & Events',
          content:'From birthday parties to costume contests, we make every moment fun and memorable for your pet.'
        },{
          icon:'fa-heart',
          title:'Customized Care for Every Pet',
          content:'Whether your pet is shy, energetic, or a senior, we tailor care to meet their unique needs.'
        },{
          icon:'fa-users',
          title:'Safe & Supervised Socialization',
          content:'Your pets enjoy controlled and friendly interactions with other pets under expert supervision.'
        },{
          icon:'fa-gift',
          title:'Exclusive Membership & Loyalty Rewards',
          content:'Join our VIP Pet Club for discounts, priority bookings, and free services!'
        }];
        return (<FeatureCard data={data} />);
      };
      return (<div className="wApp-template-grid">
            <Row>
                <Col md={12}>
                    <div className="pad15p">
                    <div align="center" className="bis-hgl-header" style={{ color:'#611e06' }}><b>What Makes Us Special?</b></div>
                    <div align="center" className="bis-hgl-text mtop15p">
                      At Pets & Paws Kennel Services, we provide a loving, safe, and fun-filled environment <br/>
                      where every pet receives personalized care, comfort, and attention like family!
                    </div>
                    <div className="mtop15p"><Items /></div>
                    </div>
                </Col>
            </Row>
        
      </div>);
};

export default Benefits;