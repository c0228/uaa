import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { scroller } from 'react-scroll';
import Upper from '@Templates/Upper/index.js';
import Header from '@Templates/Header/index.js';
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import FeatureCard from '@Components/FeatureCard/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const FutureProjects = () =>{
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
   
    return (<div className="wApp-template-navy wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p" style={{ color:'#fff' }}>
                  <b>Online Pet Cell Bookings: Convenient & Hassle-Free Reservations for Your Pet’s Stay</b>
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={6}>
               <div className="bis-hgl-text pad15p" style={{ color:'#ddd' }}>
               At Pets & Paws Kennel Services, we are working on introducing an online pet cell booking system to make your 
               experience seamless and stress-free.<br/><br/> With just a few clicks, pet owners will be able to reserve a cozy and 
               secure space for their furry friends from the comfort of their homes. Our user-friendly platform will allow you 
               to check availability, select preferred dates, choose cell types, and customize services according to your 
               pet’s needs.<br/><br/>
               The online booking system will offer real-time updates, instant confirmations, and secure payment options, ensuring 
               convenience and transparency. Whether you're planning a short-term stay or an extended boarding period, this feature 
               will make the process quick, easy, and reliable.<br/><br/>
               Our goal is to provide a smooth, hassle-free experience for pet owners while ensuring their pets enjoy a comfortable 
               and well-managed stay. Stay tuned for this exciting upgrade at Pets & Paws Kennel Services!
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/08.jpg"} style={{ border:'0.5vw solid #000', borderRadius:'0.8vw' }} />    
               </div>
            </Col>
         </Row>
      </ContainerFluid> 
      </div>);
 };
 
 const Template2 = () =>{
   return (<section id="medical-billing">
      <div className="wApp-template-odd wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p">
                  <b>E-Commerce Pet Store: One-Stop Destination for All Your Pet’s Needs</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="bis-hgl-text pad15p">
               At Pets & Paws Kennel Services, we are excited to introduce our upcoming E-Commerce Pet Store, where pet owners 
               can conveniently shop for premium pet essentials from the comfort of their homes.<br/><br/> 
               Our online store will offer a wide range of high-quality pet products, including nutritious food, comfortable 
               bedding, grooming essentials, toys, accessories, and healthcare products.<br/><br/>
               We aim to provide top-rated, vet-approved products to ensure your pet’s health, happiness, and well-being. With 
               secure online payments, doorstep delivery, and easy returns, shopping for your furry friend will be more convenient 
               and stress-free than ever before. Our store will also feature special discounts, seasonal offers, and exclusive 
               bundles to give you the best value for your money.<br/><br/>
               Stay tuned as we work towards launching this exciting new platform, making pet care simpler, smarter, and more 
               accessible for every pet parent!
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/09.jpg"}  
                  style={{ marginTop:'15px', borderRadius:'12px', border:'0.5vw solid #000' }}   />
               </div>
            </Col>
         </Row>
      </ContainerFluid>
   </div>
   </section>);
 };

 const Template3 = () =>{
   return (<section id="medical-transcription">
      <div className="wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p">
                  <b>Individual Cell Access - 360° Camera : Real-Time Monitoring for Your Peace of Mind</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/10.jpg"} 
                     style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we understand how much you care about your pet’s safety and well-being, even when 
               they are away from home. That’s why we are developing an advanced 360° camera monitoring system that will allow pet 
               owners to check on their pets anytime, from anywhere.<br/><br/> 
               Each pet cell will be equipped with a high-definition 360-degree camera, providing a complete view of your pet’s 
               space in real time.<br/><br/>
               Through our secure mobile app or web portal, you’ll be able to watch live footage, receive activity updates, and 
               ensure your pet is comfortable and happy. This innovative feature will give you peace of mind, knowing that your 
               beloved pet is safe, well-cared for, and in a secure environment.<br/><br/>
               With our cutting-edge technology, we are committed to making pet boarding more transparent, reliable, and reassuring 
               for every pet parent!
               </div>
            </Col>
         </Row>
      </ContainerFluid>
      </div>
   </section>);
 };

 const Template4 = () =>{
   return (<section id="medical-coding">
      <div className="wApp-template-odd wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p">
                  <b>Pet Adoption : Give a Loving Home to a Furry Friend</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we believe that every pet deserves a loving home.<br/><br/> 
               Our upcoming Pet Adoption Program aims to connect abandoned, rescued, and homeless pets with caring and responsible 
               pet owners. Whether you are looking for a playful puppy, a gentle cat, or a loyal companion, our adoption program will 
               help you find the perfect match for your family.<br/><br/>
               We ensure that all our adoptable pets receive proper vaccinations, health check-ups, and basic training before finding 
               their forever homes. Our team will guide you through the adoption process, pet care tips, and responsibilities to ensure 
               a smooth transition for both you and your new furry friend.<br/><br/>
               By adopting a pet, you are not just gaining a companion—you are saving a life and giving them a second chance at 
               happiness. Join us in creating a better future for animals in need!
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/11.jpg"} 
                     style={{ marginTop:'35px', borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
         </Row>
      </ContainerFluid>
      </div>
   </section>);
 };

 const Template5 = () =>{
   return (<section id="compliance-audits">
      <div className="wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p"><b>Pet Mating Services: Responsible Breeding for Healthy and Happy Pets</b></div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/12.jpg"} 
                     style={{  borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we are dedicated to providing safe, ethical, and well-managed pet mating services 
               for responsible pet owners.<br/><br/> Our expert-guided program ensures that pets are paired based on breed compatibility, 
               health conditions, and genetic well-being to promote healthy offspring.<br/><br/>
               We prioritize comprehensive health screenings, vaccination checks, and temperament assessments before introducing 
               pets for mating. Our facility offers a comfortable and stress-free environment where pets can interact naturally 
               under professional supervision. Additionally, we provide guidance on post-mating care, pregnancy monitoring, and 
               newborn pet care to support pet owners throughout the process.<br/><br/>
               Our goal is to ensure healthy breeding practices while maintaining the highest ethical standards. Whether you're 
               looking to expand your pet family or seeking a suitable mate for your furry companion, our Pet Mating Services 
               provide a trusted, responsible, and well-regulated solution for all pet lovers.
               </div>
            </Col>
         </Row>
      </ContainerFluid>
    </div>
   </section>);
 };

 const Template6 = () =>{
   return (<section id="practice-consulting">
      <div className="wApp-template-odd wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div className="bis-hgl-header" align="center"><b>Practice Consulting</b></div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
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
               <div className="mtop15p bis-hgl-text">
               By partnering with us, you can gain valuable insights and strategies to enhance your practice's performance and 
               achieve your long-term goals.
               </div>
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/22.png"} style={{ marginTop:'35px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
               </div>
            </Col>
         </Row>
      </ContainerFluid>
      </div>
   </section>);
 };

 const Template7 = () =>{
   return (<section id="credentialing-services">
      <div className="wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header"><b>Credentialing Services: Streamline Your Credentialing Process with Expert Support</b></div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/23.png"} 
                     style={{ marginTop:'25px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #ccc' }} />
               </div>
            </Col>
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
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
               <div className="mtop15p bis-hgl-text">
               By outsourcing your credentialing needs to us, you can save time and resources while ensuring that your providers 
               are able to focus on what they do best: providing quality patient care.
               </div>
               </div>
            </Col>
         </Row>
      </ContainerFluid>
    </div>
   </section>);
 };

 return (<div>
   <Upper />
   <Header menulinks={HeaderMenu} activeId="FutureProjects" />
   <Template1 />
   <Template2 />
   <Template3 />
   <Template4 />
   <Template5 />
   <Bottom />
   <Footer />
 </div>);
};

export default FutureProjects;