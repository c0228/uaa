import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { scroller } from 'react-scroll';
import Upper from '@Templates/Upper/index.js';
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
      icon:'fa-refresh',
      title:'Everyday Pet Cell Cleaning',
      content:(<div>We maintain high hygiene standards by disinfecting each pet cell daily with pet-safe cleaning solutions. 
         This ensures a fresh, germ-free, and odor-free environment.</div>)
    },{
      icon:'fa-lightbulb-o',
      title:'Pet Cell with Light and Fan',
      content:(<div>Each of our 15 pet cells is equipped with proper lighting and fan facilities to keep the temperature 
         comfortable and well-ventilated, ensuring a cozy stay for your pet.</div>)
    },{
      icon:'fa-paw',
      title:'Pet Walking',
      content:(<div>Daily walks and exercise are crucial for your pet's physical and mental well-being. Our trained caregivers 
         ensure your furry friend gets enough outdoor time, fresh air, and activity every day.</div>)
    },{
      icon:'fa-tree',
      title:'Remote Peaceful Area',
      content:(<div>Located in a calm and natural environment, our facility provides a peaceful stay, free from city noise and 
         distractions, allowing pets to feel relaxed and stress-free.</div>)
    },{
      icon:'fa-shield',
      title:'Watchman & Security Surveillance',
      content:(<div>Your pet’s safety is our priority! We have 24/7 security surveillance and trained watchmen to ensure a secure 
         and protected environment for all pets.</div>)
    },{
      icon:'fa-cutlery',
      title:'Kitchen for Pets',
      content:(<div>We provide fresh, nutritious, and balanced meals tailored to each pet’s dietary needs, ensuring they stay 
         healthy and well-fed throughout their stay.</div>)
    },{
      icon:'fa-truck',
      title:'Pickup & Drop Services',
      content:(<div>Busy schedule? No worries! Our safe and reliable pickup and drop services ensure hassle-free 
         transportation for your pet.</div>)
    },{
      icon:'fa-stethoscope',
      title:'Doctor Consultation for Pets',
      content:(<div>We provide on-call veterinary consultations to ensure your pet's health and well-being. Any medical 
         concerns are immediately addressed by professionals.</div>)
    }];
   
    return (<div className="wApp-template-navy wApp-template-grid">
      <ContainerFluid>
         <Row>
            <Col md={12}>
               <div align="center" className="bis-hgl-header mbot15p" style={{ color:'#fff' }}>
                  <b>Services Offered at Pets & Paws Kennel Services</b>
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
               <div className="bis-hgl-text pad15p" style={{ color:'#ddd' }}>
               At Pets & Paws Kennel Services, we go the extra mile to ensure your pet’s comfort, health, and happiness. Our 
               range of premium services is designed to provide a safe, stress-free, and enriching experience for your furry 
               friends.<br/><br/> 
               <div align="center">Our Key Services are</div>
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
            <div className="bis-hgl-text">
               <FeatureCard data={data} rowSize={2} colorConfig={{ color:{ title:"#fff", content:"#ddd", icon:"#fff" } }} />
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
                  <b>Everyday Pet Cell Cleaning: Ensuring a Hygienic & Comfortable Stay for Your Pet</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="bis-hgl-text pad15p">
               At Pets & Paws Kennel Services, cleanliness is our top priority! We ensure that every pet cell is thoroughly 
               cleaned and disinfected daily using pet-safe, high-quality cleaning solutions.<br/><br/> Our dedicated staff maintains a 
               hygienic and odor-free environment, preventing the spread of germs and ensuring your pet enjoys a fresh, 
               comfortable, and healthy space.<br/><br/> A clean kennel means a happy and stress-free pet, and we take every step to provide 
               the best sanitation standards for their well-being.
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container pad15p">
               <img src={process.env.PROJECT_URL+"assets/images/04.gif"}  
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
                  <b>Pet Cell with Light and Fan: Comfortable & Well-Ventilated Space for Your Pet</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="col-flex-container pad15p">
                  <img src={process.env.PROJECT_URL+"assets/images/07.gif"} 
                     style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we prioritize your pet’s comfort and well-being by providing spacious 
               pet cells equipped with proper lighting and fan facilities. Whether it's a warm summer day or a chilly 
               evening, we ensure a well-ventilated and temperature-controlled environment for a relaxing stay.<br/><br/> The 
               cool breeze from the fans keeps pets comfortable, while adequate lighting creates a bright and welcoming 
               space. Our setup is designed to prevent heat stress and discomfort, ensuring your furry friend enjoys a 
               safe, cozy, and stress-free experience throughout their stay with us.
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
                  <b>Pet Walking: Keeping Your Pet Active, Healthy & Happy</b>
               </div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="pad15p bis-hgl-text pad15p">
               At Pets & Paws Kennel Services, we understand that regular exercise is essential for your pet’s physical 
               and mental well-being. That’s why we provide daily pet walking sessions in a safe and spacious environment, 
               allowing your furry friend to stretch, explore, and enjoy the fresh air. Our trained staff ensures that pets 
               get their necessary movement and playtime, reducing boredom, anxiety, and restlessness.<br/><br/>
               Each walk is tailored to your pet’s energy levels and individual needs, ensuring a stress-free and enjoyable 
               experience. Whether it’s a gentle stroll for senior pets or an energetic walk for active dogs, we provide the 
               perfect balance of exercise and fun.
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/08.gif"} 
                     style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
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
               <div align="center" className="bis-hgl-header mbot15p"><b>Remote Peaceful Area: A Calm & Tranquil Retreat for Your Pet</b></div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/05.jpg"} 
                     style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we provide a serene and stress-free environment away from the hustle and 
               bustle of city life.<br/><br/> Our remote peaceful area is surrounded by nature, fresh air, and open spaces, allowing 
               pets to relax, unwind, and feel at ease.<br/><br/>
               Whether your pet needs a break from a noisy urban setting or simply enjoys a calm and peaceful stay, our facility 
               offers a safe and comfortable space where they can enjoy their time without disturbances.<br/><br/> 
               With Pets & Paws Kennel Services, your pet will experience a home away from home, filled with peace, comfort, and happiness.
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
               <div className="bis-hgl-header" align="center"><b>Kitchen for Pets: Nutritious & Delicious Meals for a Healthy Pet</b></div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we believe that a well-balanced diet is key to a happy and healthy pet. Our 
               dedicated pet kitchen prepares fresh, nutritious, and hygienic meals tailored to meet the dietary needs of 
               each pet.<br/><br/>
               We use high-quality ingredients to prepare meals that boost immunity, improve digestion, and maintain overall 
               well-being. Our staff follows strict hygiene standards to ensure safe food preparation and handling. If your pet 
               has any allergies or dietary restrictions, we customize their meals accordingly.<br/><br/>
               At Pets & Paws Kennel Services, we treat every pet like family, ensuring they enjoy home-cooked goodness in every bite!
               </div>
            </Col>
            <Col md={6}>
               <div className="col-flex-container">
               <img src={process.env.PROJECT_URL+"assets/images/06.jpg"} style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
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
               <div align="center" className="bis-hgl-header">
                  <b>Doctor Consultation for Pets: Expert Veterinary Care for Your Pet’s Health & Well-being</b></div>
            </Col>
         </Row>
         <Row className="row-flex-container">
            <Col md={6}>
               <div className="col-flex-container">
                  <img src={process.env.PROJECT_URL+"assets/images/07.jpg"} 
                     style={{ borderRadius:'12px', border:'0.5vw solid #000' }} />
               </div>
            </Col>
            <Col md={6}>
               <div className="pad15p bis-hgl-text">
               At Pets & Paws Kennel Services, we prioritize your pet’s health and happiness by offering professional veterinary 
               consultations. Our expert veterinarians are available to provide routine health check-ups, vaccinations, and medical 
               advice to ensure your pet stays in top condition. Whether it’s a minor health concern or a need for a comprehensive 
               medical evaluation, we make sure your furry friend receives the best care possible.<br/><br/>
               Regular check-ups help in the early detection of illnesses, ensuring that pets remain healthy and active. Our vet team 
               also offers nutritional guidance, dental care tips, and preventive treatments to support your pet’s overall well-being. 
               If your pet requires specialized medical attention, we provide timely referrals and emergency assistance.<br/><br/>
               With our compassionate and professional approach, you can rest assured that your beloved pet is in safe and caring 
               hands at Pets & Paws Kennel Services.
               </div>
            </Col>
         </Row>
      </ContainerFluid>
    </div>
   </section>);
 };

 return (<div>
   <Upper />
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