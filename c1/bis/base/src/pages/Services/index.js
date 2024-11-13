import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { scroller } from 'react-scroll';
import Header from '@Templates/Header/index.js';
import Bottom from '@Templates/Bottom/index.js';
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
               services to streamline your revenue cycle and maximize reimbursement.<br/> Our Key Services are
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
               <div align="center" style={{ marginBottom:'35px' }}><h2><b>Medical Billing Services</b></h2></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <div className="bis-hgl-text">
               Our expert billing team ensures accurate and timely claim submission, follow-up, and 
               payment posting.<br/> We streamline your revenue cycle by:
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
            <Col md={6}>
               <img src="http://localhost/BIS/18.png"  style={{ marginTop:'15px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }}   />
            </Col>
         </Row>
      </ContainerFluid>
     </div>
   </div>
   </section>);
 };

 const Template3 = () =>{
   return (<section id="medical-transcription">
      <div style={{ marginTop:'65px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center"><h2><b>Medical Transcription Services : Unlock the Power of Precision</b></h2></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <img src="http://localhost/BIS/19.png" style={{ marginTop:'30px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
            </Col>
            <Col md={6}>
               <div className="mtop15p bis-hgl-text">
               In today's fast-paced healthcare environment, accurate and timely documentation is crucial. Our medical transcription 
               services are designed to streamline your workflow and enhance the quality of patient care. Our team of highly skilled 
               medical transcriptionists possesses a deep understanding of medical terminology and clinical documentation standards. 
               We deliver precise transcriptions within strict deadlines, ensuring that your reports are available when you need them. 
               We handle a wide range of medical specialties, including but not limited to cardiology, orthopedics, neurology, 
               gastroenterology, dermatology, oncology, radiology, psychiatry, and general medicine.<br/><br/>
               We prioritize patient confidentiality and adhere to strict HIPAA regulations to safeguard sensitive health information. 
               Our state-of-the-art technology and efficient processes ensure accuracy and speed. Our services integrate seamlessly with 
               your existing workflow, minimizing disruptions and maximizing productivity.<br/><br/>
               By outsourcing your medical transcription needs to us, you can free up valuable time for your physicians and staff, 
               minimize errors and ensure the integrity of your medical records, improve efficient billing and reimbursement, contribute 
               to better patient outcomes, and reduce administrative burdens.<br/><br/>
               Partner with Broadway Info Services to elevate your practice. Our commitment to quality, accuracy, and confidentiality 
               ensures that your medical records are always in good hands.
               </div>
            </Col>
         </Row>
      </ContainerFluid>
      </div>
   </section>);
 };

 const Template4 = () =>{
   return (<section id="medical-coding">
      <div style={{ marginTop:'15px', backgroundColor:'#e1e1e1', padding:'15px'  }}>
      <div style={{ marginTop:'65px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div className="mbot15p" align="center"><h2><b>Medical Coding Services : Our Expert's Precision in Every Code</b></h2></div>
               <div className="mtop15p mbot15p"><h4><b>Elevate Your Revenue Cycle with Accurate Medical Coding</b></h4></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <div className="bis-hgl-text">
               At Broadway Info Services, we understand the critical role medical coding plays in healthcare revenue 
               cycle management. Our team of certified medical coders is dedicated to ensuring accurate and timely coding, 
               maximizing reimbursement, and minimizing claim denials.<br/><br/>
               Our team of certified medical coders is dedicated to providing accurate and timely coding services for a wide 
               range of medical specialties. We specialize in ICD-10-CM and CPT coding, ensuring that your claims are coded 
               correctly and submitted promptly. Our commitment to quality and compliance guarantees that your practice 
               receives optimal reimbursement while adhering to industry regulations.<br/><br/>
               We understand the complexities of medical coding and the impact it has on your revenue cycle. Our experienced coders 
               stay up-to-date with the latest coding guidelines and regulatory changes, ensuring that your claims are processed 
               efficiently and accurately.<br/><br/>
               We utilize advanced coding software and technology to streamline the coding process and improve productivity. 
               Our rigorous quality assurance processes, including regular audits and reviews, guarantee the accuracy of every code.<br/><br/>
               By partnering with Broadway Info Services, you can rest assured that your medical coding is in expert hands.</div>
            </Col>
            <Col md={6}>
               <img src="http://localhost/BIS/20.png" style={{ marginTop:'35px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
            </Col>
         </Row>
      </ContainerFluid>
      </div>
      </div>
   </section>);
 };

 const Template5 = () =>{
   return (<section id="compliance-audits">
      <div style={{ marginTop:'65px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center"><h2><b>Compliance Audits</b></h2></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <img src="http://localhost/BIS/21.png" style={{  marginTop:'35px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
            </Col>
            <Col md={6}>
               <div className="mtop15p bis-hgl-text">
               At Broadway Info Services, we understand the importance of compliance in today's complex healthcare landscape. 
               Our comprehensive compliance audit services are designed to identify potential risks, ensure regulatory adherence, 
               and protect your practice from costly penalties.<br/><br/>
               Our expert auditors conduct thorough reviews of your practice's operations, focusing on areas such as coding and 
               billing practices, documentation, HIPAA compliance, and Stark Law and Anti-Kickback Statute adherence. We leverage 
               industry best practices and advanced auditing techniques to identify areas for improvement and potential 
               vulnerabilities.<br/><br/>
               By partnering with us, you can gain peace of mind knowing that your practice is operating in compliance with all 
               relevant regulations. Our compliance audits can help you:<br/><br/>
               <ul>
                  <li>Minimize financial risk</li>
                  <li>Improve operational efficiency</li>
                  <li>Enhance patient care & Protect your reputation</li>
               </ul>
               Let us help you safeguard your practice's future. Contact us today to learn more about our compliance audit services.
               </div>
            </Col>
         </Row>
      </ContainerFluid>
    </div>
   </section>);
 };

 const Template6 = () =>{
   return (<section id="practice-consulting">
      <div style={{ marginTop:'15px', backgroundColor:'#e1e1e1', padding:'15px'  }}>
      <div style={{ marginTop:'65px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div className="mbot15p" align="center"><h2><b>Practice Consulting</b></h2></div>
               <div className="mtop15p"><h4><b>Optimize Your Practice with Expert Consulting</b></h4></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <div className="mtop15p bis-hgl-text">
               Our practice consulting services are designed to help healthcare providers improve their operational 
               efficiency, financial performance, and patient care. Our experienced consultants offer a wide range 
               of services, including:
               <ul className="mtop15p">
                  <li><b>Revenue Cycle Optimization:</b> We analyze your revenue cycle to identify areas for improvement, 
                  such as claim denials, coding errors, and payment delays.</li>
                  <li><b>Practice Management:</b> We provide guidance on best practices for managing your practice, including 
                  staffing, scheduling, and workflow optimization.</li>
                  <li><b>Financial Analysis:</b> We analyze your financial performance to identify trends and opportunities 
                  for cost reduction and revenue growth.</li>
                  <li><b>Regulatory Compliance:</b> We help you stay up-to-date with the latest regulatory changes and ensure 
                  compliance with HIPAA, Stark Law, and other relevant regulations.</li>
               </ul>
               </div>
               <div className="mtop15p bis-hgl-text">
               By partnering with us, you can gain valuable insights and strategies to enhance your practice's performance and 
               achieve your long-term goals.
               </div>
            </Col>
            <Col md={6}>
               <img src="http://localhost/BIS/22.png" style={{ marginTop:'35px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
            </Col>
         </Row>
      </ContainerFluid>
      </div>
      </div>
   </section>);
 };

 const Template7 = () =>{
   return (<section id="credentialing-services">
      <div style={{ marginTop:'65px', marginBottom:'65px' }}>
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center"><h2><b>Credentialing Services</b></h2></div>
               <div className="mtop15p mbot15p"><h4><b>Streamline Your Credentialing Process with Expert Support</b></h4></div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <img src="http://localhost/BIS/23.png" style={{ marginTop:'25px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
            </Col>
            <Col md={6}>
               <div className="mtop15p bis-hgl-text">
               Credentialing is a complex and time-consuming process that is essential for healthcare providers. Our credentialing 
               services are designed to simplify this process and ensure that your providers are able to practice efficiently and 
               effectively.<br/><br/> 
               Our experienced team will guide you through the entire credentialing process, from initial application 
               to final approval. We will handle all aspects of the process, including:<br/><br/>
               <ul>
                  <li>Gathering and organizing required documentation</li>
                  <li>Completing and submitting applications</li>
                  <li>Following up with payers and licensing boards</li>
                  <li>Monitoring credentialing expiration dates and re-credentialing deadlines</li>
               </ul>
               </div>
               <div className="mtop15p bis-hgl-text">
               By outsourcing your credentialing needs to us, you can save time and resources while ensuring that your providers 
               are able to focus on what they do best: providing quality patient care.
               </div>
            </Col>
         </Row>
      </ContainerFluid>
    </div>
   </section>);
 };

 return (<div>
   <Header menulinks={HeaderMenu} activeId="Services" />
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

export default Services;