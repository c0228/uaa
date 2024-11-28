import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { HeaderMenu } from '@Config/HeaderMenu.js';
import FeatureCard from '@Components/FeatureCard/index.js';
import Header from '@Templates/Header/index.js';
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';

const AboutUs = () =>{
 const Template1 = () =>{
   return ( <div className="wApp-template-navy  wApp-template-grid">
      <ContainerFluid>
      <Row>
         <Col md={12}>
         <div align="center" className="bis-hgl-header mbot15p">
            <b>About Broadway Info Services: Elevating Healthcare Revenue Cycle Management</b>
         </div>
         </Col>
      </Row>
      <Row className="row-flex-container">
         <Col md={6}>
         <div className="bis-hgl-text pad15p" style={{ color:'#eee' }}>
         We're Broadway Info Services, your trusted partner in optimizing healthcare revenue cycle management. Our comprehensive 
         suite of services, including medical coding, billing, and practice management, is designed to streamline operations, reduce 
         errors, and maximize revenue. By leveraging advanced technology and industry expertise, we empower healthcare providers to 
         focus on patient care while we handle the complexities of the administrative side.<br/><br/> Our experienced team leverages advanced 
         technology to streamline operations, reduce errors, and maximize revenue. 
         By partnering with us, you can:
         <ul className="padLeft15p">
            <li>Enhance your financial performance</li>
            <li>Focus on delivering exceptional patient care</li>
            <li>Reduce administrative burdens</li>
            <li>Improve overall practice efficiency</li>
         </ul><br/>
         With Broadway Info Services, you can rest assured that your revenue cycle is in good hands.
         </div>
         </Col>
         <Col md={6}>
            <div className="col-flex-container pad15p">
            <img src={process.env.PROJECT_URL+"assets/images/15.png"}
               style={{ borderRadius:'12px', width:'100%', height:'auto' }} />
            </div>
         </Col>
      </Row>
      </ContainerFluid>
      </div>);
 };

const Template2 = () =>{
   return (<div className="wApp-template-odd wApp-template-grid">
      <ContainerFluid>
      <Row>
         <Col md={12}>
            <div className="bis-hgl-header mtop15p padLeft15p"><b>Your Roadmap to Financial Success in Healthcare</b></div>
         </Col>
      </Row>
      <Row className="row-flex-container">
         <Col md={8}>
            <div className="bis-hgl-text pad15p">
            At Broadway Info Services, we're committed to simplifying the complex world of healthcare revenue cycle
            management (RCM). Our team of experienced professionals is dedicated to providing top-notch services 
            that streamline your operations, maximize reimbursements, and enhance patient satisfaction.<br/><br/>
            Our team of experienced professionals is committed to delivering exceptional service and results. We 
            leverage advanced technology and industry best practices to streamline processes, reduce errors, and 
            improve efficiency. Our services include medical coding, billing, claims processing, and revenue cycle 
            analytics.<br/><br/>
            We understand the unique challenges faced by healthcare providers, and we are committed to providing 
            customized solutions to meet their specific needs. Our goal is to help our clients improve their financial 
            performance, increase operational efficiency, and ensure compliance with regulatory requirements.<br/><br/>
            With a focus on transparency, accountability, and client satisfaction, Broadway Info Services is your trusted 
            partner in healthcare RCM. We are dedicated to building long-lasting relationships with our clients, based on 
            trust, integrity, and mutual success.
            </div>
         </Col>
         <Col md={4}>
            <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/14.png"} />
            </div>
         </Col>
      </Row>
      </ContainerFluid>
      </div>);
};

const Template3 = () =>{
   return (<div className="wApp-template-grid">
         <Row>
            <Col md={12}>
               <div className="bis-hgl-header mtop15p padLeft15p"><b>Our Mission</b></div>
               <div className="bis-hgl-text pad15p">
               At Broadway Info Services, we are dedicated to revolutionizing healthcare revenue cycle management (RCM) 
               by providing innovative solutions that empower healthcare providers to thrive.
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container mbot15p">
            <Col md={4}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/13.png"} />
               </div>
            </Col>
            <Col md={8}>
               <div className="bis-hgl-text">
               Our mission is to:<br/>
               <ul>
                  <li className="mtop15p"><b>Simplify Complexity:</b> We strive to simplify the intricate processes of RCM, reducing 
                  administrative burdens and freeing up valuable time for healthcare providers to focus on 
                  patient care.</li>
                  <li className="mtop15p"><b>Optimize Revenue:</b> We leverage cutting-edge technology and industry expertise to maximize 
                  revenue and minimize claim denials, ensuring healthcare providers receive the reimbursement they 
                  deserve.</li>
                  <li className="mtop15p"><b>Enhance Efficiency:</b> We implement streamlined workflows and automation tools to improve 
                  operational efficiency and reduce turnaround times, ultimately leading to faster payments and 
                  increased cash flow.</li>
                  <li className="mtop15p"><b>Ensure Compliance:</b> We stay abreast of the ever-evolving regulatory landscape to ensure that 
                     our clients adhere to all compliance standards, mitigating risks and avoiding penalties.</li>
                  <li className="mtop15p"><b>Foster Partnerships:</b> We build strong, collaborative relationships with our clients, acting as 
                     trusted advisors and partners in their journey to financial success.</li>
               </ul>
               </div>
            </Col>
         </Row>
      </div>);
};

const Template4 = () =>{
   return (<div className="wApp-template-odd wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p">
                  <b>Technology Driving Healthcare Efficiency</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="bis-hgl-text">
               At Broadway Info Services, we're committed to revolutionizing healthcare revenue cycle management (RCM) 
               through the power of technology. Our advanced solutions streamline processes, boost accuracy, and enhance 
               overall efficiency.                 
               <ul>
                  <li className="mtop15p"><b>Automated Workflows:</b> Our intelligent systems automate routine tasks such as claim submission, 
                  eligibility verification, and payment posting. This reduces manual effort, minimizes errors, and accelerates 
                  the entire revenue cycle.</li>
                  <li className="mtop15p"><b>Advanced Analytics:</b> We harness the power of data analytics to gain valuable insights into your RCM 
                  performance. By analyzing trends, identifying bottlenecks, and pinpointing areas for improvement, we optimize 
                  your operations and maximize revenue.</li>
                  <li className="mtop15p"><b>Secure Cloud-Based Platforms:</b> Our robust cloud infrastructure ensures secure and accessible data 
                  storage. This enables remote access, real-time collaboration, and seamless data sharing, empowering your team 
                  to work efficiently from anywhere.</li>
               </ul>
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/16.png"} style={{ marginTop:'25px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
               </div>
            </Col>
         </Row>
      </ContainerFluid>
   </div>);
};

const Template5 = () =>{
   return (<div className="wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p">
                  <b>Benefits of Our Technology-Driven Approach</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={5}>
               <div className="col-flex-container pad15p">
                  <img src={process.env.PROJECT_URL+"assets/images/17.png"} style={{ borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
               </div>
            </Col>
            <Col md={7}>
               <div className="bis-hgl-text pad15p">
               <ul className="padLeft15p">
                  <li><b>Increased Efficiency:</b> Automated workflows and streamlined processes lead 
                  to significant time savings and improved productivity.</li>
                  <li className="mtop15p"><b>Enhanced Accuracy:</b> Advanced analytics and data validation tools minimize 
                  errors and ensure accurate coding and billing.</li>
                  <li className="mtop15p"><b>Improved Cash Flow:</b> Faster claim processing, reduced denials, and timely 
                  payments contribute to a healthier cash flow.</li>
                  <li className="mtop15p"><b>Enhanced Compliance:</b> Our technology solutions help you stay up-to-date with 
                  industry regulations and avoid costly penalties.</li>
                  <li className="mtop15p"><b>Data-Driven Decision Making:</b> Real-time insights and actionable analytics 
                  empower you to make informed decisions that drive growth.</li>
               </ul>
               </div>
            </Col>
         </Row>
      </ContainerFluid>
   </div>);
};

const Template6 = () =>{
   const data = [{
      icon:'fa-shield',
      title:'Robust Security Measures',
      content:'We implement state-of-the-art security measures to safeguard your data from unauthorized access, use, disclosure, '+
         'alteration, or destruction. This includes advanced encryption technologies, firewalls, intrusion detection systems, and '+
         'regular security audits.'
    },{
      icon:'fa-lock',
      title:'Strict Access Controls',
      content:'We limit access to your data to authorized personnel on a need-to-know basis. Access controls are implemented to '+
         'ensure that only individuals with legitimate business reasons can access your information.'
    },{
      icon:'fa-user-secret',
      title:'Regular Security Training',
      content:'Our employees undergo regular security awareness training to stay informed about the latest threats and best '+
         'practices for data protection.'
    },{
      icon:'fa-stethoscope',
      title:'Compliance with HIPAA',
      content:'We adhere to the Health Insurance Portability and Accountability Act (HIPAA) and its regulations to protect '+
         'the privacy and security of your health information.'
    },{
      icon:'fa-exclamation-triangle',
      title:'Data Breach Response Plan',
      content:'We have a comprehensive data breach response plan in place to quickly identify, contain, and mitigate the '+
         'impact of any potential security incidents.'
    },{
      icon:'fa-search',
      title:'Regular Security Audits',
      content:'We conduct regular security audits and vulnerability assessments to identify and address potential security weaknesses.'
    }];
   return (<div className="wApp-template-odd wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header"><b>Our Commitment to Data Security</b></div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
               <div className="bis-hgl-text pad15p">
               At Broadway Info Services, we understand the critical importance of safeguarding your sensitive health 
               information. We are committed to maintaining the highest standards of data security and privacy.
               We employ a multi-layered approach to protect your data, including:
               </div>
            </Col>
         </Row>
         <FeatureCard data={data} rowSize={2} />
      </ContainerFluid>
   </div>);
};

const Template7 = () =>{
   const data = [{
      icon:'fa-calendar-check-o',
      title:'Reduced Administrative Burden',
      content:'We handle the day-to-day tasks of your revenue cycle, freeing you to focus on patient care.'
   },{
      icon:'fa-dollar',
      title:'Improved Cash Flow',
      content:'Our focus on accurate coding and claim submission leads to faster reimbursements.'
   },{
      icon:'fa-shield',
      title:'Enhanced Compliance',
      content:'Our experienced team ensures you comply with all relevant regulations.'
   },{
      icon:'fa-user',
      title:'Dedicated Account Management',
      content:'We assign a dedicated account manager to oversee your practice\'s RCM needs.'
   },{
      icon:'fa-expand',
      title:'Scalable Solutions',
      content:'Our services can be customized to accommodate the growth of your practice.'
   },{
      icon:'fa-bar-chart',
      title:'Advanced Reporting & Analytics',
      content:'We provide you with real-time insights into your RCM performance.'
   }];

   return (<div className="wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header">
                  <b>Why Choose Broadway Info Services?</b>
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
            <div align="center" className="bis-hgl-text pad15p">
            We are committed to providing our clients with the highest quality RCM services possible.<br/> Partner with Broadway 
            Info Services and experience the benefits of:
            </div>
            </Col>
         </Row>
         <FeatureCard data={data} rowSize={2} />
      </ContainerFluid>
      </div>);
};

 return (<div>
    <Header menulinks={HeaderMenu} activeId="AboutUs" />
      <Template1 />
      <Template2 />
      <Template3 />
      <Template4 />
      <Template5 />
      <Template6 />
      <Template7 />
      <Bottom />
    <Footer />
 </div>);
};

export default AboutUs;