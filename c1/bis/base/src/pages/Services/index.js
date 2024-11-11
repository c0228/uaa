import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { scroller } from 'react-scroll';
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import FeatureCard from '@Components/FeatureCard/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Services = () =>{
   useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        scroller.scrollTo(hash.substring(1), {
          duration: 500,
          smooth: true
        });
      }
    }, []);

 const Template1 = () =>{
   const data = [{
      icon:'fa-stethoscope',
      title:'Medical Coding',
      content:'Our certified coders ensure accurate and timely coding of medical services, maximizing reimbursement potential.'
    },{
      icon:'fa-dollar',
      title:'Revenue Cycle Management',
      content:'We streamline your entire revenue cycle, from eligibility verification to payment posting, to improve efficiency and cash flow.'
    },{
      icon:'fa-file-text-o',
      title:'Medical Billing',
      content:'Our experts handle all aspects of medical billing, including claim submission, follow-up, and denial management.'
    },{
      icon:'fa-bar-chart',
      title:'Clinical Data Services',
      content:'We provide accurate data abstraction, analysis, and reporting to support clinical decision-making and regulatory compliance.'
    },{
      icon:'fa-users',
      title:'Expertise Team Support',
      content:'Our team of experienced professionals is well-versed in the latest industry regulations and coding guidelines.'
    },{
      icon:'fa-cog',
      title:'Efficiency Technology',
      content:'We leverage advanced technology and streamlined processes to optimize your revenue cycle.'
    },{
      icon:'fa-check-circle-o',
      title:'Accuracy Results',
      content:'Our focus on accuracy ensures timely claim payments and minimizes denials.'
    },{
      icon:'fa-shield',
      title:'Compliance',
      content:'We adhere to all applicable regulations, including HIPAA, to protect patient privacy and security.'
    },{
      icon:'fa-handshake-o',
      title:'Client-Centric Approach',
      content:'We prioritize your needs and provide personalized solutions to meet your specific requirements.'
    }];
   
    return (<div style={{ marginTop:'25px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center"><h2><b>Broadway Info Services: Your Trusted Partner in Healthcare RCM</b></h2></div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
               <div className="bis-hgl-text">
               Broadway Info Services is a leading healthcare revenue cycle management (RCM) company dedicated to optimizing your 
               financial operations. With a focus on efficiency, accuracy, and compliance, we provide a comprehensive range of 
               services to streamline your revenue cycle and maximize reimbursement. Our Key Services are
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
            <div className="bis-hgl-text">
               <FeatureCard data={data} />
               <div className="mtop15p">
                  By partnering with Broadway Info Services, you can improve your financial performance, 
                  reduce administrative burdens, and focus on delivering quality patient care.
               </div>
            </div>
            </Col>
         </Row>
      </ContainerFluid> 
      </div>);
 };
 
 const Template2 = () =>{
   return (<section id="medical-billing">
      <div style={{ marginTop:'15px', backgroundColor:'#e1e1e1', padding:'15px'  }}>
      <div style={{ marginTop:'65px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center"><h2><b>Medical Billing Services</b></h2></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <div className="bis-hgl-text">
               Our expert billing team ensures accurate and timely claim submission, follow-up, and 
               payment posting. We streamline your revenue cycle by:
               <ul>
                  <li className="mtop15p">
                     <b>Clean Claims Submission:</b> We minimize claim denials by ensuring accurate 
                     coding and complete documentation.
                  </li>
                  <li className="mtop15p">
                     <b>Efficient Follow-Up:</b> We proactively follow up on claims to accelerate reimbursement.
                  </li>
                  <li className="mtop15p">
                     <b>Accurate Charge Entry:</b> We accurately capture and bill for all services rendered.
                  </li>
                  <li className="mtop15p">
                     <b>Patient Financial Counseling:</b> We provide clear explanations of billing statements and 
                     assist with payment plans.
                  </li>
               </ul>
               <div className="mtop15p">
               By optimizing your billing processes, we help you improve cash flow and reduce administrative burdens.
               </div>
               </div>
            </Col>
         </Row>
      </ContainerFluid>
     </div>
   </div>
   </section>);
 };

 return (<div>
   <Header menulinks={HeaderMenu} activeId="Services" />
   <Template1 />
   <Template2 />

   <Footer />
 </div>);
};

export default Services;