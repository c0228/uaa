import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const AboutUs = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} activeId="AboutUs" />
         <Row>
            <Col md={12}>
            <div align="center"><h2><b>About Broadway Info Services</b></h2></div></Col>
         </Row>
         <div style={{marginTop:'15px', backgroundColor:'#e1e1e1', padding:'15px'  }}>
         <div style={{ marginTop:'25px', marginBottom:'25px' }}>
         <Row>
            <Col md={12}>
               <div><h2><b>Your Roadmap to Financial Success in Healthcare</b></h2></div>
            </Col>
         </Row>
         <Row>
            <Col md={8}>
               <div style={{ marginTop:'15px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
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
         </Row>
         </div>
         </div>

         <div style={{marginTop:'15px', padding:'15px'  }}>
         <div style={{ marginTop:'25px', marginBottom:'25px' }}>
            <Row>
               <Col md={12}>
                  <div align="center"><h2><b>Our Mission</b></h2></div>
               </Col>
            </Row>
            <Row>
               <Col md={8}>
                  <div style={{ marginTop:'15px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
                  At Broadway Info Services, we are dedicated to revolutionizing healthcare revenue cycle management (RCM) 
                  by providing innovative solutions that empower healthcare providers to thrive.<br/><br/> 
                  Our mission is to:<br/><br/>
                  <ul>
                     <li><b>Simplify Complexity:</b> We strive to simplify the intricate processes of RCM, reducing 
                     administrative burdens and freeing up valuable time for healthcare providers to focus on 
                     patient care.</li>
                     <li><b>Optimize Revenue:</b> We leverage cutting-edge technology and industry expertise to maximize 
                     revenue and minimize claim denials, ensuring healthcare providers receive the reimbursement they 
                     deserve.</li>
                     <li><b>Enhance Efficiency:</b> We implement streamlined workflows and automation tools to improve 
                     operational efficiency and reduce turnaround times, ultimately leading to faster payments and 
                     increased cash flow.</li>
                     <li>Ensure Compliance: We stay abreast of the ever-evolving regulatory landscape to ensure that 
                        our clients adhere to all compliance standards, mitigating risks and avoiding penalties.</li>
                     <li>Foster Partnerships: We build strong, collaborative relationships with our clients, acting as 
                        trusted advisors and partners in their journey to financial success.</li>
                  </ul>





                  </div>
               </Col>
            </Row>
         </div>
         </div>
    <Footer />
 </div>);
};

export default AboutUs;