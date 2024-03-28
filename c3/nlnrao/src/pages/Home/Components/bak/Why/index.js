import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const Why = ()=>{

 const featuresList = [{
    title:"Premium Quality Materials",
    desc:"Immerse yourself in the luxury of blinds crafted from the finest materials, ensuring durability, longevity, and a touch of refinement."
 },{
    title: "Tailored Craftsmanship",
    desc: "Each blind is meticulously crafted with precision and care, showcasing our dedication to delivering a product that exceeds expectations."
 },{
    title: "Versatility in Design",
    desc: "From classic aesthetics to contemporary flair, our diverse range of blinds caters to various styles and preferences, providing the perfect solution for any space."
 },{
    title: "Innovative Technology",
    desc: "Experience the convenience of modern living with blinds that integrate cutting-edge technology, offering enhanced control, automation, and energy efficiency."
 },{
    title: "Customization Expertise",
    desc: "Your space is unique, and so should be your blinds. Explore our customization options to tailor blinds that perfectly complement your interior design vision."
 },{
    title: "Effortless Functionality",
    desc: "Our blinds are designed for ease of use, ensuring that you can effortlessly control light, privacy, and ambiance with a simple touch."
 },{
    title: "Expert Guidance",
    desc: "The journey to finding the perfect blinds is made seamless with our knowledgeable and friendly team. We're here to assist you in every step of the selection and installation process."
 }];

 const Features = ({ list })=>{
  return (<>
   <ul>
    {list?.map((feature, index)=>{
     return (<li key={index} style={{ marginTop:'20px' }}>
      <div><span style={{ fontSize:'20px', color: bgColor }}><b>{feature?.title}</b></span></div>
      <div style={{ fontSize:'18px' }}>{feature?.desc}</div>
     </li>);
    })}
    </ul>
  </>);
 };

 const bgColor = '#ac22c3';

 return (<>
    <div style={{ padding:'30px', marginBottom:'65px' }}>
      <Row>
         <Col xs={12} xl={12} xxl={12}>
            <div align="center" style={{ marginTop:'55px', marginBottom:'20px' }}>
               <span style={{ fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color: bgColor }}>
                  <b>Why to choose Us?</b>
               </span>
            </div>
            <div align="center" style={{ fontSize:'18px' }}>
                At RollEasyBlinds, we take pride in offering more than just blinds; we provide a window into a world of 
                unmatched style, innovation, and functionality.<br/> Our commitment to excellence sets us apart, making us 
                your premier choice for window treatments.
            </div>
            <div align="center" style={{ paddingTop:'25px' }}><h4><b>Our Key Features</b></h4></div>
         </Col>
      </Row>
      <Row>
        <Col xs={12} xl={6} xxl={6}>
            <div>    
               <Features list={featuresList.slice(0, 4)} />
            </div>
        </Col>
        <Col xs={12} xl={6} xxl={6}>
            <div>
               <Features list={featuresList.slice(4)} />
            </div>
         </Col>
         </Row>
    </div>
 </>);
};

export default Why;