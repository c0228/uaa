import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Upper from '@Templates/Upper/index.js';
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
            <b>About Pets & Paws Kennel Services: A Home Away from Home for Your Beloved Pets!</b>
         </div>
         </Col>
      </Row>
      <Row className="row-flex-container">
         <Col md={6}>
         <div className="bis-hgl-text pad15p" style={{ color:'#eee' }}>
         At Pets & Paws Kennel Services, we are passionate about providing top-quality care, comfort, and companionship 
         for your beloved pets.<br/>
         Our state-of-the-art facility is designed to provide a stress-free and enjoyable experience for pets of all sizes 
         and breeds. We offer:
         <ul className="padLeft15p">
            <li>Spacious, cozy accommodations with soft bedding and climate control</li>
            <li>Secure play areas for interactive activities and socialization</li>
            <li>24/7 supervision by trained professionals to ensure safety and well-being</li>
            <li>A clean and hygienic space with sanitization for a healthy stay</li>
         </ul>
         </div>
         </Col>
         <Col md={6}>
            <div className="col-flex-container">
            <img src={process.env.PROJECT_URL+"assets/images/02.gif"}
               style={{ borderRadius:'12px', width:'100%', height:'auto', border:'0.5vw solid #000' }} />
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
            <div className="bis-hgl-header mtop15p padLeft15p"><b>Comfortable & Spacious Kennels</b></div>
         </Col>
      </Row>
      <Row>
         <Col md={12}>
            <div className="bis-hgl-text pad15p">
            At Pets & Paws Kennel Services, we provide 15 well-ventilated, secure, and cozy kennels, ensuring a comfortable 
            stay for your furry friends. Each cell is equipped with a fan to maintain a cool and refreshing environment, 
            especially during warm days.
            </div>
         </Col>
      </Row>
      <Row className="row-flex-container">
         <Col md={6}>
            <div className="bis-hgl-text pad15p">
            <ul>
               <li><b>Spacious Individual Cells –</b> Designed to provide enough room for pets to relax and move comfortably. Secluded areas for pets who prefer a calm and peaceful environment.</li>
               <li className="mtop15p"><b>Proper Ventilation & Cooling –</b> Each kennel is fitted with fan facilities to ensure a fresh airflow.</li>
               <li className="mtop15p"><b>Clean & Hygienic Spaces –</b> Regularly sanitized to maintain a safe and healthy environment.</li>
               <li className="mtop15p"><b>Soft Bedding & Cozy Atmosphere –</b> Your pet enjoys a warm, home-like experience during their stay.</li>
            </ul>
            </div>
         </Col>
         <Col md={6}>
            <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/03.gif"} 
               style={{ borderRadius:'12px', width:'100%', height:'auto', border:'0.5vw solid #000' }}  />
            </div>
         </Col>
      </Row>
      <Row>
         <Col md={12}>
            <div className="bis-hgl-text pad15p">
               Whether your pet is staying for a short visit or an extended period, our 15 well-maintained kennel cells provide 
               the perfect balance of comfort, safety, and care!
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
               <div align="center" className="bis-hgl-header mtop15p mbot15p padLeft15p">
                  <b>Pet's House Location MapView: Your Pet's Cozy Corner</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container mbot15p">
            <Col md={6}>
               <div className="col-flex-container padLeft15p">
                  <img src={process.env.PROJECT_URL+"assets/images/arch.png"} />
               </div>
            </Col>
            <Col md={6}>
               <div className="bis-hgl-text pad15p">
               Our care center offers 13 cozy and comfortable cells, each designed to provide a safe and stimulating environment for 
		         your pet. These cells are thoughtfully arranged to ensure minimal disturbance and maximum comfort.<br/><br/>
		         <b>Standard Cells:</b> These individual cells are perfect for single pets who enjoy their own space. They are equipped 
               with everything your pet needs to stay happy and healthy, including cozy bedding, stimulating toys, and fresh water.<br/><br/>
		         <b>Double Cell:</b> This larger cell is ideal for multiple pets from the same household who can share a space. It provides 
               ample room for them to play, rest, and bond with each other.
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
               <div align="center" className="bis-hgl-header">
                  <b>Our Story & Commitment</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="bis-hgl-text pad15p mtop15p">
               Founded by passionate pet lovers, Pets & Paws Kennel Services was established with a simple mission:               
               <ul>
                  <li className="mtop15p">To create a home-like environment where pets feel happy and stress-free.</li>
                  <li className="mtop15p">To provide personalized care that meets each pet’s unique needs.</li>
                  <li className="mtop15p">To ensure safety, hygiene, and professional supervision at all times.</li>
               </ul>
               <div>We understand that every pet is special, which is why we offer customized services, ranging from 
               boarding and daycare.</div>
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/05.gif"} 
                  style={{ marginTop:'25px', borderRadius:'12px', border:'0.5vw solid #000' }} />
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
                  <b>Why Choose Pets & Paws Kennel Services?</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={5}>
               <div className="col-flex-container pad15p">
                  <img src={process.env.PROJECT_URL+"assets/images/06.gif"} style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
            <Col md={7}>
               <div className="bis-hgl-text pad15p">
               <ul className="padLeft15p">
                  <li><b>Experienced & Caring Staff –</b> Passionate pet caregivers trained in handling various breeds.</li>
                  <li className="mtop15p"><b>Fun & Social Atmosphere –</b> Supervised interactions with other pets to encourage play and bonding</li>
                  <li className="mtop15p"><b>Photo & Video Updates –</b> Stay connected with your pet through daily updates</li>
                  <li className="mtop15p"><b>Affordable & Flexible Packages –</b> Quality services at competitive prices</li>
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
    <Upper />
    <Header menulinks={HeaderMenu} activeId="AboutUs" />
      <Template1 />
      <Template2 />
      <Template3 />
      <Template4 />
      <Template5 />
      <Bottom />
    <Footer />
 </div>);
};

export default AboutUs;